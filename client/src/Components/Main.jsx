import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { io } from 'socket.io-client'
const socket = io.connect('http://localhost:4000',{
  
})

const Main = () => {

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  let navigate = useNavigate()
  const joinRoom =() => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      navigate("/chatBox")
    }
  };
  return (
    <div className='flex-1 justify-center items-center flex-row'>

      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        {/* <button onClick={joinRoom}>Join A Room</button> */}

        <button className='p-3 bg-green-500 font-bold'
          onClick={joinRoom}
        >join now</button>
      </div>
      </div>
      )
}

      export default Main