const express = require('express');
const app = express();

app.listen(3000, () => console.log('connected to 3000'));

module.exports = app;
