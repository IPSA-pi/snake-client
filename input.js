/* eslint-disable max-len */
const {MU, ML, MD, MR, messages} = require('./constants');

let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }

  switch (key) {
    case 'w': connection.write(MU); break;
    case 'a': connection.write(ML); break;
    case 's': connection.write(MD); break;
    case 'd': connection.write(MR); break;
    case 'm':
      connection.write(`Say: ${messages[Math.floor(Math.random() * messages.length)].toUpperCase()}`);
      break;
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {setupInput};
