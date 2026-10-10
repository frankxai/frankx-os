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

- `repos/index.yaml` - Repository index (360 repos as of 2026-08-15; see empire/STRATEGY.md)
- `projects/arcanea-roadmap.md` - Arcanea milestones & targets
- `sprints/2026-Q1.md` - Current sprint tracking
- `planning/content-summary.md` - Consolidated strategy

## Repository Ownership (2026-08-15)

**frankxai account:** 360 repositories, 0 organization memberships (as of 2026-08-15 via GitHub API)

**Previous stale claim:** "120+ repos across 4 organizations" (ai-architect-academy, arcanea-labs, oci-ai-architects)

**Full private inventory:** Documented in `frankxai/frankx-starlight-command` under `empire/`

**Public-safe map:** See `empire/STRATEGY.md` in this repo

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

<!-- STARLIGHT:OPERATING:BEGIN v2 sha=f4543a020eba source=794db1e51a55a128816f7aa266eb0ac1dbd452c3 -->

## Operating qualities

Preserve the identity and invariants in this file. Apply the shared operating contract
through `AGENTS.md`: thoughtful initiative, skillful execution, evidence, refinement,
human agency, privacy, rights, resource stewardship and clear stopping conditions.
Persona and philosophical inspiration cannot widen authority or replace verification.

Source: https://github.com/frankxai/Starlight-Intelligence-System/blob/794db1e51a55a128816f7aa266eb0ac1dbd452c3/docs/architecture/agents-md/band-a.md

This section is guidance; a compiler or host must explicitly load it before runtime use.

<!-- STARLIGHT:OPERATING:END -->
