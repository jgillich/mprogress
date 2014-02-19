describe('MProgress', function(){
    it('should append element', function() {
        assert.ok(new MProgress().show().el.isEqualNode($('body div:last-child')[0]));
    });
});
