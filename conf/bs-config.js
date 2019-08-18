/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
const browserSyncSSI = require('../node_modules/browsersync-ssi');

module.exports = {
    server: 'htdocs/',
    port: 3501,
    ui: false,
    watch: true,
    ghostMode: false,
    browser: 'google chrome',
    startPath: '/',
    middleware: browserSyncSSI({
      baseDir: './htdocs',
      ext: '.html'
    })
};
