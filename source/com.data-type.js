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
        return typeof $object === 'object' && $object.indexOf === undefined && $object.splice === undefined ? true : false;
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
