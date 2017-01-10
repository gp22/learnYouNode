var lsModule = require('./lsModule');

var dir = process.argv[2];
var ext = process.argv[3];

var logFileNames = function(err, data) {
    if (err) {
      return console.log(err);
    }

    // console.log(data);
    data.forEach(function(file) {
            console.log(file);
    });
};

lsModule(dir, ext, logFileNames);
