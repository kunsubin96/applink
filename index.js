const fs=require('fs');
const express = require('express')
const app = express()
var assetlinks = fs.readFileSync(__dirname + '/assetlinks.json');




app.get('/.well-known/assetlinks.json', (req, res) => res.send(assetlinks))

app.listen(process.env.PORT || 8000, () => console.log(`Example app listening`))