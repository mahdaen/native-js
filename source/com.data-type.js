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
        return typeof $object === 'object' && $object.name && $object.name === 'DOMList' ? true : false;
    };
    window.isDOMList = function($object) { return isDOMList($object) };

    /**
     * Check whether type of variable is HTML Formatted String or not.
     * @param $object - Variable to check.
     * @returns {boolean}
     */
    var isHTMLString = function($object) {
        return typeof $object !== 'undefined' && $object.match(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/) ? true : false;
    }
    window.isHTMLString = function($object) { return isHTMLString($object) };

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
