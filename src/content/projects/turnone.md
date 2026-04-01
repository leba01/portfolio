---
title: TurnOne
description: Low-rank payoff structure in 155K competitive Pokémon battles.
technologies: [Python, PyTorch]
githubUrl: https://github.com/leba01/turnone
featured: true
date: 2026-03-15
---

**The Cost of Convention in Low-Rank Games** — Stanford CS234, Winter 2025–26.

Expert Pokémon VGC strategies look nothing like Nash equilibria (total variation 0.99), yet expert-vs-expert outcomes match Nash payoffs within 0.02. Random strategies achieve the same result. The question is not whether experts are rational, but whether the game notices.

SVD of the ~200-action payoff matrices reveals effective rank 3 — 93% of strategic variation lives in the payoff null space. Convention is free because there aren't enough payoff-relevant directions for experts to go wrong in different ways.

Conservative Q-Learning (offline RL) reshapes 60% of the distribution vs behavioral cloning, but 94% of that shift lands in the null space. Exploitability drops only 17%. CQL finds a *different convention*, not a better strategy.

See also: [TurnZero](/projects/turnzero) — same dataset, earlier decision point, same conclusion.
