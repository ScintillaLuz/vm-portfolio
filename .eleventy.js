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

  // Copy public/ to _site/ root
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Projects collection — all markdown in src/projects/
  eleventyConfig.addCollection("projects", (api) =>
    api.getFilteredByGlob("src/projects/*.md").reverse()
  );

  // Writing collection — all markdown in src/writing/
  eleventyConfig.addCollection("writing", (api) =>
    api.getFilteredByGlob("src/writing/*.md").reverse()
  );

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
