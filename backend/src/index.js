const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3000, () => 
  console.log(`🚀 Server is running on PORT 3000`)
);