const http = require('http');
const express = require('express');
const cors = require('cors');
const socketIO = require('socket.io');
const port = 4002;
const app = express();
const server = http.createServer(app);
// socketio 생성후 서버 인스턴스 사용
const io = socketIO(server);



// socketio 문법
io.on('connection', socket => {
    console.log('User connected');
    socket.on("connect", () => {
        console.log(socket.connected); // true
      });
	socket.on('disconnect', () => {
		console.log('User disconnect');
	});
	socket.on('send message', (item) => {
		const msg = item.name + ' : ' + item.message;
		console.log(msg);
		io.emit('receive message', {name:item.name, message:item.message});
	});
    socket.on('disconnect', function () {
		console.log('user disconnected: ', socket.id);
	});
});

server.listen(port, () => console.log(`Listening on port ${port}`))


