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

    /**
     * Reversed Iterator.
     * @param $object - Object to iterate.
     * @param $handler - Function that handle each item.
     * @param $args - Optional arguments.
     * @returns {*}
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
