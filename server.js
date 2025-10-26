
'use strict';

const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const io = socketIO(server);
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


const FIELD_WIDTH = 320, FIELD_HEIGHT = 480;
class Player{
    constructor(obj={}){
        this.socketId = obj.socketId;
        this.nickname = obj.nickname;
    }
}




let players = {};
let ninzuu1 = {};
let newArray01;
let rensoua;
let chata;
let kekkaa;
let playerss = [];
let playerssid = [];
let rensoulist = [];
let chatlist = [];
let kekkalist = [];
let roundosuu =1;

io.on('connection', function(socket) {
    let player = null;
    socket.on('game-start', (config) => {
        player = new Player({
            socketId: socket.id,
            nickname: config.nickname,
        });
        players[player.id] = player;
        if (playerss.includes(player.nickname) == false){
        playerss.push(player.nickname);
        io.sockets.emit('server_to_client', playerss);
        }
        if (playerssid.includes(player.socketId) == false){
        playerssid.push(player.socketId);
        }});
    
    socket.on('disconnect', () => {
        if(!player){return;}
        playerss.splice(playerss.indexOf(player.nickname), 1);
        playerssid.splice(playerssid.indexOf(player.socketId), 1);
        delete players[player.id];
        player = null;
        io.sockets.emit('server_to_client', playerss);
        
    });

    socket.on('rensou-a', function(rensou,nickname) {
        
        rensoua = ({
            nickname: rensou.na , 
            rensou: rensou.tango
        });
        rensoulist.push(rensoua.nickname + "　:　" + rensoua.rensou);
        io.sockets.emit('rensou-a', rensoulist);
     });
     
     socket.on('chata', function(chatnaiyou,nickname) {
        chata = ({
            nickname: chatnaiyou.na , 
            chatnaiyou: chatnaiyou.tango
        });
        chatlist.push(chata.nickname + "　:　" + chata.chatnaiyou);
        io.sockets.emit('chata', chatlist);
     });
     socket.on('kekkaa', function(answer,nickname) {
        kekkaa = ({
            nickname: answer.na , 
            answer: answer.tango
        });
        kekkalist.push(kekkaa.nickname + "の予想：" + kekkaa.answer);
        io.sockets.emit('kekkaa', kekkalist);
     });

        socket.on('odaiStart', function(ninzuu) {
        var id = socket.id;
         ninzuu1 = ({
            ninzuu: ninzuu.ninzuu,
        });
        kekkalist = [];
        io.to(id).emit('odaiStart', ninzuu1);
        socket.broadcast.emit('odaiStart_br', ninzuu1);
        });
     
     
     socket.on('newArray0', function(newArray) {
         newArray01 = ({
             newArray : newArray.newArray
         });
            var id = socket.id;
            io.to(id).emit('newArray0', newArray01);
            socket.broadcast.emit('newArray0_br', newArray01);
     });
     
     socket.on('resetButton', function(resetButton) {
        rensoulist = [];
        kekkalist = [];
        roundosuu = roundosuu + 1;
        io.sockets.emit('resetButton', roundosuu);
     });
     
     socket.on('newgame', function(newgame) {
        rensoulist = [];
        kekkalist = [];
        roundosuu = 1;
        io.sockets.emit('newgame', rensoulist);
     });
     
        socket.on('player001', function(player1) {
        io.to(playerssid[0]).emit('player001', player1);
        player1 = "";
        io.to(playerssid[1]).emit('player001', player1);
        io.to(playerssid[2]).emit('player001', player1);
     });
     
     socket.on('player002', function(player2) {
        io.to(playerssid[0]).emit('player002', player2);
        player2 = "";
        io.to(playerssid[1]).emit('player002', player2);
        io.to(playerssid[2]).emit('player002', player2);
     });
     socket.on('player003', function(player3) {
        io.to(playerssid[1]).emit('player003', player3);
        player3 = "";
        io.to(playerssid[0]).emit('player003', player3);
        io.to(playerssid[2]).emit('player003', player3);
     });     
     socket.on('player004', function(player4) {
        io.to(playerssid[1]).emit('player004', player4);
        player4 = "";
        io.to(playerssid[0]).emit('player004', player4);
        io.to(playerssid[2]).emit('player004', player4);
     });          
     socket.on('player005', function(player5) {
        io.to(playerssid[2]).emit('player005', player5);
        player5 = "";
        io.to(playerssid[0]).emit('player005', player5);
        io.to(playerssid[1]).emit('player005', player5);
     });
     socket.on('player006', function(player6) {
        io.to(playerssid[2]).emit('player006', player6);
        player6 = "";
        io.to(playerssid[0]).emit('player006', player6);
        io.to(playerssid[1]).emit('player006', player6);
     });
     socket.on('player007', function(newArray2) {
        io.sockets.emit('player007', newArray2);
      });     
   
    socket.on('player001_4', function(player1_4) {
        io.to(playerssid[0]).emit('player001_4', player1_4);
        player1_4 = "";
        io.to(playerssid[1]).emit('player001_4', player1_4);
        io.to(playerssid[2]).emit('player001_4', player1_4);
        io.to(playerssid[3]).emit('player001_4', player1_4);
     });
     
     socket.on('player002_4', function(player2_4) {
        io.to(playerssid[1]).emit('player002_4', player2_4);
        player2_4 = "";
        io.to(playerssid[0]).emit('player002_4', player2_4);
        io.to(playerssid[2]).emit('player002_4', player2_4);
        io.to(playerssid[3]).emit('player002_4', player2_4);
     });
     socket.on('player003_4', function(player3_4) {
        io.to(playerssid[2]).emit('player003_4', player3_4);
        player3_4 = "";
        io.to(playerssid[0]).emit('player003_4', player3_4);
        io.to(playerssid[1]).emit('player003_4', player3_4);
        io.to(playerssid[3]).emit('player003_4', player3_4);
     });     
     socket.on('player004_4', function(player4_4) {
        io.to(playerssid[3]).emit('player004_4', player4_4);
        player4_4 = "";
        io.to(playerssid[0]).emit('player004_4', player4_4);
        io.to(playerssid[1]).emit('player004_4', player4_4);
        io.to(playerssid[2]).emit('player004_4', player4_4);
     });
     
     socket.on('player001_5', function(player1_5) {
        io.to(playerssid[0]).emit('player001_5', player1_5);
        player1_5 = "";
        io.to(playerssid[1]).emit('player001_5', player1_5);
        io.to(playerssid[2]).emit('player001_5', player1_5);
        io.to(playerssid[3]).emit('player001_5', player1_5);
        io.to(playerssid[4]).emit('player001_5', player1_5);
     });
     
     socket.on('player002_5', function(player2_5) {
        io.to(playerssid[1]).emit('player002_5', player2_5);
        player2_5 = "";
        io.to(playerssid[0]).emit('player002_5', player2_5);
        io.to(playerssid[2]).emit('player002_5', player2_5);
        io.to(playerssid[3]).emit('player002_5', player2_5);
        io.to(playerssid[4]).emit('player002_5', player2_5);
     });
     socket.on('player003_5', function(player3_5) {
        io.to(playerssid[2]).emit('player003_5', player3_5);
        player3_5 = "";
        io.to(playerssid[0]).emit('player003_5', player3_5);
        io.to(playerssid[1]).emit('player003_5', player3_5);
        io.to(playerssid[3]).emit('player003_5', player3_5);
        io.to(playerssid[4]).emit('player003_5', player3_5);
     });     
     socket.on('player004_5', function(player4_5) {
        io.to(playerssid[3]).emit('player004_5', player4_5);
        player4_5 = "";
        io.to(playerssid[0]).emit('player004_5', player4_5);
        io.to(playerssid[1]).emit('player004_5', player4_5);
        io.to(playerssid[2]).emit('player004_5', player4_5);
        io.to(playerssid[4]).emit('player004_5', player4_5);
     });
     socket.on('player005_5', function(player5_5) {
        io.to(playerssid[4]).emit('player005_5', player5_5);
        player5_5 = "";
        io.to(playerssid[0]).emit('player005_5', player5_5);
        io.to(playerssid[1]).emit('player005_5', player5_5);
        io.to(playerssid[2]).emit('player005_5', player5_5);
        io.to(playerssid[3]).emit('player005_5', player5_5);
     });
     
     socket.on('player001_6', function(player1_6) {
        io.to(playerssid[0]).emit('player001_6', player1_6);
        player1_6 = "";
        io.to(playerssid[1]).emit('player001_6', player1_6);
        io.to(playerssid[2]).emit('player001_6', player1_6);
        io.to(playerssid[3]).emit('player001_6', player1_6);
        io.to(playerssid[4]).emit('player001_6', player1_6);
        io.to(playerssid[5]).emit('player001_6', player1_6);
     });
     
     socket.on('player002_6', function(player2_6) {
        io.to(playerssid[1]).emit('player002_6', player2_6);
        player2_6 = "";
        io.to(playerssid[0]).emit('player002_6', player2_6);
        io.to(playerssid[2]).emit('player002_6', player2_6);
        io.to(playerssid[3]).emit('player002_6', player2_6);
        io.to(playerssid[4]).emit('player002_6', player2_6);
        io.to(playerssid[5]).emit('player002_6', player2_6);
     });
     socket.on('player003_6', function(player3_6) {
        io.to(playerssid[2]).emit('player003_6', player3_6);
        player3_6 = "";
        io.to(playerssid[0]).emit('player003_6', player3_6);
        io.to(playerssid[1]).emit('player003_6', player3_6);
        io.to(playerssid[3]).emit('player003_6', player3_6);
        io.to(playerssid[4]).emit('player003_6', player3_6);
        io.to(playerssid[5]).emit('player003_6', player3_6);
     });     
     socket.on('player004_6', function(player4_6) {
        io.to(playerssid[3]).emit('player004_6', player4_6);
        player4_6 = "";
        io.to(playerssid[0]).emit('player004_6', player4_6);
        io.to(playerssid[1]).emit('player004_6', player4_6);
        io.to(playerssid[2]).emit('player004_6', player4_6);
        io.to(playerssid[4]).emit('player004_6', player4_6);
        io.to(playerssid[5]).emit('player004_6', player4_6);
     });
     socket.on('player005_6', function(player5_6) {
        io.to(playerssid[4]).emit('player005_6', player5_6);
        player5_6 = "";
        io.to(playerssid[0]).emit('player005_6', player5_6);
        io.to(playerssid[1]).emit('player005_6', player5_6);
        io.to(playerssid[2]).emit('player005_6', player5_6);
        io.to(playerssid[3]).emit('player005_6', player5_6);
        io.to(playerssid[5]).emit('player005_6', player5_6);
     });
      socket.on('player006_6', function(player6_6) {
        io.to(playerssid[4]).emit('player006_6', player6_6);
        player6_6 = "";
        io.to(playerssid[0]).emit('player006_6', player6_6);
        io.to(playerssid[1]).emit('player006_6', player6_6);
        io.to(playerssid[2]).emit('player006_6', player6_6);
        io.to(playerssid[3]).emit('player006_6', player6_6);
        io.to(playerssid[5]).emit('player006_6', player6_6);
     });
     
     
});
         

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/static/index.html'));
});



