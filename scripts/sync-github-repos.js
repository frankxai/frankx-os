const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CONFIG = {
  orgs: ['frankxai', 'ai-architect-academy', 'arcanea-labs', 'oci-ai-architects'],
  outputFile: path.join(__dirname, 'repos/index.yaml'),
  backupDir: path.join(__dirname, 'repos/backups')
};

const C = { reset: '\x1b[0m', green: '\x1b[32m', yellow: '\x1b[33m', blue: '\x1b[34m', red: '\x1b[31m' };

function log(msg, color = 'reset') {
  console.log(`${C[color]}${msg}${C.reset}`);
}

function exec(command) {
  try {
    return execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
  } catch (error) {
    log(`Error: ${command}`, 'red');
    return null;
  }
}

function getOrgRepos(org) {
  log(`Fetching ${org}...`, 'blue');
  let repos = [];
  let page = 1;
  
  while (true) {
    const output = exec(`gh repo list ${org} --limit 100 --json name,url,description,isPrivate,isFork,repositoryTopics --page ${page}`);
    if (!output) break;
    try {
      const data = JSON.parse(output);
      if (data.length === 0) break;
      repos = repos.concat(data);
      page++;
    } catch (e) {
      break;
    }
  }
  
  return repos.map(repo => ({
    org,
    name: repo.name,
    url: repo.url,
    description: repo.description || '',
    isPrivate: repo.isPrivate,
    isFork: repo.isFork,
    topics: repo.repositoryTopics?.map(t => t.topic.name) || []
  }));
}

function categorizeRepo(repo) {
  const topics = repo.topics.map(t => t.toLowerCase());
  const name = repo.name.toLowerCase();
  const tags = [...topics];
  
  if (name.includes('mcp')) tags.push('mcp');
  if (name.includes('claude')) tags.push('claude-code');
  if (name.includes('oracle') || name.includes('oci')) tags.push('oracle');
  if (name.includes('arcanea')) tags.push('arcanea');
  if (name.includes('starlight')) tags.push('starlight');
  if (name.includes('agent')) tags.push('ai-agents');
  if (name.includes('music') || name.includes('audio') || name.includes('vibe')) tags.push('audio');
  if (name.includes('academy') || name.includes('course') || name.includes('workshop')) tags.push('education');
  if (name.includes('web') || name.includes('site')) tags.push('web');
  
  return { ...repo, tags: [...new Set(tags)] };
}

function loadExistingConfig() {
  try {
    const content = fs.readFileSync(CONFIG.outputFile, 'utf-8');
    const repos = [];
    const lines = content.split('\n');
    let currentRepo = null;
    let inRepos = false;
    
    for (const line of lines) {
      if (line.trim().startsWith('repos:')) {
        inRepos = true;
        continue;
      }
      if (inRepos && line.trim().startsWith('- org:')) {
        const m = line.match(/org:\s*(.+)/);
        if (m) currentRepo = { org: m[1].trim() };
      }
      if (currentRepo) {
        const nameM = line.match(/name:\s*(.+)/);
        const tagsM = line.match(/tags:\s*\[(.*)\]/);
        const statusM = line.match(/status:\s*(.+)/);
        if (nameM) currentRepo.name = nameM[1].trim();
        if (tagsM) currentRepo.tags = tagsM[1].split(',').map(t => t.trim());
        if (statusM) currentRepo.status = statusM[1].trim();
        if (line.trim() === '' || line.startsWith('  #') || line.startsWith('  - org:')) {
          if (currentRepo.name) repos.push(currentRepo);
          currentRepo = null;
        }
      }
    }
    return repos;
  } catch (e) { return []; }
}

function generateYAML(repos) {
  const orgs = [...new Set(repos.map(r => r.org))];
  let yaml = 'repos:\n';
  
  for (const org of orgs) {
    const orgRepos = repos.filter(r => r.org === org);
    yaml += `  # ============================================================================\n`;
    yaml += `  # ${org.toUpperCase()} ORGANIZATION\n`;
    yaml += `  # ============================================================================\n\n`;
    
    for (const repo of orgRepos) {
      yaml += `  - org: ${repo.org}\n`;
      yaml += `    name: ${repo.name}\n`;
      yaml += `    url: ${repo.url}\n`;
      if (repo.description) yaml += `    description: ${repo.description}\n`;
      if (repo.tags?.length) yaml += `    tags: [${repo.tags.join(', ')}]\n`;
      yaml += `    status: ${repo.status || 'active'}\n`;
      if (repo.isPrivate) yaml += `    visibility: private\n`;
      if (repo.isFork) yaml += `    isFork: true\n`;
      yaml += `\n`;
    }
  }
  return yaml;
}

function createBackup() {
  try {
    if (!fs.existsSync(CONFIG.backupDir)) fs.mkdirSync(CONFIG.backupDir, { recursive: true });
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const bp = path.join(CONFIG.backupDir, `index-${ts}.yaml`);
    if (fs.existsSync(CONFIG.outputFile)) {
      fs.copyFileSync(CONFIG.outputFile, bp);
      log(`Backup: ${bp}`, 'yellow');
    }
  } catch (e) { log(`Backup failed: ${e.message}`, 'yellow'); }
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const specificOrg = args.find(a => a.startsWith('--org='))?.split('=')[1];
  
  log('\n=== GitHub Repo Sync ===\n', 'blue');
  if (dryRun) log('DRY RUN MODE\n', 'yellow');
  
  const orgsToProcess = specificOrg ? [specificOrg] : CONFIG.orgs;
  let allRepos = [];
  
  for (const org of orgsToProcess) {
    const repos = getOrgRepos(org);
    allRepos = allRepos.concat(repos.map(categorizeRepo));
  }
  
  log(`Found ${allRepos.length} repos\n`, 'green');
  
  const existing = loadExistingConfig();
  const existingMap = new Map(existing.map(r => [`${r.org}/${r.name}`, r]));
  
  const mergedRepos = allRepos.map(repo => {
    const key = `${repo.org}/${repo.name}`;
    const existingData = existingMap.get(key);
    if (existingData) {
      return {
        ...repo,
        tags: [...new Set([...(repo.tags || []), ...(existingData.tags || [])])],
        status: existingData.status || repo.status,
        note: existingData.note
      };
    }
    return repo;
  });
  
  const byOrg = {};
  for (const repo of mergedRepos) {
    if (!byOrg[repo.org]) byOrg[repo.org] = [];
    byOrg[repo.org].push(repo);
  }
  
  log('Summary:', 'blue');
  for (const [org, repos] of Object.entries(byOrg)) {
    log(`  ${org}: ${repos.length} repos`, 'reset');
  }
  
  if (dryRun) {
    log('\nDry run. Run without --dry-run to save.', 'yellow');
    return;
  }
  
  createBackup();
  fs.writeFileSync(CONFIG.outputFile, generateYAML(mergedRepos));
  log(`\nUpdated ${CONFIG.outputFile}`, 'green');
  log(`Total: ${mergedRepos.length} repos\n`, 'green');
}

main().catch(e => { log(`Error: ${e.message}`, 'red'); process.exit(1); });
