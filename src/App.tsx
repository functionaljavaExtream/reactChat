import React ,{useState,useLayoutEffect, useEffect} from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import ChatForm from './components/chatcompo/ChatForm';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './css/home.css'
import io from "socket.io-client";
import { isConstructorDeclaration } from 'typescript';

interface Room { id:number, name: string }
let roomsid = 0;
const TextInput = () => { 
  const [rooms, setRooms] = useState<Room[]>([]);
  const [textinput, setTextInput] = useState('');

  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setTextInput(e.target.value)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newRoom:Room = {
      id: ++roomsid,
      name: textinput
    }
    setRooms(rooms =>rooms.concat(newRoom))
    setTextInput('')
  }

  const deleteList = (id:number) => { 
    const roomname = rooms.filter(room => room.id === id)[0].name;
    if(window.confirm(`delete this '${roomname}' server?!!!!!!!!!!!!!`)) {
      setRooms(rooms => rooms.filter(room => room.id !== id))
    }
  }
  return(
    <>
    <form id="form" onSubmit={handleSubmit}>
      <input value={textinput} id="input" type="text" onChange={handleChange} placeholder="Enter chat..."/>
      <button type="submit">Submit</button>
    </form>
    <div className="row">
      {rooms.map(room => {
        return(
          <div className="wrapper" key={room.id}>
            <div className="home-head-footer">
              <div className="link" onClick={()=>alert(`welcome to '${room.name}' server`)}>
                <div className="row-2 room-select" >
                  {room.name}
                </div>
              </div>

            </div>
            <div className="closebutton" onClick={()=>deleteList(room.id)}>
              X
            </div>

          </div>
        )
      })}
    </div>
    </>   
  )
}

function App() {
  return(
      <>
        <Header></Header>
        <TextInput></TextInput>
      </>
  )

}

export default App;