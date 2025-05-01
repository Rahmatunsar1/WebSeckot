const WebSocket = require('ws');

// Membuat WebSocket server di port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(`Pesan diterima: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
