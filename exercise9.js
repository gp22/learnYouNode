var bl = require('bl');
var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var getData1 = function(callback) {
    http.get(url1, function(res) {

        callback(null, res)
    })
}

var getData2 = function(callback) {
    http.get(url2, function(res) {

        callback(null, res)
    })
}

var getData3 = function(callback) {
    http.get(url3, function(res) {

        callback(null, res)
    })
}

getData1(function(err, res) {
    if (err) {
        return console.error(err)
    }
    res.pipe(bl(function(err, data) {
        if (err) {
            return console.error(err)
        }
        var data = data.toString();
        console.log(data);
    }));
    // begin data2
    getData2(function(err, res) {
        if (err) {
            return console.error(err)
        }
        res.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err)
            }
            var data = data.toString();
            console.log(data);
        }));
        // begin data3
        getData3(function(err, res) {
            if (err) {
                return console.error(err)
            }
            res.pipe(bl(function(err, data) {
                if (err) {
                    return console.error(err)
                }
                var data = data.toString();
                console.log(data);
            }));
        });
        // end data3
    });
    // end data2
});
