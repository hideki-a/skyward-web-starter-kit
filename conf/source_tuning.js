const replace = require('replace-in-file');
const results = replace.sync({
  files: 'htdocs/**/*.html',
  from: /(<\/[^>]+>)\n\s+<!--\s?\/((\.|#).+)\s?-->/g,
  to: '$1<!-- /$2 -->'
});

console.log(results);
