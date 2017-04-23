/**
 * Created by jay on 4/23/17.
 */

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const pug = require('pug');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));


io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});