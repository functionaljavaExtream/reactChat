import React, {useState} from 'react';
import { Button, Alert, Container } from 'react-bootstrap';
import io from "socket.io-client";
import '../css/chat.css'

type MyFormProps = {
  onSubmit: (form: {imessage: string;}) => void
};

function Chat() {
  const [form, setForm] = useState({
    imessage: '',
  })

  const [chatMessage, setchatMessage] = useState({
    messagesLi : [{text:''}]
  })


  const {imessage} = form;
  const {messagesLi} = chatMessage;

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm({
      ...form,
     [name]: value,
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({
      imessage: '',
    })
    const newMessage = {
      text: form.imessage
    };
    setchatMessage({
      messagesLi: messagesLi.concat(newMessage)
    })
  }

  return (
    <>
      <ul id="messages">
      {messagesLi.map(message => (
            <li >{message.text}</li>
          ))}
      </ul> 
      <form onSubmit={handleSubmit}>
        <input name="imessage" value={imessage} onChange={onChange} />
        <button type="submit">
          등록
        </button>
      </form>
    </>
  )
}







// const Chat: React.FC = () =>{

  
//   return (
//     <div className="Chat">
//       <Container>
//         <body>
//           <ul id="messages">
//             <li id="messagesLi"></li>
//           </ul>
//            <form id="form">
//             <input id="input" autoComplete="off" value={} onChange={} /><button type="submit">Send</button>
//           </form>          
//         </body>
//       </Container>
//     </div>
//   );
// }

export default Chat;