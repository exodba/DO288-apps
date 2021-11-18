var express = require('express');
var fs = require('fs')
app = express();

// read in the APP_MSG env var
var msg = process.env.APP_MSG;

var response;

app.get('/', function (req, res) {

    response = ' ' + msg + '\n';

    // Read in the secret file

        //send the response to the client
        res.send(response);
    

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
