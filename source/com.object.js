/**
 * Native Object Extender Scripts.
 * Created by mahdaen on 12/16/14.
 */

window.__nconfig.object = {
    naturalGet: true
};

(function() {
    /* Alternative Object */
    var object = function(obj) {
        var $this = this;

        if (window.isObject(obj)) {
            window.foreach(obj, function (key, value) {
                $this[key] = value;
            });
        }

        return this;
    }

    /* Alternative Object Prototypes */
    object.prototype = {
        each: function(func) {
            window.foreach(this, func);
        },

        get: function(index) {
            if (window.isNumber(index)) {
                var keys = Object.keys(this), result, $this = this;

                if (window.__nconfig.object.naturalGet) {
                    index = index - 1;
                }

                keys.each(function(val, idx) {
                    if (idx === index) {
                        result = $this[val];
                    }
                });

                return result;
            }
        },

        circle: function(reversed) {
            var $this = this, keys = Object.keys(this);

            var circled = window.circle(this, reversed);

            window.foreach(keys, function (value) {
                delete $this[value];
            });

            window.foreach(circled, function(key, value) {
                $this[key] = value;
            });

            return this;
        },

        sort: function(reversed) {
            var keys = Object.keys(this), $this = this;
            var nobj = new object(this);

            if (!reversed) {
                keys.sort();
            } else {
                keys.sort(function(a,b) { return b-a });
            }

            window.foreach(this, function (key, value) {
                delete $this[key];
            });

            window.foreach(keys, function(value) {
                $this[value] = nobj[value];
            });

            return this;
        },

        del: function(key) {
            if (window.isString(key) && this.hasOwnProperty(key)) {
                delete this[key];
            }

            return this;
        }
    }

    window.object = function($object) { return new object($object)};
})();
