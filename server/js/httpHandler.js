const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

const generateRandomMove = () => {
  let options = ['left', 'right', 'up', 'down'];
  let randomInt = Math.floor(Math.random() * 4);
  return options[randomInt];
}

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  // update to handle different types of reqs (req.method)
  if (req.method === 'OPTIONS') {
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
    res.writeHead(200, headers);
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
  } else if (req.method === 'GET') {
    console.log('Serving request type ' + req.method + ' for url ' + req.url);
    res.writeHead(200, headers);
    res.end(generateRandomMove());
    next(); // invoke next() at the end of a request to help with testing!
  }
};
