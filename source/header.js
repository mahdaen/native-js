/**
 * Native JS.
 * Native Helper for Javascript.
 * Language: Javascript.
 * Created by mahdaen on 12/16/14.
 * License: GNU General Public License v2 or later.
 */

/* Creating Container */
if (!window) {
    var window = {};
}

/* Module Wrapper */
(function(native) {
    if (typeof module !== 'undefined' && module.exports) {
        /* NodeJS */
        module.exports = native();
    } else {
        return native();
    }
})(function() {
    return window;
});

/* Adding Configurations Space */
window.__nconfig = {};