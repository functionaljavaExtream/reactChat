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


interface Room { id: number, name: string }

const Home:React.FC<any> = ({selectedRoom, setSelectedRoom, rooms, setRooms,userInput,setUserInput}:{selectedRoom:any,setSelectedRoom:any,rooms:Room[],setRooms:any,userInput:any,setUserInput:any})=> {

  
  // const handleSelectedRoom= ()=>{

  //   const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
  //       setUserInput(e.currentTarget.value)
  //   }

  //   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  //       e.preventDefault();
  //       setSelectedRoom(userInput)
  //       setUserInput("");
  //   }
  //   return (
  //       <form id="form" onSubmit={handleSubmit}>
  //           <input value={userInput} id="input" type="text" onChange={handleChange} placeholder="enter servername.."/>
  //           <button>Submit</button>
  //       </form>
  //   );
  // }



  const ServerHandler =({selectedRoom,rooms,setRooms}:{selectedRoom:any,rooms:any[],setRooms:any}) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSelectedRoom(userInput)
        setUserInput("");
    }

    if(rooms.length !== 0) {
      return (
        <form id="form" onSubmit={handleSubmit}>
            <input value={userInput} id="input" type="text" onChange={handleChange} placeholder="enter servername.."/>
            <button>Submit</button>
        </form>
      )
    }else {
      return (
        <>
        <div>
        +
        </div>
        <div>
        create server
        </div>
        </>
      )
    }
  }

    return(
      <div className="Home home">
      <Container>
          <div className="home-head">
            Select the room
          </div>
          <div className="row">
          {rooms.map(room => {
            return(
                <div className="wrapper">
                    <div className="home-head-footer">
                        <div className="link">
                          <div className="row-2 room-select">
                            {room.name}
                          </div>
                        </div>
                    </div>
                  </div>
            )})
          }
          </div>
          
          <div className="wrapper">
            <div className="home-head-footer">
              <div className="link">
                <div className="row-2 room-select">
                  <ServerHandler 
                    selectedRoom = {selectedRoom} 
                    rooms = {rooms}
                    setRooms = {setRooms}
                    />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </div> 
    )

  // return(
  //       <div className="Home home">
  //     <Container>
  //         <div className="home-head">
  //           Select the room
  //         </div>
  //         <div className="wrapper">
  //         <div className="home-head-footer">
  //           <div className="link">
  //             <div className="room-select" onClick={handleSelectedRoom}>
  //               {selectedRoom}
  //             </div>
  //           </div>
  //         </div>
  //         </div>
  //     </Container>
  //   </div>   
  // )
}

const PageSwitch:React.FC =() => { 
  const [selectedRoom, setSelectedRoom] = useState<any>('');
  const [rooms, setRooms] = useState<Room[]>([]);
  const [ userInput, setUserInput ] = useState('');
  return (
    <Home
      selectedRoom={selectedRoom}
      setSelectedRoom={setSelectedRoom}
      rooms = {rooms}
      setRooms = {setRooms}
      userInput = {userInput}
      setUserInput = {setUserInput}
    />
  )

}


function App() {
  return(
      <>
        <Header></Header>
          {/* <Route path='/chat' render={() => <Chat onSubmit={onSubmit} />}/> */}
          <PageSwitch>
          </PageSwitch>

      </>
  )

}

export default App;