const express = require("express");

const path = require("path");
const app = express();


//Server  only  the static  files from the dist directory
app.use(express.static('./dist/angular-demo-heroku'));



app.get("/*",(req, res) => res.sendFile('index.html',{  root:   'dist/angular-demo-heroku/'}),)

// Start the app  by listening on the default heroku port

app.listen(process.env.PORT || 8080);
