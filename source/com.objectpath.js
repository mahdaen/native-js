/**
 * Object Path Finder.
 * Created by mahdaen on 12/26/14.
 */

(function() {
    var readobj = function(path, src) {
        !isObject(src) ? src = window : src;

        if (isString(path)) {
            if (path.search('.') > -1) {
                var arp = path.split('.');
            } else if (path.search('/') > -1) {
                var arp = path.split('/');
            } else if (path.search(':') > -1) {
                var arp = path.split(':');
            }

            console.log(arp);

            window.foreach(arp, function(key) {
                if (src[key]) {
                    src = src[key];
                } else {
                    console.warn('Object doesn\'t contains ' + key);
                }
            });
        }

        return src;
    }

    window.readobj = readobj;
})();