let ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/cindy951357/learn-tailwindcss.git'
}, function (err) { });