describe('RequireJS', function(){
    it('should load module', function(done) {
        require(['./mprogress'], function(MProgress) {
            assert.isFunction(MProgress);
            done();
        });
    });
});
