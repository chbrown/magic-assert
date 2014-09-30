# magic-assert

Better c-style assertions using [callsite](https://github.com/visionmedia/callsite) for self-documenting failure messages.


## Installation

    npm install magic-assert


## Example

By default assertions are enabled, however the **NO_ASSERT** environment variablewill deactivate them when truthy.

    var assert = require('magic-assert');

    function test() {
      var user = { name: 'tobi' };
      assert('tobi' == user.name);
      assert('number' == typeof user.age);
    }

    test();

Result:

    AssertionError: 'number' == typeof user.age
        at test (~/projects/magic-assert/example.js:9:3)
        at Object.<anonymous> (~/projects/magic-assert/example.js:4:1)
        at Module._compile (module.js:449:26)
        at Object.Module._extensions..js (module.js:467:10)
        at Module.load (module.js:356:32)
        at Function.Module._load (module.js:312:12)
        at Module.runMain (module.js:492:10)
        at process.startup.processNextTick.process._tickCallback (node.js:244:9)


## Changelog

* 1.0.0 (2013-02-03)
  - Stop using the removed magic `__stack` global getter
* 0.1.0 (2012-10-04)
  - Add throwing of AssertionError for test frameworks etc
* 0.0.1 (2010-01-03)
  - Initial release


## License

MIT Licensed.
