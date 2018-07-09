var http = require("https");
var options = {
  hostname: 'petstore.swagger.io',
  port: 443,
  rejectUnauthorized: 0,
  path: '/v2/store/order',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  }
};
var req = http.request(options, function(res) {

  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
req.write('{"id": 0, "petId": 0, "quantity": 0, "shipDate": "2018-07-07T07:40:03.044Z", "status": "placed", "complete": false}');
req.end();

