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
