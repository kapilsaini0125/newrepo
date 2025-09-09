import react from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Name from './components/name';
import Chat from './components/chat';
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Name/>}/>
       <Route path='/chat/:userName' element={<Chat/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
