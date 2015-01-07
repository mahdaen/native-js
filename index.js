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
/**
 * Data Type Getter Scripts.
 * Created by mahdaen on 12/16/14.
 */

(function() {
    /**
     * Check whether argument is defined or not. Use only to check argument in function.
     * @param $object - Argument name.
     * @returns {boolean}
     */
    var isDefined = function($object) {
        return typeof $object !== 'undefined' ? true : false;
    };
    window.isDefined = function($object) { return isDefined($object) };

    /**
     * Check whether type of variable is string or not.
     * @param $object - Variable name to check.
     * @returns {boolean}
     */
    var isString = function($object) {
        return typeof $object === 'string' ? true : false;
    };
    window.isString = function($object) { return isString($object) };

    /**
     * Check wheter type of variable is plain object or not.
     * @param $object - Variable name to check.
     * @returns {boolean}
     */
    var isObject = function($object) {
        return typeof $object === 'object' && $object.indexOf === undefined && $object.splice === undefined ? true : false;
    };
    window.isObject = function($object) { return isObject($object) };

    /**
     * Check whether type of variable is array or not.
     * @param $object - Variable name to check.
     * @returns {boolean}
     */
    var isArray = function($object) {
        return typeof $object === 'object' && Array.isArray($object) ? true : false;
    };
    window.isArray = function($object) { return isArray($object) };

    /**
     * Check whether type of variable is function or not.
     * @param $object - Variable name to check.
     * @returns {boolean}
     */
    var isFunction = function($object) {
        return typeof $object === 'function' ? true : false;
    };
    window.isFunction = function($object) { return isFunction($object) };

    /**
     * Check whether type of variable is number or not.
     * @param $object - Variable to check.
     * @returns {boolean}
     */
    var isNumber = function($object) {
        return typeof $object === 'number' ? true : false;
    };
    window.isNumber =  function($object) { return isNumber($object) };

    /**
     * Check whether type of variable is boolean or not.
     * @param $object - Variable name to check.
     * @returns {boolean}
     */
    var isBoolean = function($object) {
        return typeof $object === 'boolean' ? true : false;
    };
    window.isBoolean = function($object) { return isBoolean($object) };

    /**
     * Check whether type of variable is jQuery Object or not.
     * @param $object - Variable to check.
     * @returns {boolean}
     */
    var isJQuery = function($object) {
        return typeof $object === 'object' && $object.hasOwnProperty('length') && $object.jquery ? true : false;
    };
    window.isJQuery = function($object) { return isJQuery($object) };

    /**
     * Check whether type of variable is HTML Object or not.
     * @param $object - Variable to check.
     * @returns {boolean}
     */
    var isHTML = function($object) {
        return typeof $object === 'object' && $object.ELEMENT_NODE ? true : false;
    };
    window.isHTML = function($object) { return isHTML($object) };

    /**
     * Check whether type of variable is DOMList or not.
     * @param $object - Variable to check.
     * @returns {boolean}
     */
    var isDOMList = function($object) {
        return typeof $object === 'object' && $object.name && $object.name === 'node-list' ? true : false;
    };
    window.isDOMList = function($object) { return isDOMList($object) };

    /**
     * Check whether type of string is Color format or not.
     * @param $object - String to check.
     * @returns {boolean}
     */
    var isColor = function($object) {
        return /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test($object) ? true : false;
    };
    window.isColor = function($object) { return isColor($object) };

    /**
     * Check whether type of string is URL format or not.
     * @param $object - String to check.
     * @returns {boolean}
     */
    var isURL = function($object) {
        return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test($object) ? true : false;
    };
    window.isURL = function($object) { return isURL($object) };

    /**
     * Check whether type of string is Email format or not.
     * @param $object - String to check.
     * @returns {boolean}
     */
    var isEmail = function($object) {
        return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test($object) ? true : false;
    };
    window.isEmail = function($object) { return isEmail($object) };

    /**
     * Check whether type of string is Date format or not.
     * @param $object - String to check.
     * @returns {boolean}
     */
    var isDate = function($object) {
        return !isNaN(new Date($object).getDate()) ? true : false;
    };
    window.isDate = function($object) { return isDate($object) };
})();

/**
 * Object Iterator Scripts.
 * Created by mahdaen on 12/16/14.
 */

(function() {
    /**
     * Iterate Object, Array, Number, and String.
     * @param object - Variable to iterate.
     * @param handler - Function that handle each result.
     * @param thisArg - Optional Arguments
     * @returns {*}
     */
    var foreach = function(object, handler, thisArg) {
        if (window.isFunction(handler)) {
            if (window.isArray(object) && window.isFunction(handler)) {
                for (var i = 0; i < object.length; ++i) {
                    handler.call(thisArg, object[i], i);
                }
            } else if (window.isObject(object) && window.isFunction(handler)) {
                for (var key in object) {
                    if (object.hasOwnProperty(key)) {
                        handler.call(thisArg, key, object[key]);
                    }
                }
            } else if (window.isNumber(object) && window.isFunction(handler)) {
                for (var i = 1; i <= object; ++i) {
                    handler.call(thisArg, i);
                }
            } else if (window.isString(object) && window.isFunction(handler)) {
                for (var i = 0; i < object.length; ++i) {
                    handler.call(thisArg, object.charAt(i), (i + 1));
                }
            } else if (window.isDOMList(object) && window.isFunction(handler)) {
                for (var i = 0; i < object.length; ++i) {
                    handler.call(thisArg, object[i], i);
                }
            } else {
                return console.warn('Euw! We can\'t iterate your object. So sorry!');
            }
        } else {
            console.warn('Euw! Don\'t forget to give us a function to call!');
        }

        return object;
    };

    window.foreach = function($object, $handlder, $args) { return foreach($object, $handlder, $args)};
})();

/**
 * Private Object Generator Scripts.
 * Created by mahdaen on 12/16/14.
 */

/* Defining Object Holder */
window.__variables = {};
window.__constants = {};
window.__functions = {};

(function() {
    /**
     * Creating Private Variables.
     * @param name - String Variable Name.
     * @param value - Defined Value.
     * @returns {*}
     */
    var vars = function(name, value) {
        if (window.isString(name)) {
            if (window.isDefined(value)) {
                window.__variables[name] = value;

                return value;
            } else {
                if (window.__variables.hasOwnProperty(name)) {
                    return window.__variables[name];
                } else {
                    //return console.warn('Variable "' + name + '" is undefined!');
                    return undefined;
                }
            }
        } else {
            return console.warn('Argument @name is required!');
        }
    };
    window.vars = function($name, $value) { return new vars($name, $value) };

    /**
     * Create Private Constants.
     * @param name - Constant Name.
     * @param value - Constant Value.
     * @returns {*}
     */
    var cons = function(name, value) {
        if (window.isString(name)) {
            if (window.isDefined(value)) {
                if (!window.__constants.hasOwnProperty(name)) {
                    window.__constants[name] = value;

                    return value;
                } else {
                    return console.warn('Constant "' + name + '" already defined!');
                }
            } else {
                if (window.__constants.hasOwnProperty(name)) {
                    return window.__constants[name];
                } else {
                    return console.warn('Constant "' + name + '" is undefined!');
                }
            }
        } else {
            return console.warn('Argument @name is required!');
        }
    };
    window.cons = function($name, $value) { return new cons($name, $value) };

    /**
     * Create Private Function.
     * @param name - Function Name.
     * @param value - Function to call.
     * @returns {*}
     */
    var func = function(name, handler) {
        if (window.isString(name)) {
            if (window.isFunction(handler)) {
                if (!window.__functions.hasOwnProperty(name)) {
                    window.__functions[name] = handler;

                    return handler;
                } else {
                    console.warn('Function "' + name + '" already defined!');
                }
            } else {
                if (window.__functions.hasOwnProperty(name)) {
                    return window.__functions[name];
                } else {
                    return console.warn('Function "' + name + '" is undefined!');
                }
            }
        } else {
            return console.warn('Argument @name is required!');
        }
    };
    window.func = function($name, $handler) { return new func($name, $handler) };
})();

/**
 * Object Rotator Scripts.
 * Created by mahdaen on 12/16/14.
 */

/**
 * Circle item in object, array, and string.
 * @param obj - Object ot circle.
 * @param reversed - Does the circle is reversed.
 * @returns {{}}
 */
window.circle = function(obj, reversed) {
    if (window.isObject(obj)) {
        var nobj = {}, keys = Object.keys(obj), last = (keys.length - 1);

        if (!reversed) {
            window.foreach(obj, function (key, value) {
                if (key !== keys[0]) {
                    nobj[key] = value;
                }
            });

            nobj[keys[0]] = obj[keys[0]];
        } else {
            nobj[keys[last]] = obj[keys[last]];

            window.foreach(obj, function (key, value) {
                if (key !== keys[last]) {
                    nobj[key] = value;
                }
            });
        }

        return nobj;
    } else if (window.isArray(obj)) {
        var narr = [], last = (this.length - 1);

        if (!reversed) {
            window.foreach(obj, function(value, index) {
                if (index !== 0) {
                    narr.push(value);
                }
            });

            narr.push(obj[0]);
        } else {
            narr.push(obj[last]);

            window.foreach(obj, function(value, index) {
                if (index !== last) {
                    narr.push(value);
                }
            });
        }

        return narr;
    }
};