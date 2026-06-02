---
title: "Trying gPLUTO in CEDIA"
date: 2026-04-10
project: "mhd-starburst"
---

I set the objective of reproducing the results of my BSc thesis (the wind-cloud problem under custom starburst radiation fields) with gPLUTO.

Since I had some doubts of the numerical implementations, I decided to follow these steps:

1. Set up a simple adiabatic wind-cloud system in `PLUTO` with at least R16 resolution (0.625 pc per cell).

2. Run the same system with gPLUTO and compare.