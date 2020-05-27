const fs=require('fs');
const express = require('express')
const app = express()
const port = 3000
var assetlinks = fs.readFileSync(__dirname + '/assetlinks.json');




app.get('/.well-known/assetlinks.json', (req, res) => res.send(assetlinks))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))