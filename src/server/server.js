const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const port = 4002;
const app = express();

const server = http.createServer(app);
// socketio 생성후 서버 인스턴스 사용
const io = socketIO(server, {
	cors: {
		origin: "http://localhost:4002",
		methods: ["GET", "POST"],
		// allowedHeaders: ["http://localhost:3000/chat"],
		credentials: true
	  }
});

let messagetextArray= [];

// socketio 문법
io.on('connection', socket => {
	console.log('user connected');


    socket.on("connect", () => {
		console.log(so.connected);
	});

	socket.on('send message', (msg)=>{
		console.log(msg)
		const message = {
			message: msg,
			id: messagetextArray.length+1
		}
		messagetextArray.push(message);
		io.emit('receive message', message);
	});

    socket.on('disconnect', socket => {
		console.log('user disconnected: ');
	});
});

server.listen(port, () => 
                    console.log(`Listening on port ${port}`)
)


