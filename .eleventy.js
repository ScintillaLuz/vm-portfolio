const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {

  /* ---------- Passthrough copy ---------- */

  // Copy public/ to _site/ root
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  /* ---------- Markdown configuration ---------- */

  // html: true allows raw HTML (figures, iframes) inside markdown
  // markdown-it-anchor adds id="" to headings so the TOC can link to them
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true }).use(markdownItAnchor, {
      permalink: false,
      slugify: (s) =>
        s.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""),
    })
  );

  /* ---------- Collections ---------- */

  // Projects — all markdown in src/projects/
  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByGlob("src/projects/*.md").reverse()
  );

  // Design notes — all markdown in src/design-notes/
  eleventyConfig.addCollection("designNotes", (api) =>
    api.getFilteredByGlob("src/design-notes/*.md").reverse()
  );

  /* ---------- Filters ---------- */

  // 2026-03-15 → "2026-03-15" (for <time datetime="">)
  eleventyConfig.addFilter("htmlDateString", (date) =>
    new Date(date).toISOString().split("T")[0]
  );

  // 2026-03-15 → "15 March 2026"
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  // 2026-03 → "March 2026"
  eleventyConfig.addFilter("monthYear", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
    })
  );

  // Splits a string on blank lines, wraps each chunk in <p>
  eleventyConfig.addFilter("paragraphs", (text) =>
    String(text)
      .trim()
      .split(/\n\n+/)
      .map((p) => `<p>${p.trim()}</p>`)
      .join("")
  );

  /* ---------- Shortcodes ---------- */

  // Captioned, lazy-loaded image for case studies.
  // width/height default to the standard 2400×1350 export size; pass both
  // explicitly only for images with a different aspect ratio
  eleventyConfig.addShortcode(
    "figure",
    (src, alt, caption = "", width = 2400, height = 1350) => `
<figure class="content-figure">
  <img src="${src}" alt="${alt}" loading="lazy"
    width="${width}" height="${height}">
  ${caption ? `<figcaption>${caption}</figcaption>` : ""}
</figure>`
  );

  /* ---------- Eleventy config — must stay last ---------- */

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};