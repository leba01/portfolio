---
title: allchain
description: Python __all__ chain validator and pre-commit hook for enforcing clean public APIs.
technologies: [Python, AST]
githubUrl: https://github.com/leba01/allchain
featured: false
date: 2026-02-01
---

allchain validates that Python packages correctly chain their `__all__` exports from submodules up to the package root. Available as a standalone CLI tool and a pre-commit hook.
