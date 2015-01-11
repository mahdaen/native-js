/**
 * Object Iterator Scripts.
 * Created by mahdaen on 12/16/14.
 */

(function() {
    /**
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
