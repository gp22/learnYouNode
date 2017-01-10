var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err, files) {
    if (err) {
        return console.log(err);
    }
    // function containsExt(i) {
    //   return i.endsWith(ext);
    // }
    // console.log(files.filter(containsExt).join('\n'));

    files.forEach(function(file) {
        if (path.extname(file) === ext) {
          console.log(file);
        }
    });
});
