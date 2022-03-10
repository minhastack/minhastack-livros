const express = require('express');
const {resolve, join} = require("path");
const app = express();

const frontend = resolve(__dirname, "./build");

app.get('*', (req, res) => {
    res.sendFile(join(__dirname, './build/index.html'));
  });
  
app.listen(process.env.PORT || 3000);
