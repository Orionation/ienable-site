import { a as createComponent, f as renderComponent, F as Fragment, r as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_BhYW6JUR.mjs';
import 'piccolore';
import { readFile } from 'fs/promises';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const manifestoHtml = await readFile("manifesto/index.html", "utf-8");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(manifestoHtml)}` })}`;
}, "/Users/orionsieling/.openclaw/sites/ienable-site/src/pages/manifesto/index.astro", void 0);

const $$file = "/Users/orionsieling/.openclaw/sites/ienable-site/src/pages/manifesto/index.astro";
const $$url = "/manifesto.html";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
