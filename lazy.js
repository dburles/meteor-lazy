l = function() {
  _.each(arguments, function(arg) {
    console.log(JSON.stringify(arg, true, 2));
  });
};