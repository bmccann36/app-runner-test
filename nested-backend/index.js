const express = require('express');


const index = express();

const port = process.env.PORT || 8080;


index.get('/', (req, res) => {
  console.log('default route');
  res.send('ok');
});


// request to handle undefined or all other routes
index.get('*', (req, res) => {
  console.log('users route');
  res.send('ok');
});

index.listen(port, (err) => {
  if (err) {
    console.log('Error::', err);
  }
  console.log(`running server on from port:::::::${port}`);
});
