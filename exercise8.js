var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
    var string = '';

    res.setEncoding('utf8');
    res.on('data', function(data) {
      string += data;
    });

    res.on('end', function() {
      console.log(string.length);
      console.log(string);
    });

    res.on('error', console.error);
}).on('error', console.error);
