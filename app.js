const express = require('express');
require('dotenv').config();

const app = express();

app.use('/public',express.static(path.join(__dirname,'public')));

app.listen(3000);