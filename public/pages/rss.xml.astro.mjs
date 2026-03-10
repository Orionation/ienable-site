import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_BDCcZJqr.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "iEnable Blog",
    description: "Insights on AI enablement, employee AI adoption, and the future of work.",
    site: context.site,
    items: posts.filter((post) => post.data.title && post.data.date).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()).map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date || "2026-03-01"),
      description: post.data.description || post.data.title,
      link: `/blog/${post.slug}.html`
    })),
    customData: `<language>en-us</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
