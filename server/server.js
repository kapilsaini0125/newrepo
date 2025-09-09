import {WebSocketServer} from 'ws';
import {v4 as uuidv4} from 'uuid';
import http from 'http';

const socket = new WebSocketServer({port: 8000});
const groups= {};
function handelMessage(message){
    console.log("sending message");
    const mes= message.userName+': '+message.message;
    socket.clients.forEach(client => {
        client.send(JSON.stringify(mes));
    });
}

socket.on('connection', function connection(e) {
    console.log("client connected");
    /*e.on('message', function incoming(frontend){
         const message= JSON.parse(frontend);
         console.log(message);
         if(message.type === 'message'){
            console.log("first");
            handelMessage(message);
        }
        else{
            console.log("sec");
            if(message.group){
               const g_name= message.group;
               if(!groups.g_name){
                groups.g_name= [];
               }
               groups.g_name.push(e);
               console.log(groups);
               groups.g_name.forEach(client => {
                client.send(JSON.stringify('hii'));
               })
            }
        }
    })*/
    
})



