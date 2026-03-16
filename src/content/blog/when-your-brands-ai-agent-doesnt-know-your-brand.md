---
title: "When Your Brand's AI Agent Doesn't Know Your Brand"
date: "2026-03-08"
description: "Harvard Business Review warns brands aren't ready for agentic commerce. McKinsey projects $3-5 trillion in agent-mediated transactions by 2030. The fatal flaw: AI agents transacting on your behalf don't understand your brand. Context engineering is the missing layer between brand strategy and agent capability."
tags: ["Article"]
readTime: "15 min read"
heroImage: "/blog/images/when-your-brands-ai-agent-doesnt-know-your-brand-hero.jpg"
---

🏷️ Strategy


# When Your Brand's AI Agent Doesn't Know Your Brand

📅 March 8, 2026 ⏱ 15 min

![Brand identity fragmenting across AI agent interactions](/blog/images/when-your-brands-ai-agent-doesnt-know-your-brand-hero.jpg)

*The agentic commerce revolution has a fatal flaw — and Harvard Business Review just named it.*

In early 2024, Gokcen Karaca, the head of digital and design at Pernod Ricard, decided to investigate what AI models were telling consumers about his company's liquor brands. What he found dismayed him. One leading AI model miscategorized Ballantine's Scotch — an affordable, mass-market whiskey — as a prestige product. The AI wasn't malicious. It wasn't incompetent. It simply didn't have the organizational context to know the difference.

This anecdote opens Harvard Business Review's March 2026 cover piece, "[Preparing Your Brand for Agentic AI](https://hbr.org/2026/03/preparing-your-brand-for-agentic-ai)" by Oguz Acar and David Schweidel. Their central warning: AI agents are moving from research tools to autonomous transaction engines, and most brands aren't ready.

They're right about the problem. But they understate its depth.

The Pernod Ricard example isn't an AI accuracy issue. It's not a data quality issue. It's an **organizational context** issue — the same structural gap that explains why [93% of enterprises aren't ready for AI](/blog/the-readiness-illusion-enterprise-ai-2026.html), why [Copilot adoption stalls at 3.3%](/blog/the-3-3-percent-problem-microsoft-copilot-adoption-crisis.html), and why [multi-agent strategies still fail](/blog/the-orchestration-illusion-enterprise-multi-agent-ai.html).

Agentic commerce doesn't just need better models. It needs context engineering.

## Three Models of Agentic Commerce — and Why All Three Need Brand Context

HBR identifies three emerging interaction models that are reshaping how brands and consumers connect:

**Model 1: Brand agents serve human customers.** Capital One's Auto Navigator checks inventory, schedules test drives, estimates trade-in values, and answers financing questions. The customer completes most of the buying journey through AI before visiting a dealership.

**Model 2: Consumer agents act across multiple brands.** Anthropic's Claude and OpenAI's Operator navigate screens, fill forms, and complete purchases on the consumer's behalf. The AI acts as a personal digital representative.

**Model 3: Full AI intermediation.** Both sides of the transaction are AI-mediated. ChatGPT's agent searches OpenTable, selects restaurants, autofills reservation details, and completes bookings. No human directly involved in the selection or execution.

McKinsey projects these models will orchestrate [$900 billion to $1 trillion in U.S. B2C retail revenue by 2030](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants), with global projections reaching $3 trillion to $5 trillion.

Here's what every model has in common: **the AI agent needs to understand the brand it represents — or the brand it's evaluating — to function correctly.**

In Model 1, a brand agent that misunderstands its own product positioning will recommend the wrong products to the wrong customers. In Model 2, a consumer agent that can't distinguish between premium and mass-market offerings will make poor purchasing decisions. In Model 3, when both sides are AI, every transaction runs on whatever context the models happen to have absorbed — accurate or not.

The Pernod Ricard incident isn't an edge case. It's the default state of agentic commerce today.

## Brand Drift: From Marketing Problem to Commerce Catastrophe

We first introduced the concept of [Brand Drift](/blog/context-engineering-for-marketing-teams.html) in our analysis of context engineering for marketing teams. Brand Drift is the slow, invisible erosion of brand coherence that occurs when AI systems generate content, make recommendations, or transact without access to organizational brand context.

In a traditional marketing context, Brand Drift is expensive but survivable. A few off-brand social posts, an inconsistent email campaign, a chatbot that doesn't quite sound like the company — these erode trust gradually. Forrester's Q1 2026 data found 41% of enterprises already experiencing some form of brand drift from AI-generated content. HubSpot's 2026 analysis quantified the impact at up to 12% revenue loss over 18 months.

**In agentic commerce, Brand Drift becomes catastrophic.**

When an AI agent is the sole intermediary between your brand and the customer — or worse, when a consumer's agent is the sole intermediary between your competitor and your product — brand context isn't a "nice to have." It's the entire basis for whether the transaction happens at all.

Consider the three models again:

| Interaction Model | Without Brand Context | With Brand Context |
|---|---|---|
| Brand Agent → Customer | Mispositions products, recommends wrong price tier, contradicts brand promises | Accurate positioning, consistent voice, context-aware recommendations |
| Consumer Agent → Multiple Brands | Can't distinguish premium from mass-market, selects on price alone | Understands value propositions, matches brand attributes to consumer preferences |
| Full AI Intermediation | Transactions driven by whatever training data the models absorbed | Structured brand context informs both sides of the transaction |

The stakes are asymmetric. In traditional e-commerce, a confused customer can browse, compare, and course-correct. In agentic commerce, the AI makes the decision — and a single misclassification (Ballantine's as prestige, when the customer wants affordable) eliminates the brand from consideration entirely.

## The Brand Knowledge Gap: What AI Agents Actually Know About Your Company

To understand the severity of this problem, consider what an AI agent actually "knows" about your brand today:

**What LLMs absorb from training data:**
- Wikipedia summaries (often outdated or incomplete)
- News articles (biased toward negative events)
- Review aggregations (noisy, unstructured)
- Competitor comparisons (often from competitor content)
- Product descriptions (from third-party retailers, not your team)

**What LLMs don't absorb:**
- Your positioning strategy
- Your pricing rationale
- Your target customer segments
- Your competitive differentiation (as *you* define it)
- Your brand values beyond what's in the "About Us" page
- Your product roadmap and deprecation plans
- Your regional variations and market-specific messaging

This is the Brand Knowledge Gap. It's a specific manifestation of the [Agent Governance Gap](/blog/agent-control-plane-vs-context-engineering-enterprise-ai.html) we've documented extensively — the space between governing what agents *do* and ensuring agents *understand*.

The Gap gets worse at precisely the scale where it matters most. A small, distinctive brand might have consistent information across the few sources that discuss it. An enterprise with dozens of product lines, regional variations, sub-brands, channel strategies, and evolving positioning? The information landscape is a contradictory mess — and LLMs absorb all of it indiscriminately.

## The Answer Engine Optimization Trap

The agentic commerce industry's proposed solution is AEO — Answer Engine Optimization. The logic: structure your product data so AI agents can find and recommend your SKUs. Commercetools, Perplexity, and Google are all building infrastructure for "agent-readable" product catalogs.

AEO is necessary. But it's the equivalent of solving [context rot](/blog/context-rot-symptom-not-disease-enterprise-ai.html) with a better search index. It addresses *retrieval* without addressing *understanding*.

Consider what happens when a consumer's AI agent asks: "Find me a mid-range Scotch whiskey for a casual dinner party."

**With AEO alone:** The agent retrieves product data — price, ratings, availability. Ballantine's appears. But the agent has also absorbed the erroneous "prestige" classification from an LLM's training data. Conflict. The agent may filter Ballantine's out (too premium for "mid-range") or present it with confused positioning. The brand loses the sale not because the product data was wrong, but because the *brand context* was wrong.

**With AEO + organizational brand context:** The agent retrieves product data *and* understands Ballantine's positioning as an accessible, high-quality option for everyday occasions. The recommendation aligns with both the consumer's intent and the brand's actual strategy.

AEO without brand context is the commerce equivalent of what we call the [MCP Mirage](/blog/enterprise-connect-2026-what-enterprise-ai-wont-solve.html) — solving interoperability without solving quality. Connecting your product catalog to AI agents doesn't help if those agents fundamentally misunderstand what your products are.

## Five Layers Where Brand Context Breaks Down

Applying our [Context Gradient framework](/blog/the-context-gradient-enterprise-ai-evaluation-framework.html), brand context in agentic commerce breaks down across five increasingly complex layers:

### Layer 1: Product Data (70%+ accuracy achievable)
Basic product attributes — name, price, specifications, availability. This is where AEO operates. Most brands can get this right with structured data.

### Layer 2: Category Context (50-65% accuracy)
Where the product sits in the market. Premium vs. mass-market. Luxury vs. accessible. This is where Pernod Ricard's Ballantine's broke down. Requires understanding of *positioning*, not just attributes.

### Layer 3: Brand Voice and Values (30-45% accuracy)
How the brand communicates. Its personality, tone, values, and commitments. Critical for Model 1 (brand agents serving customers) because the agent *is* the brand. An agent that sounds generic loses the brand's competitive differentiation.

### Layer 4: Competitive Differentiation (15-25% accuracy)
Why choose this brand over alternatives. Not feature comparisons (which LLMs can retrieve) but *strategic differentiation* — the narrative a brand tells about why it exists and what makes it irreplaceable. This is where consumer agents (Model 2) need context to make intelligent recommendations.

### Layer 5: Relationship Context (<10% accuracy)
Customer history, loyalty status, past interactions, satisfaction patterns, and individual preferences. Critical for Model 3 (full AI intermediation) where both sides need deep context to create value beyond commodity matching.

At each layer, the accuracy of AI-driven brand representation drops — and the commercial stakes rise. The transactions that require Layer 4-5 context are the highest-value transactions. The ones where brand loyalty, repeat purchase, and lifetime value are determined. And they're the ones where AI agents have the least context.

This is the [Context Gradient](/blog/the-context-gradient-enterprise-ai-evaluation-framework.html) applied to commerce: the features that matter most require the context that exists least.

![Five Layers of Brand Context in Agentic Commerce](/blog/images/when-your-brands-ai-agent-doesnt-know-your-brand-diagram-1.jpg)

## What "Brand-Ready" Actually Means for Agentic Commerce

HBR's Acar and Schweidel recommend three strategic moves for brands entering the agentic era:

1. **Determine if you need a brand agent at all.** Some customer relationships should remain human-mediated.
2. **If yes, persuade consumers to use your agent.** Make your brand's AI agent the preferred interface.
3. **For consumers using their own agents, ensure those agents choose your brand.** Optimize for agent-mediated discovery.

These are sound strategic recommendations. But they all assume something that doesn't yet exist for most enterprises: a systematic approach to encoding brand context in a format that AI agents can consume, apply, and maintain.

That systematic approach is context engineering — and for agentic commerce specifically, it requires:

**Codified Brand Context:**
Your brand positioning, voice guidelines, product hierarchies, competitive differentiation, and customer segment definitions need to exist in structured, machine-readable formats. Not a PDF brand book. Not a slide deck. A living knowledge base that agents can query at the point of transaction.

**Brand Context APIs:**
When a consumer's AI agent evaluates your products, it should be able to access your brand context directly — not just your product catalog. This is the difference between "here's a Scotch whiskey at $25" and "here's Ballantine's — a heritage brand that's been making Scotch since 1827, positioned as the premium accessible choice for people who know good whiskey without needing to prove it."

**Context Governance:**
Brand context needs the same governance rigor as product data. Version control. Regional variations. Approval workflows. Audit trails. Because in agentic commerce, an outdated brand description doesn't just confuse a marketing team — it directly costs sales.

**Cross-Agent Consistency:**
Your brand must be represented consistently regardless of which AI agent encounters it. Whether a consumer is using ChatGPT, Claude, Gemini, or Perplexity, the brand context should be the same. This requires treating brand context as first-class structured data — not hoping each model's training data happens to be accurate.

## The Agentic Commerce Readiness Assessment

Before investing in agent-ready infrastructure, enterprises need to assess where their brand context actually stands. Ask:

**1. What do AI models currently say about your brand?**
Run your brand name through ChatGPT, Claude, Gemini, and Perplexity. Compare the descriptions to your actual positioning. If there's a gap — and for 90% of brands, there will be — you've quantified the Brand Knowledge Gap.

**2. Is your brand context codified in machine-readable formats?**
If your brand guidelines exist only as PDFs, PowerPoints, or in the heads of your marketing team, they're invisible to AI agents. Score: 0/5 readiness.

**3. Can an external AI agent access your brand context?**
Not your product catalog — your *brand* context. Your positioning, differentiation, values, and voice. If the answer is no, consumer agents (Model 2) and intermediary agents (Model 3) are making decisions about your brand without your input.

**4. Do you monitor brand representation across AI platforms?**
Traditional brand monitoring tracks mentions in press, social media, and reviews. Agentic brand monitoring must track how AI systems describe, categorize, and recommend your products — and flag when those representations diverge from your intent.

**5. Is your brand context versioned and governed?**
Brands evolve. Positioning shifts. Products launch and retire. If your brand context isn't versioned with the same rigor as your product catalog, agents will be operating on stale or contradictory information.

Score yourself honestly. Most enterprises will land between 0 and 1 out of 5.

## The $5 Trillion Context Problem

McKinsey's $3-5 trillion global projection for agentic commerce by 2030 assumes that the infrastructure, trust, and capability will exist to support autonomous transactions at scale. But infrastructure without context is the same pattern we've seen in every enterprise AI deployment:

- [Microsoft's Copilot](/blog/the-3-3-percent-problem-microsoft-copilot-adoption-crisis.html): 96.7% of commercial users haven't paid for it because the tool works at the surface level but fails at the organizational work that justifies the price.
- [Enterprise Connect 2026](/blog/enterprise-connect-2026-what-enterprise-ai-wont-solve.html): Seven major vendors, all focused on agent actions and access, zero addressing organizational knowledge.
- [The E7 digital employee](/blog/the-99-dollar-digital-employee-microsoft-e7-agent-tier.html): $99/month for agent governance that excludes agent understanding.

Agentic commerce is the highest-stakes version of this pattern. When the "customer" is an AI agent making split-second decisions across thousands of brands, the brands with codified organizational context win. The brands without it don't even get considered.

The AI doesn't browse. The AI doesn't hesitate. The AI doesn't give you a second chance to make a first impression. Your brand context is either available at the moment of decision — or your brand is invisible.

## What Comes Next

HBR is right that agentic commerce is coming. McKinsey is right about the scale. Commercetools and Google are right that infrastructure matters.

But none of them are addressing the organizational context layer that determines whether agentic commerce creates value or destroys brand equity.

The brands that will thrive in the agentic era aren't the ones with the best product data or the most agent-compatible APIs. They're the ones that have invested in the messy, unglamorous work of codifying what their brand actually means — in a format that AI agents can understand, apply, and maintain.

Context engineering is the missing layer between brand strategy and agent capability. Without it, your brand's AI agent doesn't know your brand. And when the agent *is* the customer experience, that's not a marketing problem.

It's an existential one.

---

## FAQ

**What is agentic commerce?**
Agentic commerce refers to transactions where AI agents act autonomously on behalf of consumers or brands — discovering products, comparing options, and completing purchases with minimal or no human involvement. McKinsey projects it will orchestrate $3-5 trillion in global revenue by 2030.

**Why does brand context matter for AI agents?**
AI agents make purchasing decisions based on whatever context they have about a brand. Without accurate, structured brand context, agents may misposition products, misrepresent brand values, or exclude brands from consideration entirely — as demonstrated by Pernod Ricard's experience with AI models miscategorizing their Scotch whiskey brand.

**What is Brand Drift in the context of agentic commerce?**
Brand Drift is the gradual erosion of brand coherence when AI systems generate content, make recommendations, or transact without organizational brand context. In traditional marketing, it costs revenue over time. In agentic commerce, it eliminates brands from AI-mediated transactions instantly.

**How is Answer Engine Optimization (AEO) different from brand context engineering?**
AEO focuses on making product data discoverable by AI agents — structured attributes, metadata, and catalog integration. Brand context engineering goes deeper, encoding positioning strategy, competitive differentiation, brand voice, and relationship context in formats AI agents can consume and apply.

**What is the Brand Knowledge Gap?**
The Brand Knowledge Gap is the difference between what an enterprise's brand actually represents and what AI models believe it represents. For most brands, AI models absorb incomplete, outdated, or contradictory information from training data — leading to misrepresentation at the point of AI-mediated transactions.

**How can enterprises assess their readiness for agentic commerce?**
Start by querying major AI platforms about your brand and comparing the responses to your actual positioning. Then evaluate whether your brand context exists in machine-readable formats, whether external AI agents can access it, whether you monitor AI-driven brand representation, and whether your brand context is versioned and governed. Most enterprises score 0-1 out of 5.

**What did Harvard Business Review recommend for brands facing agentic AI?**
HBR's March 2026 article by Acar and Schweidel recommends three strategic moves: determine if your brand needs an AI agent, persuade consumers to use your brand's agent over their own, and optimize for agent-mediated discovery. These recommendations assume brand context infrastructure that most enterprises haven't built yet.
