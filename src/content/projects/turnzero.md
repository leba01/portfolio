---
title: TurnZero
description: Sequential prediction on 382K Pokémon VGC tournament replays.
technologies: [Python, PyTorch, ONNX]
githubUrl: https://github.com/leba01/turnzero
liveUrl: https://turnzero.vercel.app
featured: true
date: 2026-03-01
---

**The Illusion of Adaptation When Experts Lose** — Stanford CS229, Winter 2025–26.

Players who just lost change their lead pair far more often than winners (72% vs 46%). This looks like adaptation, but it isn't: 87% of post-loss switches don't even interact with the opponent's prior leads.

Using permutation-invariant transformer ensembles on 382K expert replays, a sequential model conditioned on prior-game outcome gains +6.6pp after wins but less than 1pp after losses. A specialist trained only on post-loss data performs *worse* than the base model on its own target subset. The post-loss signal actively misleads.

The [live demo](https://turnzero.vercel.app) runs the full 5-member ensemble client-side via ONNX Runtime — no backend, no data leaves your browser.

See also: [TurnOne](/projects/turnone) — same dataset, different question.
