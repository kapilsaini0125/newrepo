import {WebSocketServer} from 'ws';
import {v4 as uuidv4} from 'uuid';

const socket = new WebSocketServer({port: 8000});
const hello='hello';
function handelMessage(message){
    console.log("sending message");
    const mes= message.userName+': '+message.message;
    socket.clients.forEach(client => {
        client.send(JSON.stringify(mes));
    });
}

socket.on('connection', function connection(e) {
    
    e.on('message', function incoming(frontend){
         const message= JSON.parse(frontend);
         console.log(message);
         if(message.type === 'message'){
            console.log("first");
            handelMessage(message);
        }
        else{
            console.log("sec");
            const newMessage= 'New User Was Added: '+ message.userName;
            console.log(newMessage);
            socket.clients.forEach(client => {
            client.send(JSON.stringify(newMessage));
            });
        }
    })
    
})



