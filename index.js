const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Crear una instancia de la aplicación Express
const app = express();

// Crear el servidor HTTP y pasar la aplicación de Express
const server = http.createServer(app);

// Inicializar Socket.IO con el servidor HTTP
const io = new Server(server);

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Para servir un archivo HTML en la raíz
  });

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
});


const { WebcastPushConnection } = require('tiktok-live-connector');

// Username of someone who is currently live
let tiktokUsername = "latam_fighters1";

// Create a new wrapper object and pass the username
let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

// Connect to the chat (await can be used as well)
tiktokLiveConnection.connect().then(state => {
    console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
    if (err.message.includes('LIVE has ended')) {
        console.error('El usuario no está transmitiendo en vivo actualmente.');
    } else {
        console.error('Failed to connect', err);
    }
});



tiktokLiveConnection.on('emote', data => {
    // Aquí mostramos en la consola la información relevante de quien envía el emote y el emote en sí.
    console.log(`${data.uniqueId} envió un emote con ID: ${data.emoteId}`);
    console.log(`URL de la imagen del emote: ${data.emoteImageUrl}`);
});


tiktokLiveConnection.on('chat', data => {

        let comment = data.comment;
        let userId = data.uniqueId;

        const emojiPattern = `(\u{1F601}|\u{1F602}|\u{1F605})`; // Cualquiera de los tres emojis

        // Expresiones regulares para cada país con cualquier de los tres emojis
        const regexMex = new RegExp(`^MEX${emojiPattern}$`, 'iu');
        const regexArg = new RegExp(`^ARG${emojiPattern}$`, 'iu');
        const regexCol = new RegExp(`^COL${emojiPattern}$`, 'iu');
        const regexPer = new RegExp(`^PER${emojiPattern}$`, 'iu');

        // Verifica el comentario para cada caso específico
        if (regexMex.test(comment) || regexArg.test(comment) || regexCol.test(comment) || regexPer.test(comment)) {

            io.emit('newComment', {userId : userId, newComment: comment})
            console.log(userId + "comentó" + comment);
            
        }else if(comment.toUpperCase() === "MEX" || comment.toUpperCase() === "ARG" || comment.toUpperCase() === "COL" || comment.toUpperCase() ===  "PER"){

            //let newComment = data.comment.toUpperCase();
            
            io.emit('newComment', {userId : userId, newComment: comment})
            console.log(userId + "comentó" + comment);

        } 
        

});





/*tiktokLiveConnection.on('chat', data => {
    let comment = data.comment;
    let emojis = extractEmojis(comment);  // Función que extrae emojis del comentario

    console.log("Comentario:", comment);
    if (emojis.length > 0) {
        console.log("Emojis encontrados:", emojis);
    }
})

function extractEmojis(text) {
    // Expresión regular para capturar emojis
    const emojiRegex = /[\u{1F600}-\u{1F64F}|\u{1F300}-\u{1F5FF}|\u{1F680}-\u{1F6FF}|\u{1F700}-\u{1F77F}|\u{1F780}-\u{1F7FF}|\u{1F800}-\u{1F8FF}|\u{2600}-\u{26FF}|\u{2700}-\u{27BF}]/gu;
    return text.match(emojiRegex) || [];  // Retorna un array con los emojis encontrados
}*/



tiktokLiveConnection.on('gift', data => {

    const giftEvents = {

        5655: 'Rose',// ID de la rosa
        6064: 'GG',
        7886: 'Music play',
        7504: 'Holiday stocking',
        5576: 'Heart',

        8239: 'White rose',  
        5827: 'Ice cream cone',
        5269: 'Tiktok',
        5487: 'Finger heart',
        6756: 'Hot'
    };

    if (data.repeatEnd && giftEvents[data.giftId]) {
        let numberOfGifts = data.repeatCount;
        //io.emit(giftEvents[data.giftId], { numberOfGifts });

        io.emit(giftEvents[data.giftId], { 
            numberOfGifts, 
            uniqueId: data.uniqueId,
        });
        
        console.log(`${data.uniqueId} (userId:${data.userId}) sends ${giftEvents[data.giftId]}`);
    }
});


// Define the events that you want to handle
// In this case we listen to chat messages (comments)
/*tiktokLiveConnection.on('chat', data => {
    console.log(`${data.uniqueId} (userId:${data.userId}) writes: ${data.comment}`);
})

// And here we receive gifts sent to the streamer
tiktokLiveConnection.on('gift', data => {
    console.log(`${data.uniqueId} (userId:${data.userId}) sends ${data.giftId}`);
})*/

// ...and more events described in the documentation below

server.listen(3000, () => {
    console.log('Servidor escuchado en http://localhost:3000');
});


//netstat -ano | findstr :3000
//taskkill /PID <PID> /F
