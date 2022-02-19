// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 3000;

import cors_proxy from 'cors-anywhere';
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    // requireHeader: [ 'x-requested-with'],
    removeHeaders: [],
    // setHeaders :{"x-powered-by": "CORS Anywhere"}
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
