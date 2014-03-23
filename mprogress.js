(function (root) {

    function MProgress(styles) {
        this.el = document.createElement('div');

        extend(this.el.style, {
            position: 'fixed',
            width: '0%',
            height: '2px',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '100',
            background: '#F15501',
            transition: 'width 0.5s'
        }, styles);
    }

    function extend(destination) {
        var objects = Array.prototype.slice.call(arguments, 1);
        for(var i = 0; i < objects.length; i++) {
            for(var key in objects[i]) {
                destination[key] = objects[i][key];
            }
        }
        return destination;
    }

    MProgress.prototype.interval = function (interval) {
        interval = interval || 500;
        this.intervalID = setInterval(this.increase.bind(this), interval);
        this.el.style.transition = 'width ' + interval / 1000 + 's';
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
            val = Math.min((100 - this.get()) / (this.get() || 1), 10) * Math.random();
        }
        this.set(this.get() + val);
        return this;
    };

    if (typeof define === 'function' && define.amd) {
        define(function () { return MProgress; });
    } else if(typeof module !== 'undefined' && module.exports) {
        module.exports = MProgress;
    } else {
        root.MProgress = MProgress;
    }

}(this));
