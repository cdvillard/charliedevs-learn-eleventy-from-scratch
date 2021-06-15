module.exports = config => {
  config.addPassthroughCopy('images/');

  return {
    markdownTemplateEngine: 'njk', // Nunjucks,
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input:  'src',
      output: 'dist',
    },
  };
};