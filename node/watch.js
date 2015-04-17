var fs = require('fs');
fs.watch('./server.js', {
    persistent: true
}, function(event, filename) {
    console.log(event + " event occurred on " + filename);
});