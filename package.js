Package.describe({
  name: 'dburles:lazy',
  summary: 'A handy little development tool',
  version: '1.0.1',
  git: 'https://github.com/dburles/meteor-lazy.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore');
  api.addFiles('lazy.js');
  api.export('l');
});
