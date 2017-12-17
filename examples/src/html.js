function MyHtml() {
}

MyHtml.prototype.hasClass = function(el, className) {
    return document.querySelector(el).classList.contains(className);
};

MyHtml.prototype.pow = function(x, y) {
    return x * y;
};

MyHtml.prototype.sum = function () {
    var total = 0;

    for (var item = 0; item < arguments.length; item ++) {
        total += arguments[item];
    }

    return total;
};

module.exports = MyHtml;
