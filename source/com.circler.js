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