import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, f as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_BhYW6JUR.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_BDCcZJqr.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://ienable.ai");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Base;
  const { title, description, ogImage, canonical } = Astro2.props;
  const canonicalURL = canonical || new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:type" content="website">', `<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"><!-- Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=G-M98JCVWXVX"><\/script><script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-M98JCVWXVX');
  <\/script>`, '</head> <body> <nav> <a href="/" class="nav-logo"> <img src="/logo.svg" alt="iEnable"> </a> <div class="nav-links"> <a href="/">Home</a> <a href="/blog/">Blog</a> <a href="/#early-access" class="nav-cta">Get Early Access</a> </div> </nav> ', " <footer> <p>&copy; 2026 iEnable. All rights reserved.</p> </footer> </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/orionsieling/.openclaw/sites/ienable-site/src/layouts/Base.astro", void 0);

const $$Astro$1 = createAstro("https://ienable.ai");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { frontmatter } = Astro2.props;
  const { title, date, description, tags, readTime, emoji, author = "iEnable Team" } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": `${title} \u2014 iEnable Blog`, "description": description, "canonical": `https://ienable.ai/blog/${Astro2.params.slug}.html`, "data-astro-cid-bvzihdzo": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="post-hero" data-astro-cid-bvzihdzo> <div class="post-meta" data-astro-cid-bvzihdzo> ${emoji && renderTemplate`<span class="post-tag" data-astro-cid-bvzihdzo>${emoji}</span>`} <span class="post-tag" data-astro-cid-bvzihdzo>${tags[0]}</span> <span data-astro-cid-bvzihdzo>${new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span> <span data-astro-cid-bvzihdzo>·</span> <span data-astro-cid-bvzihdzo>${author}</span> <span data-astro-cid-bvzihdzo>·</span> <span data-astro-cid-bvzihdzo>${readTime}</span> </div> <h1 data-astro-cid-bvzihdzo>${unescapeHTML(title)}</h1> ${description && renderTemplate`<p class="subtitle" data-astro-cid-bvzihdzo>${description}</p>`} </section> <article data-astro-cid-bvzihdzo> <a href="/blog/" class="back-link" data-astro-cid-bvzihdzo>← Back to Blog</a> ${renderSlot($$result2, $$slots["default"])} </article> ` })}`;
}, "/Users/orionsieling/.openclaw/sites/ienable-site/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://ienable.ai");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { "frontmatter": post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/orionsieling/.openclaw/sites/ienable-site/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/orionsieling/.openclaw/sites/ienable-site/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug].html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
