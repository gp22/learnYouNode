var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, function(err, data) {
        if (err) {
            return callback(err);
        }

        callback(null, matchNames(data));

        function matchNames(data) {
            var array = [];
            data.forEach(function(file) {
                if (path.extname(file) === '.' + ext) {
                    array.push(file);
                }
            });
            return array;
        }
    });
};
