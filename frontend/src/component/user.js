import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
   
    const [name, setName] = useState('');
    const navigate= useNavigate();
    const handelMessage = () => {
          navigate(`/chat/${name}`);
    }
  return (
    <div>
      <form >
        <div>
         <label>enter your name</label>
          <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          />
          
          <button
          onClick={(e) => {
            e.preventDefault();
            handelMessage();
          }}>send</button>
          
        </div>
      </form>
      
    </div>
  )
}

export default User
