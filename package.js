Package.describe({
  name: 'interwebs:mm-foundation',
  version: '1.0.0',
  summary: 'Wrapper for angular mm-foundation (http://pineconellc.github.io/angular-foundation/)',
  git: 'https://github.com/michelalbers/meteor-mmfoundation'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('urigo:angular');
  api.addFiles('mm-foundation-tpls-0.6.0.js', ['client']);
});
