const sitemap = require('nextjs-sitemap-generator');
const targetDirectory = './';

sitemap({
  baseUrl: 'https://matheus-dev-react.netlify.app',
  pagesDirectory: __dirname + '/pages',
  ignoreIndexFiles: true,
  targetDirectory: targetDirectory,
  nextConfigPath: __dirname + "/next.config.js",
  pagesConfig: {
    '/': {
      priority: '1',
      changefreq: 'daily',
    },
  },
  ignoredPaths: [
    'api',
    'fallback'
  ],
});

console.log(`Sitemap gerado em /${targetDirectory}`);