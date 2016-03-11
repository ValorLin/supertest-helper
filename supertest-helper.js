var assert = require('chai').assert;
var pickStructure = require('pick-structure');

module.exports = {
    like: function (expected) {
        return function (res) {
            var actual = res.body;
            actual = pickStructure(actual, expected);
            assert.deepEqual(actual, expected);
        };
    }
};