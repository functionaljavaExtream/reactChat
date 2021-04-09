import React, {useState} from 'react';
import { Button, Alert, Container } from 'react-bootstrap';
import { Prev } from 'react-bootstrap/esm/PageItem';
import io  from "socket.io-client";
import '../css/chat.css'

// type MyFormProps = {
//   onSubmit: (form: {imessage: string;}) => void
// };
// const socket = io('localhost:4002',{    
//   forceNew: true,
//   transports: ['websocket']
// });
let messageid = 0;


function Chat() {
  const [message, setMessage] = useState('');
  const [messageLi, setMessageLi] = useState([{
    id:0,
    messagetext:''    
  }])
 

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage = {
      id: ++messageid,
      messagetext: message
    }
    setMessageLi(messageLi.concat(newMessage))
    setMessage('')
  } 

  const displayMessages = messageLi.map(message=>{
    let rendered;
    console.log(message.id  + " in displayMessages");
    rendered = <p key={message.id}><strong>{message.messagetext}</strong></p>;
    return rendered;
  });
  
  return (
    <>
      <ul id="messages">
        {displayMessages}
      </ul> 
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={(e)=>{
          setMessage(e.target.value)}}/>
        <button type="submit">submit</button>
      </form>
    </>
  )
}


export default Chat;