import React, {useState,useEffect,useLayoutEffect,useContext} from 'react';
// import { Button, Alert, Container } from 'react-bootstrap';
// import { Prev } from 'react-bootstrap/esm/PageItem';
import socketIOClient   from "socket.io-client";
// import data from '../data/data.json';
import ChatForm from './chatcompo/ChatForm';
import '../css/chat.css'



interface Message { id: number, message: string }
  
const socket = socketIOClient('http://localhost:4002',{
  transports: ['websocket']
});

const Chat = ()=>{
  const [ chatList, setChatList ] = useState<Message[]>([]);

  const addTask = (userInput:string) => {
    socket.emit('send message',userInput);
  
  }

  useLayoutEffect(()=>{
    // socket.on('receive message', function({id,message}:{id:number,message:string}) {
    //   console.log('receiving message');
    //   let copy = [...chatList];
    //   copy = [...copy, { id: id, message: message }];
    //     setChatList(copy);    
    //   })
      socket.on('receive message', function(message:{id:number,message:string}) {
        console.log('receiving message');
          setChatList(chatList => chatList.concat(message));    
        })      
    },[])
  
  return (
      <div>
        {chatList.map((chat) => {
          return <p key={chat.id}>{chat.message}</p>;
        })}
        <ChatForm addTask={addTask}></ChatForm>
      </div>
  );


}


export default Chat;