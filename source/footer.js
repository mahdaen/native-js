if ('undefined' !== typeof global && !global.foreach) {
    for (var key in window) {
        global[key] = window[key];
    }

    module.exports = window;
}