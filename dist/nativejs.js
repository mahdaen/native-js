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
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isDefined} isDefined(variable); isDefined()
     * @apiName isDefined
     * @apiDescription Check whether argument is defined or not. Use only to check argument in function.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = function(bar) {
     *     isDefined(bar); // true or false.
     * }
     *
     * isDefined(bar); // Error.
     */
    var isDefined = function($object) {
        return typeof $object !== 'undefined' ? true : false;
    };
    window.isDefined = function($object) { return isDefined($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isString} isString(variable); isString()
     * @apiName isString
     * @apiDescription Check does type of variable is string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'bar';
     * var bar = 100;
     *
     * isString(foo); // true
     * isString(bar); // false
     */
    var isString = function($object) {
        return typeof $object === 'string' ? true : false;
    };
    window.isString = function($object) { return isString($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isObject} isObject(variable); isObject()
     * @apiName isObject
     * @apiDescription Check does type of variable is object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = {a: 1, b: 2};
     * var bar = 100;
     *
     * isObject(foo); // true
     * isObject(bar); // false
     */
    var isObject = function($object) {
        return $object !== null && typeof $object === 'object' && !$object.length ? true : false;
    };
    window.isObject = function($object) { return isObject($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isArray} isArray(variable); isArray()
     * @apiName isArray
     * @apiDescription Check does type of variable is array or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = [1,2];
     * var bar = 100;
     *
     * isArray(foo); // true
     * isArray(bar); // false
     */
    var isArray = function($object) {
        return typeof $object === 'object' && Array.isArray($object) ? true : false;
    };
    window.isArray = function($object) { return isArray($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isFunction} isFunction(variable); isFunction()
     * @apiName isFunction
     * @apiDescription Check does type of variable is function or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = function() {};
     * var bar = 100;
     *
     * isFunction(foo); // true
     * isFunction(bar); // false
     */
    var isFunction = function($object) {
        return typeof $object === 'function' ? true : false;
    };
    window.isFunction = function($object) { return isFunction($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isNumber} isNumber(variable); isNumber()
     * @apiName isNumber
     * @apiDescription Check does type of variable is number or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 100;
     * var bar = 'Foo';
     *
     * isNumber(foo); // true
     * isNumber(bar); // false
     */
    var isNumber = function($object) {
        return typeof $object === 'number' ? true : false;
    };
    window.isNumber =  function($object) { return isNumber($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isBoolean} isBoolean(variable); isBoolean()
     * @apiName isBoolean
     * @apiDescription Check does type of variable is boolean or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = false;
     * var bar = 'true';
     *
     * isBoolean(foo); // true
     * isBoolean(bar); // false
     */
    var isBoolean = function($object) {
        return typeof $object === 'boolean' ? true : false;
    };
    window.isBoolean = function($object) { return isBoolean($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isJQuery} isJQuery(variable); isJQuery()
     * @apiName isJQuery
     * @apiDescription Check does type of variable is jQuery Object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = $('span');
     * var bar = [1,2];
     *
     * isJQuery(foo); // true
     * isJQuery(bar); // false
     */
    var isJQuery = function($object) {
        return typeof $object === 'object' && $object.hasOwnProperty('length') && $object.jquery ? true : false;
    };
    window.isJQuery = function($object) { return isJQuery($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isHTML} isHTML(variable); isHTML()
     * @apiName isHTML
     * @apiDescription Check does type of variable is html object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = $('span')[0];
     * var bar = 100;
     *
     * isHTML(foo); // true
     * isHTML(bar); // false
     */
    var isHTML = function($object) {
        return typeof $object === 'object' && $object.ELEMENT_NODE ? true : false;
    };
    window.isHTML = function($object) { return isHTML($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isDOMList} isDOMList(variable); isDOMList()
     * @apiName isDOMList
     * @apiDescription Check does type of variable is DOMList object or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = $dom('span');
     * var bar = 100;
     *
     * isDOMList(foo); // true
     * isDOMList(bar); // false
     */
    var isDOMList = function($object) {
        return typeof $object === 'object' && $object.name && $object.name === 'DOMList' ? true : false;
    };
    window.isDOMList = function($object) { return isDOMList($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isHTMLString} isHTMLString(variable); isHTMLString()
     * @apiName isHTMLString
     * @apiDescription Check does type of variable is HTML Formatted String or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = '<span class="foo">';
     * var bar = 'span.foo';
     *
     * isHTMLString(foo); // true
     * isHTMLString(bar); // false
     */
    var isHTMLString = function($object) {
        return typeof $object !== 'undefined' && $object.match(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/) ? true : false;
    }
    window.isHTMLString = function($object) { return isHTMLString($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isColor} isColor(variable); isColor()
     * @apiName isColor
     * @apiDescription Check does type of variable is color string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = '#999';
     * var bar = 100;
     *
     * isColor(foo); // true
     * isColor(bar); // false
     */
    var isColor = function($object) {
        return /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test($object) ? true : false;
    };
    window.isColor = function($object) { return isColor($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isURL} isURL(variable); isURL()
     * @apiName isURL
     * @apiDescription Check does type of variable is URL string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'https://main.com/pages/module';
     * var bar = 'foo bar';
     *
     * isURL(foo); // true
     * isURL(bar); // false
     */
    var isURL = function($object) {
        return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test($object) ? true : false;
    };
    window.isURL = function($object) { return isURL($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isEmail} isEmail(variable); isEmail()
     * @apiName isEmail
     * @apiDescription Check does type of variable is email address string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'mail@domain.com';
     * var bar = 'mail@domain';
     *
     * isEmail(foo); // true
     * isEmail(bar); // false
     */
    var isEmail = function($object) {
        return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test($object) ? true : false;
    };
    window.isEmail = function($object) { return isEmail($object) };

    /**
     * @apiVersion 1.1.0
     * @apiGroup Data Type
     *
     * @api {isDate} isDate(variable); isDate()
     * @apiName isDate
     * @apiDescription Check does type of variable is date string or not.
     *
     * @apiParam {Any} variable Variable to check.
     *
     * @apiExample {js} Sample #1
     * var foo = 'Jan 11, 2011';
     * var bar = 100;
     *
     * isDate(foo); // true
     * isDate(bar); // false
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
     * @apiVersion 1.1.0
     * @apiGroup Iterator
     *
     * @api {foreach} foreach(object,handler); foreach()
     * @apiName Foreach
     * @apiDescription Perform loop through Array, Object, String, Number and DOMList.
     *
     * @apiParam {Any} object Array, Object, String, Number or DOMList.
     * @apiParam {func} handler Function that handle each item.
     * <br>Array iterator will give 'value' and 'index' as argument.
     * <br>Object iterator will give 'key' and 'value' as argument.
     * <br>String iterator will give 'char' and 'index' as argument.
     * <br>Number iterator will give 'number' as argument.
     * <br>DOMList iterator will give 'elem' and 'index' as argument.
     *
     * @apiExample {js} Sample: Array
     * var arr = [1,2,3,4];
     *
     * foreach(arr, function(value, i) {
     *     console.log(value, i); // 1 0 >> 2 1 >> 3 2 >> 4 3
     * }
     *
     * @apiExample {js} Sample: Object
     * var obj = {a: 1, b: 2};
     *
     * foreach(obj, function(key, value) {
     *     console.log(key, value); // a 1 >> b 2
     * }
     *
     * @apiExample {js} Sample: String
     * var str = 'Foo';
     *
     * foreach(str, function(char, i) {
     *     console.log(char, i); // F 0 >> o 1 >> o 2
     * }
     *
     * @apiExample {js} Sample: Number
     * foreach(5, function(number) {
     *     console.log(number); // 1 >> 2 >> 3 >> 4 >> 5
     * }
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

    /**
     * @apiVersion 1.1.0
     * @apiGroup Iterator
     *
     * @api {reveach} reveach(object,handler); reveach()
     * @apiName Reveach
     * @apiDescription Perform reversed loop through Array, Object, String, Number and DOMList.
     *
     * @apiParam {Any} object Array, Object, String, Number or DOMList.
     * @apiParam {func} handler Function that handle each item.
     * <br>Array iterator will give 'value' and 'index' as argument.
     * <br>Object iterator will give 'key' and 'value' as argument.
     * <br>String iterator will give 'char' and 'index' as argument.
     * <br>Number iterator will give 'number' as argument.
     * <br>DOMList iterator will give 'elem' and 'index' as argument.
     *
     * @apiExample {js} Sample: Array
     * var arr = [1,2,3,4];
     *
     * reveach(arr, function(value, i) {
     *     console.log(value, i); // 4 3 >> 3 2 >> 2 1 >> 1 0
     * }
     *
     * @apiExample {js} Sample: Object
     * var obj = {a: 1, b: 2};
     *
     * reveach(obj, function(key, value) {
     *     console.log(key, value); // b 2 >> a 1
     * }
     *
     * @apiExample {js} Sample: String
     * var str = 'Foo';
     *
     * reveach(str, function(char, i) {
     *     console.log(char, i); // o 2 >> o 1 >> F 0
     * }
     *
     * @apiExample {js} Sample: Number
     * reveach(5, function(number) {
     *     console.log(number); // 5 >> 4 >> 3 >> 2 >> 1
     * }
     */
    var reveach = function($object, $handler, $args) {
        if (window.isFunction($handler)) {
            if (window.isArray($object)) {
                for (var i = ($object.length - 1); i >= 0; --i) {
                    $handler.call($args, $object[i], i);
                }
            } else if (window.isObject($object)) {
                var keys = Object.keys($object);

                for (var i = (keys.length - 1); i >= 0; --i) {
                    $handler.call($args, keys[i], $object[keys[i]]);
                }
            } else if (window.isNumber($object)) {
                for (var i = $object; i >= 1; --i) {
                    $handler.call($args, i);
                }
            } else if (window.isString($object)) {
                for (var i = ($object.length - 1); i >= 0; --i) {
                    $handler.call($args, $object.charAt(i), i);
                }
            } else if (window.isDOMList($object)) {
                for (var i = ($object.length - 1); i >= 0; --i) {
                    $handler.call($args, $object[i], i);
                }
            } else {
                return console.warn('Euw! We can\'t iterate your object. So sorry!');
            }
        } else {
            console.warn('Euw! Don\'t forget to give us a function to call!');
        }

        return $object;
    };

    window.foreach = function($object, $handlder, $args) { return foreach($object, $handlder, $args) };
    window.reveach = function($object, $handlder, $args) { return reveach($object, $handlder, $args) };
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
