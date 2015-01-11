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
     * @apiVersion 1.1.0
     * @apiGroup Private
     *
     * @api {vars} vars(name,value); vars()
     * @apiName Vars
     * @apiDescription Get or Set private variable.
     * Since it's private, you must use vars() to read the value.
     * Private variable live under single scope.
     * Defining value in same name will replace the value, wherever you use that.
     *
     * @apiParam {String} name Variable name.
     * @apiParam {Any} [value] Variable value. Leave blank to read value.
     *
     * @apiExample {js} Sample #1
     * x = vars('foo', 'bar'); // Set private variable foo to "bar".
     *
     * x = vars('foo'); // Read private variable foo.
     *
     * x = foo; // Error.
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
     * @apiVersion 1.1.0
     * @apiGroup Private
     *
     * @api {cons} cons(name,value); cons()
     * @apiName Cons
     * @apiDescription Read or create new read-only variable.
     * Since it's private, you must use cons() to read the value.
     * Private variable live under single scope.
     * You can change the value of the constant that already created.
     *
     * @apiParam {String} name Constant name.
     * @apiParam {Any} [value] Constant value. Leave blank to read value.
     *
     * @apiExample {js} Sample #1
     * x = cons('foo', 'bar'); // Set private constant foo to "bar".
     *
     * x = cons('foo'); // Read private variable foo.
     *
     * x = cons('foo', 'foobar'); // Nothing changed.
     *
     * x = foo; // Error.
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
     * @apiVersion 1.1.0
     * @apiGroup Private
     *
     * @api {func} func(name,handler); func()
     * @apiName Func
     * @apiDescription Run or create new read-only and private function.
     * Since it's private, you must use func() to call the function.
     * Private function live under single scope.
     * You can't change the function handler to the function that already defined.
     *
     * @apiParam {String} name Function name.
     * @apiParam {Any} [handler] Function handler. Leave blank to read value.
     *
     * @apiExample {js} Sample #1
     * // Create new function.
     * func('foo', function() {
     *     console.log('bar');
     * });
     *
     * // Call function.
     * func('foo')();
     *
     * // Nothing changed since function 'foo' already defined.
     * func('foo', function() {
     *     console.log('foo');
     * });
     *
     * foo(); // ERROR.
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
