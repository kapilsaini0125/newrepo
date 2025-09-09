import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Name = () => {
  const navigate= useNavigate();
  const [name, setName]= useState('');
  const handelName = () => {
        navigate(`/chat/${name}`);
  }

  return (
    <div>
      <form onSubmit= {handelName}>
       <input
       type='text'
       value={name}
       onChange={(e) => {
        setName(e.target.value);
       }}
       />
       <button onClick= 'submit'>enter</button>
      </form>
    </div>
  )
}

export default Name
