/**
 * Created by jay on 4/23/17.
 */

var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'oscar',
        text: 'I love you'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('Got a new message!');
    console.log(message);
});