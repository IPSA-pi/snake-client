// import constants: Move methods and messages
const {MU, ML, MD, MR, messages} = require('./constants');

// this variable is going to be reassigned inside setupInput()
let connection;

// callback function to handle user input
const handleUserInput = function(key) {
  // if user keys in 'ctrl + c' the program should exit / terminate connection
  if (key === '\u0003') {
    process.exit();
  }

  // key-map for moving snake and making the snake speak
  switch (key) {
    case 'w': connection.write(MU); break;
    case 'a': connection.write(ML); break;
    case 's': connection.write(MD); break;
    case 'd': connection.write(MR); break;
    case 'm':
      // From the array of messages write an element at random
      // every time the key is pressed
      const message = messages[Math.floor(Math.random() * messages.length)];
      connection.write(`Say: ${message.toUpperCase()}`);
      break;
  }
};

const setupInput = function(conn) {
  // conn will be returned in the play.js file,
  // it stores a connection obj to the server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // this function will send write methods to the server
  // based on user input (stdin)
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};
