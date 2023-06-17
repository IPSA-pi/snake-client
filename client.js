// Require necessary modules and data for connection to server
const net = require('net');
const {IP, PORT} = require('./constants');

// Create connection
const connect = function() {
  // the conn object will be used to handle messages from the server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Handle server messages
  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

  // Handle successful connection and write user name to the server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: IAN');
  });

  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 50);

  conn.setEncoding('utf8');

  return conn;
};

module.exports = {connect};
