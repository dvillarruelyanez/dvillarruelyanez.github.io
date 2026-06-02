---
title: "Trying gPLUTO in CEDIA"
date: 2026-04-10
project: "mhd-starburst"
---

I set the objective of reproducing the results of my BSc thesis (the wind-cloud problem under custom starburst radiation fields) with gPLUTO.

Since I had some doubts about the numerical implementations (and later I will explain why), I decided to follow these steps:

1. Set up a simple adiabatic wind-cloud system in `PLUTO` with at least R16 resolution (0.625 pc per cell), which shall be maintained across all simulations.

2. Run the same system with gPLUTO and compare.
   
3. Set up a wind-cloud system using the *Haardt & Madau (2012)* metagalactic UV/X-ray background in `PLUTO`. This system has the current considerations:

   - There is a cooling floor at $10^4$ K (so we can consider ionised gas with ~constant mean molecular weight)
   - We include tables of both heating and cooling (generated with `py4radiation`) that are functions of hydrogen density and temperature. These tables span log10(n): [-9, 4] cm^-3 and log10(T): [1, 9] K.
   - We DO NOT change the mean molecular weight, although we have tabulated it for the same ranges of $n_{\rm H}$ and $T$.
   - We consider purely monoatomic gas, so that $\gamma=5/3$.

4. Run the same system with gPLUTO and compare.

5. Set up a wind-cloud system using our starburst-derived heating and cooling tables in `PLUTO`.

6. Run the same system with gPLUTO and compare.

I am running these benchmark sims using the national CEDIA cluster. We may use SuperMUC-NG, but we don't want to waste time on debugging / benchmarking. The CEDIA cluster has the advantage of having no quota limits, and given almost nobody uses it, we can safely ask for more resources.