module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");
  return {
    dir: {
      input: "src",
      output: "docs"
    },
    markdownTemplateEngine: "njk",  // <--- ADD THIS LINE
    htmlTemplateEngine: "njk"
  };
};
