describe('MProgress', function() {

    it('should append element', function() {
        var mprogress = new MProgress().show();
        assert.ok(mprogress.el.isEqualNode($('body div:last-child')[0]));
        mprogress.remove();
    });

    it('should set width', function () {
        var mprogress = new MProgress().set(25).show();
        assert.equal(25 + '%', $('body div:last-child')[0].style.width);
        assert.equal(25, mprogress.get());
        mprogress.remove();
    });

    it('should increase width', function () {
        var mprogress = new MProgress().show();
        for(var i = 1; i <= 10; i++) {
            mprogress.increase(10);
            assert.equal((i*10) + '%', $('body div:last-child')[0].style.width);
        }
        mprogress.remove();
    });

    it('should accept custom styles', function () {
        var mprogress = new MProgress({ background: 'rgb(1, 2, 3)' }).show();
        assert.equal('rgb(1, 2, 3)', $('body div:last-child').css('background-color'));
        mprogress.remove();
    });

});
