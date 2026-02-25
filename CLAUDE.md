# FrankX OS - Claude Code Instructions

This directory contains the centralized project management system for all FrankX, Arcanea, and related projects.

## Directory Structure

```
frankx-os/
├── projects/           # Project configurations & roadmaps
├── repos/             # GitHub repository index
├── sprints/           # Sprint planning & tracking
├── products/          # Product definitions
├── agents/            # Agent orchestration patterns
├── planning/          # Strategic planning documents
├── scripts/           # Automation scripts
└── README.md          # This file
```

## Key Files

- `repos/index.yaml` - All 120+ repos across 4 organizations
- `projects/arcanea-roadmap.md` - Arcanea milestones & targets
- `sprints/2026-Q1.md` - Current sprint tracking
- `planning/content-summary.md` - Consolidated strategy

## Organizations Tracked

1. **frankxai** (~100 repos) - Core AI platform
2. **ai-architect-academy** (3 repos) - Education
3. **arcanea-labs** (6 repos) - Open source
4. **oci-ai-architects** (12 repos) - Oracle Cloud

## For Agents

### When Working on Arcanea Projects
1. Check `projects/arcanea-roadmap.md` for current priorities
2. Check `sprints/2026-Q1.md` for sprint goals
3. Reference `repos/index.yaml` for repo relationships

### Updating Repository Index
```bash
cd /home/frankx/frankx-os
node scripts/sync-github-repos.js
```

### Adding New Projects
1. Create `projects/[project-name].yaml`
2. Add milestones to `projects/[project-name]-roadmap.md`
3. Update `repos/index.yaml` with new repos

## Important Paths

- **Arcanea Repo**: `/mnt/c/Users/Frank/Arcanea/`
- **FrankX Repo**: `/mnt/c/Users/Frank/FrankX/`
- **Oracle Work**: `/mnt/c/Users/Frank/oracle-work/`

## Magic Words (Arcanea System)

- `arcana-work` - Ultimate creative mode
- `arcana-create` - Channel Poiesis
- `arcana-build` - Channel Orakis + Sophron
- `arcana-write` - Channel Kardia + Eudaira

## Success Metrics (2026)

| Metric | Target |
|--------|--------|
| Users (Month 6) | 10,000 |
| MRR (Month 6) | $47,500 |
| D30 Retention | 60% |
| NPS | >50 |

## Contact

- **Lead**: Frank
- **Vision**: Solve the meaning crisis through AI-human co-creation
- **Mission**: Build the operating system for meaningful creation
