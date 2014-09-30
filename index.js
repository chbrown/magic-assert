/*jslint node: true */
var fs = require('fs');
var assert = require('assert');
var callsite = require('callsite');

module.exports = function(expr) {
  if (process.env.NO_ASSERT) return;
  if (expr) return;

  var stack = callsite();
  var call = stack[1];
  var file = call.getFileName();
  var lineno = call.getLineNumber();
  var src = fs.readFileSync(file, 'utf8');
  var line = src.split('\n')[lineno-1];
  var src = line.match(/assert\((.*)\)/)[1];

  var err = new assert.AssertionError({
    message: src,
    stackStartFunction: stack[0].fun
  });

  throw err;
};
