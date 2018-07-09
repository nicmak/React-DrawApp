const express = require('express');
const socket = require('socket.io')


const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('test'));


const server = app.listen(PORT, () => {
  console.log(`Listening to requests on Port ${PORT}`);
})

const io = socket(server);

io.on('connection', (socket) => {
  console.log('a user connected')
})



