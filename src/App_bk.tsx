import React, { ChangeEvent, FormEvent } from 'react';
import './App.css';
import io from "socket.io-client";

interface Message { name: string, message: string }
const App: React.FC = () => {
  const [messageList, setMessageList] = React.useState<Message[]>([]);
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState('');
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const socket = io('localhost:4002');
    socket.emit('send message', { name: name, message: value });
  };
  React.useEffect(() => {
    const socket = io('localhost:4002');
    socket.on('receive message', (message: { name: string, message: string }) => {
      setMessageList(messageList => messageList.concat(message));
    })
  }, []);

  return (
    <div className="App">
      <section className="chat-list">
        {messageList.map((item: Message, i: number) =>
          <div key={i} className="message">
            <p className="username">{item.name.toUpperCase()}</p>
            <p className="message-text">{item.message}</p>
          </div>
        )}
      </section>
      <form className="chat-form"
        onSubmit={(e: FormEvent<HTMLFormElement>) => submit(e)}>
        <div className="chat-inputs">
          <input
            type="text"
            autoComplete="off"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            value={name}
            placeholder="유저이름"
          />
          <input
            type="text"
            autoComplete="off"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            value={value}
            placeholder="메세지입력하기"
          />
        </div>
        <button type="submit">입력하기</button>
      </form>
    </div>
  );
}

export default App;