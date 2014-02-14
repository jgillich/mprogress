/*jslint browser: true*/

function MProgress(styles) {
    this.el = document.createElement('div');

    this.styles = {
        position: 'fixed',
        width: '0%',
        height: '2px',
        top: '0',
        left: '0',
        right: '0',
        background: 'red',
        transition: 'width 0.5s'
    };
    for (var key in styles) {
        this.styles[key] = styles[key];
    }
    for(var key in this.styles) {
        this.el.style[key] = this.styles[key];
    }

    this.random = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    return this;
}

MProgress.prototype.interval = function (interval) {
    this.intervalID = setInterval(function () {
        this.increase();
    }.bind(this), interval || 500);
    return this;
};

MProgress.prototype.show = function () {
    document.getElementsByTagName('body')[0].appendChild(this.el);
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
    return parseFloat(this.el.style.width.split('%')[0], 10);
};

MProgress.prototype.increase = function (val) {
    if(!val) {
        val = this.random(0, (100 - this.get()) / 25);
    }
    this.set(Math.min(this.get() + val, 99.9));
    return this;
};
