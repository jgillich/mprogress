(function () {

    function MProgress(styles) {
        var key;
        this.el = document.createElement('div');

        this.styles = {
            position: 'fixed',
            width: '0%',
            height: '2px',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '100',
            background: '#F15501',
            transition: 'width 0.5s'
        };
        for (key in styles) {
            this.styles[key] = styles[key];
        }
        for(key in this.styles) {
            this.el.style[key] = this.styles[key];
        }

        return this;
    }

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    MProgress.prototype.interval = function (interval) {
        this.intervalID = setInterval(function () {
            this.increase();
        }.bind(this), interval || 500);
        return this;
    };

    MProgress.prototype.show = function () {
        document.getElementsByTagName('body')[0].appendChild(this.el);
        return this;
    };

    MProgress.prototype.hide = function () {
        this.set(100);
        setTimeout(this.remove.bind(this), 500);
        return this;
    };

    MProgress.prototype.remove = function () {
        if(this.intervalID) {
            clearInterval(this.intervalID);
        }
        this.el.parentNode.removeChild(this.el);
        return this;
    };

    MProgress.prototype.set = function (val) {
        this.el.style.width = val + '%';
        return this;
    };

    MProgress.prototype.get = function () {
        return parseFloat(this.el.style.width.split('%')[0]);
    };

    MProgress.prototype.increase = function (val) {
        if(!val) {
            val = Math.min(random(0, (100 - this.get()) / 25), 99.99);
        }
        this.set(this.get() + val);
        return this;
    };

    if (typeof define === 'function' && define.amd) {
        define(function () { return MProgress; });
    } else if(typeof module !== 'undefined' && module.exports) {
        module.exports = MProgress;
    } else {
        this.MProgress = MProgress;
    }

}).call(this);
