import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';

const app= express();
app.use(cors());

const server= http.createServer(app);
const io= new Server(server, 
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    }
);

app.get('/request', (req, res) => {
    console.log('hello socket.io');
    res.status(200).json('hello');
});

io.on('connection', (client) => {
    console.log("client connected");
      client.on('clientMessage', (message) => {
           console.log(message);
           io.sockets.emit('serverMessage', message);
      });
});

server.listen(8000, ()=> {
    console.log('server is listening...');
});