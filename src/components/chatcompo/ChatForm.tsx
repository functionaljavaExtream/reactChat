import React, { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter chat..."/>
            <button>Submit</button>
        </form>
    );
};

export default ChatForm;