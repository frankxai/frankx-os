const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, '..');

function loadJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(path.join(BASE, file), 'utf-8'));
  } catch (e) { return null; }
}

function loadYAML(file) {
  try {
    const content = fs.readFileSync(path.join(BASE, file), 'utf-8');
    const lines = content.split('\n');
    const data = { repos: [] };
    let current = null;
    
    for (const line of lines) {
      if (line.includes('- org:')) {
        current = {};
        data.repos.push(current);
      }
      if (current) {
        if (line.includes('org:')) current.org = line.split(':')[1]?.trim();
        if (line.includes('name:')) current.name = line.split(':')[1]?.trim();
        if (line.includes('tags:')) current.tags = line.split(':')[1]?.trim();
      }
    }
    return data;
  } catch (e) { return null; }
}

function generateReport() {
  console.log('\n');
  console.log('════════════════════════════════════════════════════════════');
  console.log('  FRANKX OS STATUS DASHBOARD');
  console.log('════════════════════════════════════════════════════════════');
  console.log('');

  const relationships = loadJSON('repos/relationships.json');
  const reposIndex = loadYAML('repos/index.yaml');

  if (relationships?.organizations) {
    console.log('📦 ORGANIZATIONS');
    console.log('────────────────────────────────────────');
    for (const [key, org] of Object.entries(relationships.organizations)) {
      console.log(`  ${key}: ${org.repos} repos - ${org.focus}`);
    }
    console.log('');
  }

  if (relationships?.projects) {
    console.log('🎯 PROJECTS');
    console.log('────────────────────────────────────────');
    for (const [key, proj] of Object.entries(relationships.projects)) {
      console.log(`  ${proj.name}`);
      console.log(`    Phase: ${proj.phase} | Launch: ${proj.launchTarget || 'TBD'}`);
    }
    console.log('');
  }

  if (reposIndex?.repos) {
    const byOrg = {};
    for (const repo of reposIndex.repos) {
      if (!byOrg[repo.org]) byOrg[repo.org] = 0;
      byOrg[repo.org]++;
    }
    console.log('📂 REPOSITORIES');
    console.log('────────────────────────────────────────');
    for (const [org, count] of Object.entries(byOrg)) {
      console.log(`  ${org}: ${count} repos`);
    }
    console.log(`  Total: ${reposIndex.repos.length} repos`);
    console.log('');
  }

  if (relationships?.luminors) {
    console.log('✨ LUMINORS');
    console.log('────────────────────────────────────────');
    for (const lum of relationships.luminors) {
      console.log(`  ${lum.name} (${lum.domain})`);
    }
    console.log('');
  }

  if (relationships?.canonicalFrequencies?.gates) {
    console.log('🚪 TEN GATES');
    console.log('────────────────────────────────────────');
    for (const gate of relationships.canonicalFrequencies.gates) {
      console.log(`  ${gate.gate}. ${gate.name} (${gate.frequency}) - ${gate.guardian}`);
    }
    console.log('');
  }

  console.log('════════════════════════════════════════════════════════════');
  console.log('  Run: node scripts/sync-github-repos.js --dry-run');
  console.log('  Docs: cat README.md');
  console.log('  Goals: cat GOALS.md');
  console.log('════════════════════════════════════════════════════════════');
  console.log('');
}

generateReport();
