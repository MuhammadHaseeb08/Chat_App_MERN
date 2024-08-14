// import logo from './logo.svg';
import './App.css';
import Logo from './Components/Logo';
import ChatBox from './Components/ChatBox';
import { Routes,Route, useLocation,BrowserRouter } from 'react-router-dom';
import Main from './Components/Main';
import { useState } from 'react';
import { io } from 'socket.io-client'
const socket = io.connect('http://localhost:4000',{
  
})
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom =() => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      // navigate("/chatBox")
      setShowChat(true)
    }
  };
  return (
   
    // <Routes>
    //   <Route element={<Main/>} path='/'/>
    //   <Route element={<ChatBox/>} path='/chatBox'/>
    // </Routes>

    <div className='' >
    {!showChat ? (

      <div className="flex items-center justify-center h-screen ">

<div className="flex justify-center items-center flex-col">
        <h3 className='text-3xl font-bold text-green-500'>Join A Chat</h3>

        <div className=' flex-col flex m-4 p-5'>
        <input
          type="text"
          placeholder="Enetr your name"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
           className='border-green-500 border-2  px-5 m-3 text-green-500 rounded-lg h-10'
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
          className='border-green-500 border-2 px-5 m-3 text-green-500 rounded-lg h-10'
        />

        </div>
       
        <button onClick={joinRoom} className='bg-green-500 p-5 m-2 font-semibold rounded-lg text-white'>Join A Room</button>
      </div>
      </div>
     
    ) : (
      <ChatBox socket={socket} username={username} room={room} />
    )}
  </div>
);

   
  
}

export default App;
