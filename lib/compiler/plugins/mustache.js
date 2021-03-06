// Generated by CoffeeScript 1.4.0
(function() {
  var hogan, syspath;

  syspath = require('path');

  hogan = require('../../../vendors/hogan.js/lib/hogan');

  exports.contentType = "javascript";

  exports.process = function(txt, path, module, cb) {
    var builded, name;
    try {
      name = syspath.basename(path, '.mustache');
      builded = 'if(typeof window.QTMPL === "undefined"){ window.QTMPL={}; }\n';
      builded += 'window.QTMPL.' + name + ' = new window.Hogan.Template(' + hogan.compile(txt, {
        asString: 1
      }) + ');';
      return cb(null, builded);
    } catch (err) {
      return cb(err);
    }
  };

}).call(this);
