var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var getData = function(url, callback) {
    http.get(url, function(err, res) {
        if (err) {
            return callback(err)
        }

        callback(null, res)
    })
}

getData(url1, function(err, res) {
    if (err) {
        return console.error(err)
    }

    var string = '';

    res.setEncoding('utf8');
    res.on('data', function(data) {
        string += data;
    })

    res.on('end', function() {
        console.log(string);
    })
    res.on('error', console.error)
});







// var printData = function(url, callback) {
//     fs.readdir(dir, function(err, list) {
//         if (err) {
//             return callback(err)
//         }
//
//         list = list.filter(function(file) {
//             return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, res)
//     })
// }
