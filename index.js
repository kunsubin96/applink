const fs=require('fs');
const express = require('express')
const app = express()
var assetlinks = fs.readFileSync(__dirname + '/assetlinks.json');




app.get('/.well-known/assetlinks.json',  function(req, res, next) {
    res.set('Content-Type', 'application/json');
    res.status(200).send(assetlinks);
});

app.listen(process.env.PORT || 8000, () => console.log(`Example app listening`))