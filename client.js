const net = require('net');

const connect = function() {
  // the conn object will be used to handle messages from the server
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
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
