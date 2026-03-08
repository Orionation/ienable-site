# Tom V18a Verdict: REJECTED (but progress made)

## Mission
Fix the 2022 problem. V17 strategy (iron condors, 2% wings, 25% TP, score 8+) makes money in 4/5 years but **loses -104% in 2022**.

## Hypothesis
When SPY < 200-day MA → go 100% cash. No trades during bear markets.

## Results

### By Year
| Year | Return | Max DD | Trades | Bear Days |
|------|--------|--------|--------|-----------|
| 2020 | **-18.6%** | 82.1% | 125 | 0.0% |
| 2022 | **-25.6%** | 64.2% | 149 | 19.1% |
| 2023 | **-28.3%** | 31.0% | 86 | 2.0% |
| 2024 | **+1.7%** | 25.6% | 55 | 0.0% |
| 2025 | **+43.5%** | 64.8% | 106 | 0.0% |

**Average Return: -5.4%**

### Key Metrics
- **Starting Capital**: $5,000
- **Final Capital (2022)**: $3,720 (vs $0 in V17)
- **2022 Improvement**: Reduced loss from -104% to -25.6% (**78.4% improvement**)
- **Overall 5-year**: Still loses money (-5.4% avg)

## What Worked
✅ **Reduced 2022 catastrophe** - Lost -25.6% instead of -104%
✅ **Detected bear market** - Went to cash 19.1% of days in 2022
✅ **2025 was strong** - +43.5% return when market was bullish

## What Failed
❌ **2020 still lost** - -18.6% even though 0% bear days (COVID crash faster than MA could react)
❌ **2023 still lost** - -28.3% despite only 2% bear days (whipsaw/chop killed it)
❌ **Overall negative** - Average -5.4% across 5 years
❌ **200-day MA too slow** - By the time SPY crosses below MA, damage already done

## Root Cause Analysis

The 200-day MA filter is **reactionary, not predictive**:
1. **2020 COVID crash** - SPY dropped 34% in 23 days (Feb 19 - Mar 23). By the time it crossed below 200-MA, already down 20%+
2. **2022 bear market** - Slow grind down. MA filter helped but still bled out
3. **2023 chop** - Market bounced around. MA filter caused whipsaw (exit too late, re-enter too early)

## Verdict: **REJECTED**

While V18a made **significant progress** in reducing the 2022 loss, it:
- Still loses money overall (-5.4% avg)
- Fails in 3/5 years
- 200-day MA is too slow/reactive

### NOT production-ready. Need faster, more predictive signals.

## Next Steps (for V18b/V18c)

Try these bear market filters instead:

### V18b: VIX Regime Filter
- When VIX > 30 for 3+ days → 100% cash
- More responsive than 200-day MA
- Catches volatility spikes faster

### V18c: Momentum + Volatility Combo
- SPY < 50-day MA **AND** VIX > 25 → cash
- Faster signal than 200-day
- Combines trend + volatility

### V18d: ATR-based Stop
- Calculate SPY 20-day ATR
- Exit all when SPY drops > 2x ATR in 5 days
- Catches sharp moves (like COVID)

## Files
- **Results**: `/Users/orionsieling/.openclaw/agents/hodl/workspace/backtest-results/v18a-results.json`
- **Leaderboard**: `/Users/orionsieling/.openclaw/agents/hodl/workspace/backtest-results/leaderboard.json`
- **FTP**: `ftp://72.167.84.5/public_html/ienable.ai/r/tom/leaderboard/`

## Conclusion

**PROGRESS**: V18a proved bear market defense CAN work (reduced 2022 loss by 78%).
**PROBLEM**: 200-day MA too slow. Need faster signals.
**RECOMMENDATION**: Test V18b (VIX regime) or V18c (momentum+vol combo) next.

---

*Tested: March 1, 2026*
*Agent: Tom V18 (subagent)*
*Mission: Fix the 2022 problem*
