# FrankX OS - Command Cheat Sheet

## Quick Reference

### Sync GitHub Repos
```bash
cd /home/frankx/frankx-os

# Preview changes
node scripts/sync-github-repos.js --dry-run

# Sync specific org
node scripts/sync-github-repos.js --org=frankxai

# Full sync
node scripts/sync-github-repos.js
```

### View Files
```bash
# Current sprint
cat sprints/2026-Q1.md

# Goals dashboard
cat GOALS.md

# Project roadmap
cat projects/arcanea-roadmap.md

# Relationships
cat repos/relationships.json | jq .
```

---

## Key Commands

### File Operations
| Command | Action |
|---------|--------|
| `ls frankx-os/` | List all files |
| `cat frankx-os/README.md` | View hub |
| `cat frankx-os/GOALS.md` | View goals |
| `jq '.projects' repos/relationships.json` | View projects |

### Search
```bash
# Find a repo
grep -r "repo-name" repos/

# Find by tag
grep -r "tag-name" repos/
```

---

## Workflows

### Daily Standup
1. Check sprint: `cat sprints/2026-Q1.md`
2. View goals: `cat GOALS.md`
3. Check needs-work: `cat NEEDS-WORK.md`

### Adding a New Project
1. Create YAML in `projects/`
2. Add roadmap in `projects/[name]-roadmap.md`
3. Update `repos/index.yaml`
4. Update `repos/relationships.json`

### New Sprint
1. Create `sprints/YYYY-QX.md`
2. Update `sprints/YYYY-QX.yaml`
3. Archive old sprint
4. Update `GOALS.md`

---

## Magic Words

```bash
arcana-work     # Creative mode
arcana-create   # Make something
arcana-build    # Build project
arcana-write    # Write content
```

---

## Key Paths

| Path | Purpose |
|------|---------|
| `/home/frankx/frankx-os` | Main OS |
| `/mnt/c/Users/Frank/Arcanea/` | Arcanea repo |
| `/mnt/c/Users/Frank/FrankX/` | FrankX repo |
| `/mnt/c/Users/Frank/oracle-work/` | Oracle work |

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Beta users | 1,000 (Mar) |
| MVP users | 10,000 (Jun) |
| Public users | 50,000 (Dec) |
| MRR | $190K (Month 9) |
| D30 | 60% |
| NPS | >50 |

---

## Contact

- **Lead**: Frank
- **GitHub**: @frankxai
- **Vision**: Solve the meaning crisis
