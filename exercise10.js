var net = require('net');
var PORT = process.argv[2];

var server = net.createServer(function(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString();
    if (month.length === 1) {
        month = '0' + month;
    }
    var day = date.getDate().toString();
    if (day.length === 1) {
        day = '0' + day;
    }
    var hours = date.getHours().toString();
    if (hours.length === 1) {
        hours = '0' + hours;
    }
    var minutes = date.getMinutes().toString();
    if (minutes.length === 1) {
        minutes = '0' + minutes;
    }

    var string = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    socket.end(string + '\n');
});

server.listen(PORT, function() {
    console.log('server listening on port ' + PORT);
});
