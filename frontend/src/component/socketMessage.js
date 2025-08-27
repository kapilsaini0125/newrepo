import React, {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';

//console.log(useEffect);
const Socket = () => {
  const {userName} = useParams();
  const [message, setMessage] = useState('');
  const [friends, setFriends] = useState([]);
  
  const [name, setName] = useState('');
  const socket= useRef(null);
  const uiMessage = useRef([]);
  console.log(socket.current);
  console.log(userName);
  const [userMessage, setUserMessage]= useState([]);
  

  useEffect(() => {

  socket.current = new WebSocket('ws://localhost:8000');
  console.log('useEffect');
   
  if(socket.current.readyState === WebSocket.OPEN){
    
    socket.current.send(JSON.stringify({type: 'name', userName}));
  }
  else{
    socket.current.addEventListener('open', () => {
      
      socket.current.send(JSON.stringify({type: 'name', userName}));
    });
  }
  
  socket.current.onmessage = function(message){
     const data= JSON.parse(message.data);
     console.log(data);
     setUserMessage(prev => [...prev, data]);
  }
  }, []);
  
  const handelMessage = () =>{
    socket.current.send(JSON.stringify({type: 'message', userName, message}));      
    setMessage('');
}
  const handelClose = () => {
    console.log('closeing socket');
    socket.current.close();
  }
  console.log(userMessage);
  return (
     <div>
      <form >
        <div>
         
          <label>Send</label>
          <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          />
          <button
          onClick={(e) => {
            e.preventDefault();
            handelMessage();
          }}>send</button>
          
        </div>
      </form>
      <button
          onClick={(e) => {
            e.preventDefault();
            handelClose();
          }}>close</button>
          <div>
            <ul>
              {userMessage.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>
    </div>
  )
}

export default Socket;
