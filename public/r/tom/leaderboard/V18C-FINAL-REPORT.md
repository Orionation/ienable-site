# TOM V18C — WIDER WINGS DEFENSE — FINAL REPORT

**Date:** March 1, 2026  
**Mission:** Test if 4% OTM IC wings survive 2022 bear market  
**Result:** ❌ REJECTED  
**Status:** Completed  

---

## Executive Summary

V18c FAILED. Wider wings (4% vs 2%) do NOT fix the 2022 problem and make performance WORSE in 3 out of 5 years.

### The Numbers

| Year | V17 (2% wings) | V18c (4% wings) | Δ |
|------|----------------|-----------------|---|
| 2020 | **+84%** | -92% | ❌ -176% |
| 2022 | -38% | -95% | ❌ -57% |
| 2023 | +11% | +66% | ✅ +55% |
| 2024 | **+45%** | -22% | ❌ -67% |
| 2025 | +204% | +216% | ✅ +12% |
| **Score** | **4/5 wins** | **2/5 wins** | ❌ |

---

## What We Learned

### ❌ What DOESN'T Work
1. **Wider wings alone** — They reduce premium collection MORE than they reduce risk
2. **Linear scaling** — 2% → 4% isn't enough protection for extreme moves
3. **Same position sizing** — Capital allocation rules need to change with wings

### ✅ What We Confirmed
1. **2022 is the boss fight** — Any strategy must prove itself in sustained bear markets
2. **Wing width matters** — But not in the way we thought
3. **Premium collection is critical** — Lower credit = harder to recover from losses

---

## Why It Failed

The theory was: "Tighter wings get breached in high volatility → widen them."

The reality:
- **4% wings collect 40-50% less premium** than 2% wings
- **They still get breached** in extreme moves (2022 Jan-May, 2024 Aug)
- **Lower premium = more trades needed** = more exposure

**Bottom line:** We traded offense (premium) for defense (wider strikes) and got neither.

---

## The Real Problem

The issue ISN'T wing width. It's **strategy selection during regime changes**:

1. **Bear markets** (2022) → ICs are fundamentally wrong, need pure put spreads
2. **High volatility** (VIX > 30) → Stop trading ICs entirely
3. **Position sizing** → Scale down 50-75% when VIX > 25

---

## Next Iterations to Test

### V18d: Dynamic Position Sizing
- Cut position size by 50% when VIX > 25
- Cut by 75% when VIX > 30
- Keep 2% wings (V17 baseline)

### V18e: Strategy Switching
- No ICs when VIX > 30
- Shift to pure put credit spreads in bear markets
- Emergency halt stays at VIX 28

### V18f: Hybrid Approach
- 2% wings in low vol (VIX < 20)
- 3% wings in medium vol (20-28)
- No ICs in high vol (>28), only defensive spreads

---

## Assets Deployed

All files uploaded to FTP at `ienable.ai/r/tom/leaderboard/`:

✅ `leaderboard.json` — Updated with V18c results  
✅ `v18c-results.json` — Full 5-year backtest data  
✅ `v18c-verdict.md` — Detailed analysis  
✅ `backtest-v18c.py` — Modified backtester (4% wings)  

---

## Recommendation

**DO NOT promote V18c to live trading.**

Instead:
1. Test V18d (dynamic position sizing) ASAP — Most likely to solve 2022
2. If V18d fails, test V18e (strategy switching)
3. Keep V17 as baseline for comparison

The 2022 problem is solvable, but not with static wing widths. We need **dynamic risk management** that adapts to volatility regimes.

---

## Stats Summary

### V18c Performance
- **Start:** $5,000
- **2020:** $408 (-92%)
- **2022:** $228 (-95%) ← Still catastrophic
- **2023:** $8,287 (+66%)
- **2024:** $3,885 (-22%)
- **2025:** $15,781 (+216%)

### Key Metrics
- **Profitable years:** 2/5 (40%)
- **Avg return (profitable):** +141%
- **Avg loss (losing):** -70%
- **Max drawdown:** 98% (2022)
- **Total trades:** 537
- **Win rate:** 79% (but losses are HUGE)

---

**Mission Complete:** Tested, failed, learned. Moving to V18d.

**Tom V18c — OFFLINE**
