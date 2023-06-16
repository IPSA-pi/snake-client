const net = require('net');
const {IP, PORT} = require('./constants');

const connect = function() {
  // the conn object will be used to handle messages from the server
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });

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
