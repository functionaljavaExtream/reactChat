import React, {useState,useEffect,useLayoutEffect,useContext} from 'react';
// import { Button, Alert, Container } from 'react-bootstrap';
// import { Prev } from 'react-bootstrap/esm/PageItem';
import socketIOClient   from "socket.io-client";
// import data from '../data/data.json';
import ChatForm from './chatcompo/ChatForm';
import '../css/chat.css'
import userimage from  '../imgs/user_image_default.png'
import { idText } from 'typescript';


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
      socket.on('receive message', function(message:{id:number,message:string}) {        
          setChatList(chatList => chatList.concat(message));    
        })      
  },[])
  
  let k = 0;

  const OtherMessage = (chat:Message) => {
    return  (
      <div className="row" key={k++} id="messages" style={{ height: 90 }} >
        <img className="userImage"  src={userimage} alt=""/>
        <div className="col">
          <div id="messages">username</div>
          <div className="triangle-border left" key={chat.id}>{chat.message}</div>
        </div>
      </div>
 
    )
  }
  //temp key... but...

  const MyMessage = (chat:Message) => {
    return  (

      <div className="row" key={k++}  style={{ height: 90 , margin:0 } } >
        <div className="col">
          <div id="messagesright">username</div>
          <div className="triangle-right right" key={chat.id}>{chat.message}</div>
        </div>
        <img className="userImageright"  src={userimage} alt=""/>
      </div>
 
    )
  }


  return (
      <div>
        <div>
          {chatList.map((chat) => {
            return  (
              <MyMessage {...chat} /> 
            )
            
          })}
        </div>
        <ChatForm addTask={addTask}></ChatForm>
      </div>
  );
}


export default Chat;