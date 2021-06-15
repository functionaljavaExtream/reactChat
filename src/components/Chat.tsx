import React, {useState,useEffect,useLayoutEffect,useContext} from 'react';
import { Container } from 'react-bootstrap';
import socketIOClient   from "socket.io-client";
import ChatForm from './chatcompo/ChatForm';
import '../css/chat.css'
import userimage from  '../imgs/user_image_default.png'


interface Message { id: number, message: string }
  
const socket = socketIOClient('http://localhost:4002',{
  transports: ['websocket']
});

const Chat:React.FunctionComponent<any> = ()=>{
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
          <div id="messages">{socket.id}</div>
          <div className="triangle-border left" key={chat.id}>{chat.message}</div>
        </div>
      </div>
 
    )
  }
  //temp key... but...

  const MyMessage = (chat:Message) => {
    return  (

      <div className="row" key={k++}  style={{ height: 90 , margin:0} } >
        {/* <div className="col " id="messagesright">{socket.id}</div>
        <div className="col "></div>
        <img className="col " id="userImageright"  src={userimage} alt=""/>
        <div className="col triangle-right right" key={chat.id}>{chat.message}</div> */}
        <div className="col test">
          <div className="row row-cols-2">
          </div>
        </div>

        <div className="col test">
          <div className="row row-cols-2">
            <div className="col test"></div>
            <div className="col test" id="messagesright">{socket.id}</div>
            <div className="col test"><div className="triangle-right right" key={chat.id}>{chat.message}</div></div>
            
            <div className="col test"><img  id="userImageright"  src={userimage} alt=""/></div>

            {/* <div className="col " id="messagesright">{socket.id}</div>
            <div className="col triangle-right right" key={chat.id}>{chat.message}</div>
            <img  id="userImageright"  src={userimage} alt=""/> */}
          </div>
        </div>
        {/* <div className="col test">userimage</div>
        <div className="col test">chatmessage</div> */}

      </div>
 
    )
  }


  return (
    <Container>
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
    </Container>
  );
}


export default Chat;