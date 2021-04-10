import React, { useState } from 'react';
import '../../css/chat.css'


const ChatForm = ({ addTask }:{addTask:any}) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form id="form" onSubmit={handleSubmit}>
            <input value={userInput} id="input" type="text" onChange={handleChange} placeholder="Enter chat..."/>
            <button>Submit</button>
        </form>
    );
};

export default ChatForm;