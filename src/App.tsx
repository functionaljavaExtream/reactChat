import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Chat from './components/Chat';
import Header from './components/Header';
import io from "socket.io-client";


// const App: React.FC = () => {


// }
const onSubmit = (form : {imessage: string;}) => {
  console.log(form)
}

function App() {
  return(
    <>
      <Router>
      <Header></Header>
        <Switch>
          {/* <Route path='/chat' component={Chat}/> */}
          {/* <Route path='/chat' render={() => <Chat onSubmit={onSubmit} />}/> */}
          <Route path='/chat' render={() => <Chat />}/>
          <Route path='/' component={Home} />

        </Switch>
      </Router>    
    </>
  )

}

export default App;