# FrankX OS - Project Management System

> Centralized hub for all FrankX, Arcanea, and related projects

---

## Overview

FrankX OS is the operational brain for managing 120+ repositories across 4 GitHub organizations, tracking projects, sprints, products, and the strategic vision.

---

## Directory Structure

```
frankx-os/
├── CLAUDE.md                 # Agent instructions
├── README.md                 # This file
├── GOALS.md                  # Goals & milestones dashboard
├── CELEBRATIONS.md          # Wins & achievements
├── NEEDS-WORK.md            # Gaps & improvements
│
├── projects/                # Project configs
│   ├── arcanea.yaml
│   ├── arcanea-roadmap.md
│   ├── frankx-ai.yaml
│   ├── frankx-ai-roadmap.md
│   ├── starlight.yaml
│   ├── ai-music-academy.yaml
│   └── ai-architect-academy.yaml
│
├── repos/                    # Repository tracking
│   ├── index.yaml           # All 120+ repos
│   ├── orgs.yaml           # Organization metadata
│   └── relationships.json  # Dependency graph
│
├── sprints/                 # Sprint tracking
│   ├── 2026-Q1.md          # Current sprint
│   └── 2026-Q1.yaml
│
├── products/                 # Product definitions
│   ├── npm-packages.yaml
│   ├── design-boilerplates.yaml
│   └── marketplaces.yaml
│
├── agents/                   # Agent patterns
│   └── swarms.yaml          # Multi-agent orchestration
│
├── planning/                 # Strategic docs
│   ├── index.yaml           # Doc index
│   └── content-summary.md   # Consolidated strategy
│
└── scripts/                  # Automation
    └── sync-github-repos.js # GitHub sync
```

---

## Quick Reference

### Organizations Tracked
| Org | Repos | Focus |
|-----|-------|-------|
| frankxai | ~100 | Core platform |
| ai-architect-academy | 3 | Education |
| arcanea-labs | 6 | Open source |
| oci-ai-architects | 12 | Oracle Cloud |

### Key Metrics (2026)
- **Beta Launch**: March 2026
- **MVP**: June 2026
- **Public Launch**: Q3 2026
- **Target Users**: 50,000 by year end
- **MRR Target**: $190,000 by Month 9

### Critical Path
```
[nano-banana] → [infogenius] → [intelligence-os] → [arcanea]
                                                                  ↓
[claude-skills] → [intelligence-os]              → [frankx-website]
                                                                  ↓
[starlight] → [arcanea]                          → [ai-music-academy]
```

---

## Usage

### For Agents
```bash
# Read project roadmap
cat projects/arcanea-roadmap.md

# Check current sprint
cat sprints/2026-Q1.md

# View goals
cat GOALS.md
```

### Sync GitHub Repos
```bash
cd /home/frankx/frankx-os
node scripts/sync-github-repos.js
node scripts/sync-github-repos.js --dry-run  # Preview
```

---

## Key Files

| File | Purpose |
|------|---------|
| `repos/index.yaml` | All repositories |
| `repos/relationships.json` | Dependency graph |
| `projects/arcanea-roadmap.md` | Arcanea milestones |
| `GOALS.md` | Current targets |
| `CELEBRATIONS.md` | What we've achieved |
| `NEEDS-WORK.md` | Gaps to fill |

---

## Magic Words (Arcanea)

- `arcana-work` - Ultimate creative mode
- `arcana-create` - Channel Poiesis
- `arcana-build` - Channel Orakis + Sophron
- `arcana-write` - Channel Kardia + Eudaira

---

## Vision

**Mission**: Solve the meaning crisis through human-AI co-creation

**North Star**: 500M users by 2035, $100B ARR

**Phase 1 (2026)**: Foundation
- Library Platform
- AI Companion
- Community

**Phase 2 (2027-2028)**: Awakening
- Seven Awakened
- Collective Intelligence
- Biometric Tracking

---

## Contact

- **Lead**: Frank
- **Vision**: Build the operating system for meaningful creation

---

*Last Updated: February 24, 2026*
