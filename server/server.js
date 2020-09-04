const express = require('express');
const app = express();
const path = require('path');
const PORT = '3000';
const deptOfEducationKey = require('../config')

//Middleware
app.use(express.static(path.join(__dirname, '../frontEnd/dist')));
app.use(express.json());

//Routes


//Port Listener
app.listen(PORT, () => {
  console.log(`server is CONNECTED on PORT:${PORT}`);
});
