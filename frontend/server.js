const express = require('express');
const {resolve} = require("path");
const app = express();

const frontend = resolve(__dirname, "./build");
app.get("*", (req, res) => {
   
    let url = path.join(__dirname, './build', 'index.html');
   
    // if (!url.startsWith('/app/')) // since we're on local windows
    //   url = url.substring(1);
    res.sendFile(url);
  });


app.listen(process.env.PORT || 3000);
