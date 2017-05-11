var fs = require('fs');
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  var text = fs.readFileSync('pixijs.html', 'utf8');
  res.send(text)
})

app.use('/images', express.static('images'))

app.listen(7777, function () {
  console.log('Example app listening on port 7777!')
})
