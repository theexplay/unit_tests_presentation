function MyMath() {
}

MyMath.prototype.increment = function(i) {
    return ++i;
};

MyMath.prototype.pow = function(x, y) {
    return x * y;
};

MyMath.prototype.sum = function () {
    var total = 0;

    for (var item = 0; item < arguments.length; item ++) {
        total += arguments[item];
    }

    return total;
};

module.exports = MyMath;
