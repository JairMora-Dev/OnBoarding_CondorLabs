const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello for using condor labs rules');
  //console.log('Hello using matchbox CLbas rules');
});

app.listen(3000);
