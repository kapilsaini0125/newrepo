import {useEffect, useState} from 'react';
import {useRef} from 'react';
import io from 'socket.io-client';
import {useParams} from 'react-router-dom';

function Chat() {
    const {userName}= useParams();
    console.log(userName);
    const client= useRef(null);
    const [message , setMessage]= useState([]);
    const [text, setText] = useState('');
    useEffect(() => {
      client.current= io('http://localhost:8000');
      console.log(client.current);
      
      client.current.emit('join', 'roomName');
      client.current.on('roomMessage', (msg) => {
        console.log(msg);     
        setMessage(prev => [...prev, msg]);
      });
    },[]); 
   
    const handelButton = async (e) => {
      e.preventDefault();
      console.log(client.current);
      client.current.emit('clientMessage', {room: 'roomName', message: userName+':'+text});
      setText('');
      
    }
    console.log(message);

  return (
    <div>
      <form onSubmit={handelButton}>
        <input
        type='text'
        value={text}
        onChange={(e) => {
         e.preventDefault();
         setText(e.target.value);
        }}
        />
       <button type='submit' >send</button>
       </form>
       <div>
        <ul>
              {message.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
       </div>
   </div>
  );
}

export default Chat;
