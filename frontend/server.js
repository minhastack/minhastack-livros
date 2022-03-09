const express = require('express');
const {resolve} = require("path");
const app = express();

const frontend = resolve(__dirname, "./build");
app.use("/", express.static(frontend));

app.listen(process.env.PORT || 3000);
