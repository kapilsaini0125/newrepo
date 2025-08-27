import React, {useState, useEffect, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import User from './component/user';
import Socket from './component/socketMessage'

const App = () => {

  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<User/>}/>
    <Route path="/chat/:userName" element={<Socket/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App
