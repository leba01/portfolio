---
title: PocketNeRF
description: Phone-to-3D indoor reconstruction pipeline.
technologies: [Python, PyTorch]
githubUrl: https://github.com/aaronkjin/pocketnerf
featured: true
date: 2025-06-01
---

A lightweight pipeline for 3D indoor reconstruction from a handful of iPhone photos, built on Instant-NGP. Introduces Manhattan-world structural priors for sharper geometry under sparse views, and adversarial content-aware quantization (A-CAQ) to compress models to sub-8-bit precision for mobile deployment. Built for Stanford CS 231N with Aaron Jin and Ryan Suh — I owned the A-CAQ implementation.
