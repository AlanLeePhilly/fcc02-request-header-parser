var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.json({
    "ipaddress": req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    "language": req.headers["accept-language"],
    "software": req.headers['user-agent']
  })
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
