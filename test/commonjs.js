var assert = require('chai').assert;

describe('CommonJS', function(){
    it('should load module', function() {
        var MProgress = require('../');
        assert.isFunction(MProgress);
    });
});
