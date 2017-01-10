'use strict';

// TODO: DONE Initialize your project using NPM to create and populate a package.json file

// TODO: DONE Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');

const PORT = process.env.PORT || 3000;

// TODO: DONE Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));

// TODO: DONE Using the response object, send the index.html file back to the user
app.get('*', function(request, response) {
  response.status(404).sendFile('index.html', {root: './public'})

});

// TODO: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

app.listen(PORT, function() {
  console.log('This is the port that you started on' + PORT);
  // TODO: DONE Log to the console a message that lets you know which port your server has started on
});
