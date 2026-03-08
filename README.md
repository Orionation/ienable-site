# ienable.ai

Public website for iEnable — AI Enablement Platform.

## Deployment

**Push to `main` → auto-deploys to ienable.ai via GitHub Actions.**

No FTP. No manual uploads. Every change is version-controlled.

## Structure

```
/                   — Landing page (index.html)
/blog/              — Blog index + all posts
/blog/from-prompt-to-primetime/  — Muse AI Creative Journal series
/manifesto/         — Company manifesto
/r/                 — Research pages
/sitemap.xml        — Sitemap for Google
/robots.txt         — Crawl directives
```

## For Agents

Do NOT FTP directly. Use the deploy script:
```bash
deploy-ienable [message]
```
This commits, pushes, and GitHub Actions handles deployment.
