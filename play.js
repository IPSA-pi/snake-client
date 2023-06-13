const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.22.113.199',
    port: '50541',
  });

  conn.on('data', (data) => {
    console.log('Server says:', data);
  });
  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting ...');
connect();
