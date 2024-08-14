import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { v4 } from 'uuid';

const ChatBox = ({ username, room, socket }) => {
    let [msg, setmsg] = useState('');
    let [messages, setmessages] = useState([]);

    const sendMessage = () => {
        if (msg !== '') {
            const messageData = {
                room: room,
                author: username,
                message: msg,
                time:
                    new Date(Date.now()).getHours() +
                    ':' +
                    new Date(Date.now()).getMinutes(),
            };

            socket.emit('message', messageData);
            setmessages((list) => [...list, messageData]);
            setmsg('');
        }
    };

    useEffect(() => {
        const receiveMessageHandler = (data) => {
            console.log(data);
            setmessages((list) => [...list, data]);
            alert('A new message arrived');
        };

        socket.on('receive_message', receiveMessageHandler);

        // Cleanup the event listener when the component unmounts
        return () => {
            socket.off('receive_message', receiveMessageHandler);
        };
    }, [socket]);

    return (
        <div className='items-center'>
            <div className='bg-gray-100 p-4 h-full'>
                <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg h-auto">
                    {/* Chat Header */}
                    <div className="bg-green-500 text-white py-2 px-4 rounded-t-lg">
                        <h1 className="text-lg font-semibold">Chat with Support</h1>
                    </div>

                    {/* Chat Messages */}
                    <div className='overflow-scroll overflow-x-hidden h-80'>
                        {messages.map((item, index) => (
                            <div className="p-4" key={index}>
                                <div className={username === item.author ? "mb-2 flex justify-end" : "flex"}>
                                    <div
                                        className={username === item.author
                                            ? "bg-green-500 text-white text-lg px-3 rounded-lg max-w-xs"
                                            : "bg-gray-200 py-3 px-3 rounded-lg text-lg max-w-xs"}
                                    >
                                        {item.message}
                                        <div>
                                            <div className={username === item.author ? "float-right" : "float-left"}>
                                                <span className="text-sm">{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-300">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full p-2 border rounded-lg ease-in-out hover:border-green-500"
                            value={msg}
                            onChange={(e) => setmsg(e.target.value)}
                        />
                        <button
                            className="bg-green-500 text-white py-2 px-4 mt-2 rounded-lg"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
