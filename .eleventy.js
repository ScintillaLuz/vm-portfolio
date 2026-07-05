const markdownItAnchor = require("markdown-it-anchor");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  // Date filters used in project and post layouts
  eleventyConfig.addFilter("htmlDateString", (date) =>
    new Date(date).toISOString().split("T")[0]
  );
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  eleventyConfig.addFilter("monthYear", (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  })
);

  // Copy public/ to _site/ root
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Projects collection — all markdown in src/projects/
  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByGlob("src/projects/*.md").reverse()
  );

  // Design notes collection — all markdown in src/design-notes/
  eleventyConfig.addCollection("designNotes", (api) =>
    api.getFilteredByGlob("src/design-notes/*.md").reverse()
  );

  const mdOptions = {
    html: true,
  };

  const mdAnchorOptions = {
    permalink: false,
    slugify: s => s.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions).use(markdownItAnchor, mdAnchorOptions));

  // Splits a string on double newlines and wraps each chunk in <p>
  eleventyConfig.addFilter("paragraphs", (text) =>
    String(text).trim().split(/\n\n+/).map(p => `<p>${p.trim()}</p>`).join("")
  );

  // Collecting the H2 for the sidebar index
  eleventyConfig.addFilter("toc", (content) => {
    const headings = [];
    const regex = /<h2[^>]*id="([^"]*)"[^>]*>(.*?)<\/h2>/gi;
    let match;
    while ((match = regex.exec(content)) !== null) {
      headings.push({ id: match[1], text: match[2] });
    }
    return headings;
  });

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


