if ("undefined" == typeof window) var window = {};

if (window.__nconfig = {}, function() {
    var isDefined = function($object) {
        return "undefined" != typeof $object ? !0 : !1;
    };
    window.isDefined = function($object) {
        return isDefined($object);
    };
    var isString = function($object) {
        return "string" == typeof $object ? !0 : !1;
    };
    window.isString = function($object) {
        return isString($object);
    };
    var isObject = function($object) {
        return null === $object || "object" != typeof $object || $object.length ? !1 : !0;
    };
    window.isObject = function($object) {
        return isObject($object);
    };
    var isArray = function($object) {
        return "object" == typeof $object && (Array.isArray($object) || "length" in $object) ? !0 : !1;
    };
    window.isArray = function($object) {
        return isArray($object);
    };
    var isFunction = function($object) {
        return "function" == typeof $object ? !0 : !1;
    };
    window.isFunction = function($object) {
        return isFunction($object);
    };
    var isNumber = function($object) {
        return "number" == typeof $object ? !0 : !1;
    };
    window.isNumber = function($object) {
        return isNumber($object);
    };
    var isBoolean = function($object) {
        return "boolean" == typeof $object ? !0 : !1;
    };
    window.isBoolean = function($object) {
        return isBoolean($object);
    };
    var isJQuery = function($object) {
        return "object" == typeof $object && $object.hasOwnProperty("length") && $object.jquery ? !0 : !1;
    };
    window.isJQuery = function($object) {
        return isJQuery($object);
    };
    var isHTML = function($object) {
        return "object" == typeof $object && $object.ELEMENT_NODE ? !0 : !1;
    };
    window.isHTML = function($object) {
        return isHTML($object);
    };
    var isDOMList = function($object) {
        return "object" == typeof $object && $object.name && "DOMList" === $object.name ? !0 : !1;
    };
    window.isDOMList = function($object) {
        return isDOMList($object);
    };
    var isHTMLString = function($object) {
        return "undefined" != typeof $object && $object.match(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/) ? !0 : !1;
    };
    window.isHTMLString = function($object) {
        return isHTMLString($object);
    };
    var isColor = function($object) {
        return /^(#)?([0-9a-fA-F]{3})([0-9a-fA-F]{3})?$/.test($object) ? !0 : !1;
    };
    window.isColor = function($object) {
        return isColor($object);
    };
    var isURL = function($object) {
        return /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i.test($object) ? !0 : !1;
    };
    window.isURL = function($object) {
        return isURL($object);
    };
    var isEmail = function($object) {
        return /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i.test($object) ? !0 : !1;
    };
    window.isEmail = function($object) {
        return isEmail($object);
    };
    var isDate = function($object) {
        return isNaN(new Date($object).getDate()) ? !1 : !0;
    };
    window.isDate = function($object) {
        return isDate($object);
    };
}(), function() {
    var foreach = function(object, handler, thisArg) {
        if (window.isFunction(handler)) if (window.isArray(object) && window.isFunction(handler)) for (var i = 0; i < object.length; ++i) handler.call(thisArg, object[i], i); else if (window.isObject(object) && window.isFunction(handler)) for (var key in object) object.hasOwnProperty(key) && handler.call(thisArg, key, object[key]); else if (window.isNumber(object) && window.isFunction(handler)) for (var i = 1; object >= i; ++i) handler.call(thisArg, i); else if (window.isString(object) && window.isFunction(handler)) for (var i = 0; i < object.length; ++i) handler.call(thisArg, object.charAt(i), i + 1); else {
            if (!window.isDOMList(object) || !window.isFunction(handler)) return console.warn("Euw! We can't iterate your object. So sorry!");
            for (var i = 0; i < object.length; ++i) handler.call(thisArg, object[i], i);
        } else console.warn("Euw! Don't forget to give us a function to call!");
        return object;
    }, reveach = function($object, $handler, $args) {
        if (window.isFunction($handler)) if (window.isArray($object)) for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object[i], i); else if (window.isObject($object)) for (var keys = Object.keys($object), i = keys.length - 1; i >= 0; --i) $handler.call($args, keys[i], $object[keys[i]]); else if (window.isNumber($object)) for (var i = $object; i >= 1; --i) $handler.call($args, i); else if (window.isString($object)) for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object.charAt(i), i); else {
            if (!window.isDOMList($object)) return console.warn("Euw! We can't iterate your object. So sorry!");
            for (var i = $object.length - 1; i >= 0; --i) $handler.call($args, $object[i], i);
        } else console.warn("Euw! Don't forget to give us a function to call!");
        return $object;
    };
    window.foreach = function($object, $handlder, $args) {
        return foreach($object, $handlder, $args);
    }, window.reveach = function($object, $handlder, $args) {
        return reveach($object, $handlder, $args);
    };
}(), window.__variables = {}, window.__constants = {}, window.__functions = {}, 
function() {
    var vars = function(name, value) {
        return window.isString(name) ? window.isDefined(value) ? (window.__variables[name] = value, 
        value) : window.__variables.hasOwnProperty(name) ? window.__variables[name] : void 0 : console.warn("Argument @name is required!");
    };
    window.vars = function($name, $value) {
        return new vars($name, $value);
    };
    var cons = function(name, value) {
        return window.isString(name) ? window.isDefined(value) ? window.__constants.hasOwnProperty(name) ? console.warn('Constant "' + name + '" already defined!') : (window.__constants[name] = value, 
        value) : window.__constants.hasOwnProperty(name) ? window.__constants[name] : console.warn('Constant "' + name + '" is undefined!') : console.warn("Argument @name is required!");
    };
    window.cons = function($name, $value) {
        return new cons($name, $value);
    };
    var func = function(name, handler) {
        return window.isString(name) ? window.isFunction(handler) ? window.__functions.hasOwnProperty(name) ? void console.warn('Function "' + name + '" already defined!') : (window.__functions[name] = handler, 
        handler) : window.__functions.hasOwnProperty(name) ? window.__functions[name] : console.warn('Function "' + name + '" is undefined!') : console.warn("Argument @name is required!");
    };
    window.func = function($name, $handler) {
        return new func($name, $handler);
    };
}(), "undefined" != typeof global && !global.foreach) {
    for (var key in window) global[key] = window[key];
    module.exports = window;
}