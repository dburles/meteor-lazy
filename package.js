Package.describe({
  summary: 'A handy little development tool'
});

Package.on_use(function(api) {
  api.add_files('lazy.js', ['client', 'server']);
  if (typeof api.export !== 'undefined') {
    api.export('l');
  }
});
