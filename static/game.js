'use strict';


const socket = io.connect();

function gameStart(){
    socket.emit('game-start', {nickname: $("#nickname").val() });
    $("#start-screen").hide();
}
$("#start-button").on('click', gameStart);

function rensou(){
    socket.emit('rensou-a', {na: $("#nickname").val(),tango: $("#rensou").val()});
    document.getElementById('rensou').value = "";
    }
    socket.on('rensou-a', function(rensoulist){
       
       let j = "";
       for(let i = 0; i < rensoulist.length; i++){
        
        j = j + (rensoulist[i] + "\n");
        
       }
       document.getElementById('minnnanorensou').textContent =(j+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
       document.getElementById('yosoumemo').textContent =(j);
       });

$("#rensoubutton").on('click', rensou);

function chat(){
    socket.emit('chata', {na: $("#nickname").val(),tango: $("#chatnaiyou").val()});
    document.getElementById('chatnaiyou').value = "";
    }
    socket.on('chata', function(chatlist){
       
       let j = "";
       for(let i = 0; i < chatlist.length; i++){
        j = j + (chatlist[i] + "\n");
       }
       document.getElementById('chat').textContent =(j+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
       });
       
$("#chatsend").on('click', chat);

function kekkahyouji(){
    socket.emit('kekkaa', {na: $("#nickname").val(),tango: $("#answer").val()});
    document.getElementById('answer').value = "";
    }
    socket.on('kekkaa', function(kekkalist){
     
       let j = "";
       for(let i = 0; i < kekkalist.length; i++){

        j = j + (kekkalist[i] + "\n");
        
       }
       document.getElementById('kekka2').textContent =(j+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
       });
       
function kekkabutton(){
    document.getElementById('kekka').style.display = 'inline';
    }
    
$("#kekkabutton").on('click', kekkabutton);
        
$("#answerbutton").on('click', kekkahyouji);


socket.on("server_to_client", function(playerss){
      let j = "";
       for(let i = 0; i < playerss.length; i++){
        j = j + (playerss[i] + "\n");}
       document.getElementById('playeritiran').textContent =(j);
       });


function buttonClick(){
      console.log('選択されているのは ' + ninzuuSelect.value + ' です');
    }

    let ninzuuSelect = document.getElementById('ninzuu');
    ninzuuSelect.options[0].selected = true;

$("#checkButton").on('click', buttonClick);


    function resetButton(){
     socket.emit('resetButton', {resetButton: $("#resetButton").val()});}
     socket.on('resetButton', function(roundosuu){
    document.getElementById('roundosuu').textContent = roundosuu + "/5ラウンド目";
    document.getElementById('answer').options[0].selected = true;
    document.getElementById('minnnanorensou').textContent =("「あなたのお題」から連想語を送ってね！");
    document.getElementById('odai01').textContent = "お題";
    document.getElementById('odai02').textContent = "お題";
    document.getElementById('odai03').textContent = "お題";
    document.getElementById('odai04').textContent = "お題";
    document.getElementById('odai05').textContent = "お題";
    document.getElementById('odai06').textContent = "お題";
    document.getElementById('odai07').textContent = "お題";
    document.getElementById('odai08').textContent = "お題";
    document.getElementById('odai09').textContent = "お題";
    document.getElementById('odai10').textContent = "お題";
    document.getElementById('odai11').textContent = "お題";
    document.getElementById('odai12').textContent = "お題";
    document.getElementById('odai13').textContent = "お題";
    document.getElementById('anatanoodai').style.display = 'none';
    document.getElementById('rensoutango').style.display = 'none';
    document.getElementById('rensou').style.display = 'none';
    document.getElementById('rensoubutton').style.display = 'none';
    document.getElementById('span3').textContent = "プレイ人数を選んで「お題決め」ボタンを押してね！";
    document.getElementById('yosoumemo').textContent = "";
    document.getElementById('yosou1').checked = false;
    document.getElementById('yosou2').checked = false;
    document.getElementById('yosou3').checked = false;
    document.getElementById('yosou4').checked = false;
    document.getElementById('yosou5').checked = false;
    document.getElementById('yosou6').checked = false;
    document.getElementById('yosou7').checked = false;
    document.getElementById('yosou8').checked = false;
    document.getElementById('yosou9').checked = false;
    document.getElementById('yosou10').checked = false;
    document.getElementById('yosou11').checked = false;
    document.getElementById('yosou12').checked = false;
    document.getElementById('yosou13').checked = false;
    document.getElementById('kekka').style.display = 'none';
    document.getElementById('kekka2').textContent  = "";
     });
        
   
$("#resetButton").on('click', resetButton);

function resetButton21(){
     socket.emit('newgame', {resetButton: $("#resetButton2").val()});}
     socket.on('newgame', function(rensoulist){
    document.getElementById('roundosuu').textContent = "1/5ラウンド目";
    document.getElementById('answer').options[0].selected = true;
    document.getElementById('minnnanorensou').textContent =("「あなたのお題」から連想語を送ってね！");
    document.getElementById('odai01').textContent = "お題";
    document.getElementById('odai02').textContent = "お題";
    document.getElementById('odai03').textContent = "お題";
    document.getElementById('odai04').textContent = "お題";
    document.getElementById('odai05').textContent = "お題";
    document.getElementById('odai06').textContent = "お題";
    document.getElementById('odai07').textContent = "お題";
    document.getElementById('odai08').textContent = "お題";
    document.getElementById('odai09').textContent = "お題";
    document.getElementById('odai10').textContent = "お題";
    document.getElementById('odai11').textContent = "お題";
    document.getElementById('odai12').textContent = "お題";
    document.getElementById('odai13').textContent = "お題";
    document.getElementById('anatanoodai').style.display = 'none';
    document.getElementById('rensoutango').style.display = 'none';
    document.getElementById('rensou').style.display = 'none';
    document.getElementById('rensoubutton').style.display = 'none';
    document.getElementById('span3').textContent = "プレイ人数を選んで「お題決め」ボタンを押してね！";
    document.getElementById('yosoumemo').textContent = "";
    document.getElementById('yosou1').checked = false;
    document.getElementById('yosou2').checked = false;
    document.getElementById('yosou3').checked = false;
    document.getElementById('yosou4').checked = false;
    document.getElementById('yosou5').checked = false;
    document.getElementById('yosou6').checked = false;
    document.getElementById('yosou7').checked = false;
    document.getElementById('yosou8').checked = false;
    document.getElementById('yosou9').checked = false;
    document.getElementById('yosou10').checked = false;
    document.getElementById('yosou11').checked = false;
    document.getElementById('yosou12').checked = false;
    document.getElementById('yosou13').checked = false;
    document.getElementById('kekka').style.display = 'none';
    document.getElementById('kekka2').textContent  = "";
        
         });
        
        
$("#resetButton2").on('click', resetButton21);


     let array = ["あいす",
"あし",
"あめ",
"いえ",
"いす",
"うさぎ",
"えいご",
"えんぴつ",
"おうかん",
"おとな",
"おばけ",
"おやゆび",
"おんな",
"おんぷ",
"かいだん",
"かえる",
"かお",
"かたつむり",
"かばん",
"かれーらいす",
"かれんだー",
"ぎゅうにゅう",
"きりん",
"くさ",
"くじら",
"くちびる",
"くび",
"くもり",
"けーき",
"ごはん",
"さかな",
"さくら",
"さっかー",
"さんかくけい",
"しんごう",
"すず",
"ずぼん",
"せんぷうき",
"そうじき",
"そふとくりーむ",
"たいよう",
"ちゅーりっぷ",
"ちょう",
"つめ",
"てれび",
"でんき",
"でんしゃ",
"でんわ",
"どあ",
"といれ",
"とかげ",
"とけい",
"ながぐつ",
"なっとう",
"なみだ",
"にほん",
"にわとり",
"にんじん",
"ねぎ",
"ねこ",
"ねっこ",
"のこぎり",
"はさみ",
"はしご",
"ぱそこん",
"ばつ",
"ばった",
"ばっと",
"はな",
"ばなな",
"はれ",
"ぴあの",
"びーる",
"ひこうき",
"びん",
"ふくろ",
"ふとん",
"ふね",
"ふんどし",
"ぼーる",
"ぽすと",
"ほね",
"ほん",
"まくら",
"みかづき",
"みっきー",
"みみず",
"むし",
"めがね",
"めだまやき",
"めろん",
"もり",
"ゆきだるま",
"よんこま",
"らいおん",
"らくだ",
"りぼん",
"りんご",
"ろけっと",
"わに" ];

function buttonClick3(){
    array = [];
    array.push("あいす",
"あし",
"あめ",
"いえ",
"いす",
"うさぎ",
"えいご",
"えんぴつ",
"おうかん",
"おとな",
"おばけ",
"おやゆび",
"おんな",
"おんぷ",
"かいだん",
"かえる",
"かお",
"かたつむり",
"かばん",
"かれーらいす",
"かれんだー",
"ぎゅうにゅう",
"きりん",
"くさ",
"くじら",
"くちびる",
"くび",
"くもり",
"けーき",
"ごはん",
"さかな",
"さくら",
"さっかー",
"さんかくけい",
"しんごう",
"すず",
"ずぼん",
"せんぷうき",
"そうじき",
"そふとくりーむ",
"たいよう",
"ちゅーりっぷ",
"ちょう",
"つめ",
"てれび",
"でんき",
"でんしゃ",
"でんわ",
"どあ",
"といれ",
"とかげ",
"とけい",
"ながぐつ",
"なっとう",
"なみだ",
"にほん",
"にわとり",
"にんじん",
"ねぎ",
"ねこ",
"ねっこ",
"のこぎり",
"はさみ",
"はしご",
"ぱそこん",
"ばつ",
"ばった",
"ばっと",
"はな",
"ばなな",
"はれ",
"ぴあの",
"びーる",
"ひこうき",
"びん",
"ふくろ",
"ふとん",
"ふね",
"ふんどし",
"ぼーる",
"ぽすと",
"ほね",
"ほん",
"まくら",
"みかづき",
"みっきー",
"みみず",
"むし",
"めがね",
"めだまやき",
"めろん",
"もり",
"ゆきだるま",
"よんこま",
"らいおん",
"らくだ",
"りぼん",
"りんご",
"ろけっと",
"わに");
    }

    $("#odaiButton2").on('click', buttonClick3);




//お題決め
function odaiStart(){
    document.getElementById('kekka').style.display = 'none';
    socket.emit('odaiStart', {ninzuu: $("#ninzuu").val() });
    }
    
let ninzuu1 = 0; 

socket.on('odaiStart', function(ninzuu1){
    document.getElementById('kekka2').textContent  = "";
    
    ninzuu1 = ninzuu1.ninzuu;
    document.getElementById('ninzuu').options[ninzuu1-3].selected = true;
    if(ninzuu1 == 3){
        //お題箱元に戻す　
        document.getElementById('td10').style.display = 'table-cell';
        document.getElementById('td11').style.display = 'table-cell';
        document.getElementById('td12').style.display = 'table-cell';
        document.getElementById('td13').style.display = 'table-cell';
        document.getElementById('td14').style.display = 'table-cell';
        document.getElementById('td15').style.display = 'table-cell';
        document.getElementById('suuji12').style.display = 'inline';
        document.getElementById('odai12').style.display = 'inline';
        
        //予想とシークレット元に戻す
        document.getElementById('yosou10').style.display = 'inline-block';
        document.getElementById('yosou210').style.display = 'inline';
        document.getElementById('yosou11').style.display = 'inline-block';
        document.getElementById('yosou211').style.display = 'inline';
        document.getElementById('yosou12').style.display = 'inline-block';
        document.getElementById('yosou212').style.display = 'inline';
        document.getElementById('yosou13').style.display = 'inline-block';
        document.getElementById('yosou213').style.display = 'inline';
        document.getElementById('answer10').style.display = 'block';
        document.getElementById('answer11').style.display = 'block';
        document.getElementById('answer12').style.display = 'block';
        document.getElementById('answer13').style.display = 'block';}
        if(ninzuu1 == 4){
        document.getElementById('td10').style.display = 'none';
        document.getElementById('td11').style.display = 'none';
        document.getElementById('td12').style.display = 'none';
        document.getElementById('td13').style.display = 'none';
        document.getElementById('td14').style.display = 'none';
        document.getElementById('td15').style.display = 'none';
        //予想とシークレットを9までに
        document.getElementById('yosou10').style.display = 'none';
        document.getElementById('yosou210').style.display = 'none';
        document.getElementById('yosou11').style.display = 'none';
        document.getElementById('yosou211').style.display = 'none';
        document.getElementById('yosou12').style.display = 'none';
        document.getElementById('yosou212').style.display = 'none';
        document.getElementById('yosou13').style.display = 'none';
        document.getElementById('yosou213').style.display = 'none';
        document.getElementById('answer10').style.display = 'none';
        document.getElementById('answer11').style.display = 'none';
        document.getElementById('answer12').style.display = 'none';
        document.getElementById('answer13').style.display = 'none';}
         if(ninzuu1 == 5){
        document.getElementById('suuji12').style.display = 'none';
        document.getElementById('odai12').style.display = 'none';
        document.getElementById('td13').style.display = 'none';
        document.getElementById('td14').style.display = 'none';
        document.getElementById('td15').style.display = 'none';
        //予想とシークレットを11までに
        document.getElementById('yosou12').style.display = 'none';
        document.getElementById('yosou212').style.display = 'none';
        document.getElementById('yosou13').style.display = 'none';
        document.getElementById('yosou213').style.display = 'none';
        document.getElementById('answer12').style.display = 'none';
        document.getElementById('answer13').style.display = 'none';   
        //お題箱元に戻す　
        document.getElementById('td10').style.display = 'table-cell';
        document.getElementById('td11').style.display = 'table-cell';
        document.getElementById('td12').style.display = 'table-cell';
        //予想とシークレット元に戻す
        document.getElementById('yosou10').style.display = 'inline-block';
        document.getElementById('yosou210').style.display = 'inline';
        document.getElementById('yosou11').style.display = 'inline-block';
        document.getElementById('yosou211').style.display = 'inline';
        document.getElementById('answer10').style.display = 'block';
        document.getElementById('answer11').style.display = 'block';}
        if(ninzuu1 == 6){
        //お題箱元に戻す　
        document.getElementById('td10').style.display = 'table-cell';
        document.getElementById('td11').style.display = 'table-cell';
        document.getElementById('td12').style.display = 'table-cell';
        document.getElementById('td13').style.display = 'table-cell';
        document.getElementById('td14').style.display = 'table-cell';
        document.getElementById('td15').style.display = 'table-cell';
        document.getElementById('suuji12').style.display = 'inline';
        document.getElementById('odai12').style.display = 'inline';
        //予想とシークレット元に戻す
        document.getElementById('yosou10').style.display = 'inline-block';
        document.getElementById('yosou210').style.display = 'inline';
        document.getElementById('yosou11').style.display = 'inline-block';
        document.getElementById('yosou211').style.display = 'inline';
        document.getElementById('yosou12').style.display = 'inline-block';
        document.getElementById('yosou212').style.display = 'inline';
        document.getElementById('yosou13').style.display = 'inline-block';
        document.getElementById('yosou213').style.display = 'inline';
        document.getElementById('answer10').style.display = 'block';
        document.getElementById('answer11').style.display = 'block';
        document.getElementById('answer12').style.display = 'block';
        document.getElementById('answer13').style.display = 'block';}
        buttonClick2();
    });

$("#odaiButton").on('click', odaiStart);

 //受け取りの人用----------------------------------------------------↓
    
    socket.on('odaiStart_br', function(ninzuu1){
        document.getElementById('kekka').style.display = 'none';
        document.getElementById('kekka2').textContent  = "";
    ninzuu1 = ninzuu1.ninzuu;
    document.getElementById('ninzuu').options[ninzuu1-3].selected = true;
    if(ninzuu1 == 3){
        //お題箱元に戻す　
        document.getElementById('td10').style.display = 'table-cell';
        document.getElementById('td11').style.display = 'table-cell';
        document.getElementById('td12').style.display = 'table-cell';
        document.getElementById('td13').style.display = 'table-cell';
        document.getElementById('td14').style.display = 'table-cell';
        document.getElementById('td15').style.display = 'table-cell';
        document.getElementById('suuji12').style.display = 'inline';
        document.getElementById('odai12').style.display = 'inline';
        
        //予想とシークレット元に戻す
        document.getElementById('yosou10').style.display = 'inline-block';
        document.getElementById('yosou210').style.display = 'inline';
        document.getElementById('yosou11').style.display = 'inline-block';
        document.getElementById('yosou211').style.display = 'inline';
        document.getElementById('yosou12').style.display = 'inline-block';
        document.getElementById('yosou212').style.display = 'inline';
        document.getElementById('yosou13').style.display = 'inline-block';
        document.getElementById('yosou213').style.display = 'inline';
        document.getElementById('answer10').style.display = 'block';
        document.getElementById('answer11').style.display = 'block';
        document.getElementById('answer12').style.display = 'block';
        document.getElementById('answer13').style.display = 'block';}
        if(ninzuu1 == 4){
        document.getElementById('td10').style.display = 'none';
        document.getElementById('td11').style.display = 'none';
        document.getElementById('td12').style.display = 'none';
        document.getElementById('td13').style.display = 'none';
        document.getElementById('td14').style.display = 'none';
        document.getElementById('td15').style.display = 'none';
        //予想とシークレットを9までに
        document.getElementById('yosou10').style.display = 'none';
        document.getElementById('yosou210').style.display = 'none';
        document.getElementById('yosou11').style.display = 'none';
        document.getElementById('yosou211').style.display = 'none';
        document.getElementById('yosou12').style.display = 'none';
        document.getElementById('yosou212').style.display = 'none';
        document.getElementById('yosou13').style.display = 'none';
        document.getElementById('yosou213').style.display = 'none';
        document.getElementById('answer10').style.display = 'none';
        document.getElementById('answer11').style.display = 'none';
        document.getElementById('answer12').style.display = 'none';
        document.getElementById('answer13').style.display = 'none';}
         if(ninzuu1 == 5){
        document.getElementById('suuji12').style.display = 'none';
        document.getElementById('odai12').style.display = 'none';
        document.getElementById('td13').style.display = 'none';
        document.getElementById('td14').style.display = 'none';
        document.getElementById('td15').style.display = 'none';
        //予想とシークレットを11までに
        document.getElementById('yosou12').style.display = 'none';
        document.getElementById('yosou212').style.display = 'none';
        document.getElementById('yosou13').style.display = 'none';
        document.getElementById('yosou213').style.display = 'none';
        document.getElementById('answer12').style.display = 'none';
        document.getElementById('answer13').style.display = 'none';   
        //お題箱元に戻す　
        document.getElementById('td10').style.display = 'table-cell';
        document.getElementById('td11').style.display = 'table-cell';
        document.getElementById('td12').style.display = 'table-cell';
        //予想とシークレット元に戻す
        document.getElementById('yosou10').style.display = 'inline-block';
        document.getElementById('yosou210').style.display = 'inline';
        document.getElementById('yosou11').style.display = 'inline-block';
        document.getElementById('yosou211').style.display = 'inline';
        document.getElementById('answer10').style.display = 'block';
        document.getElementById('answer11').style.display = 'block';}
        if(ninzuu1 == 6){
        //お題箱元に戻す　
        document.getElementById('td10').style.display = 'table-cell';
        document.getElementById('td11').style.display = 'table-cell';
        document.getElementById('td12').style.display = 'table-cell';
        document.getElementById('td13').style.display = 'table-cell';
        document.getElementById('td14').style.display = 'table-cell';
        document.getElementById('td15').style.display = 'table-cell';
        document.getElementById('suuji12').style.display = 'inline';
        document.getElementById('odai12').style.display = 'inline';
        //予想とシークレット元に戻す
        document.getElementById('yosou10').style.display = 'inline-block';
        document.getElementById('yosou210').style.display = 'inline';
        document.getElementById('yosou11').style.display = 'inline-block';
        document.getElementById('yosou211').style.display = 'inline';
        document.getElementById('yosou12').style.display = 'inline-block';
        document.getElementById('yosou212').style.display = 'inline';
        document.getElementById('yosou13').style.display = 'inline-block';
        document.getElementById('yosou213').style.display = 'inline';
        document.getElementById('answer10').style.display = 'block';
        document.getElementById('answer11').style.display = 'block';
        document.getElementById('answer12').style.display = 'block';
        document.getElementById('answer13').style.display = 'block';}
    
     socket.once('newArray0_br', function(newArray01){    
    document.getElementById('anatanoodai').style.display = 'inline';
    document.getElementById('rensoutango').style.display = 'inline';
    document.getElementById('rensou').style.display = 'inline';
    document.getElementById('rensoubutton').style.display = 'inline';
        let newArray=[];
        let ao = (newArray01.newArray);
        newArray = ao.toString().split(',');

        
        if(ninzuu1 == 3){
     
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('odai10').textContent = newArray[9];
    document.getElementById('odai11').textContent = newArray[10];
    document.getElementById('odai12').textContent = newArray[11];
    document.getElementById('odai13').textContent = newArray[12];
    
    socket.on('player001', function(player1){

    socket.on('player002', function(player2){

    socket.on('player003', function(player3){

    socket.on('player004', function(player4){

    socket.on('player005', function(player5){

    socket.on('player006', function(player6){

    socket.on('player007', function(newArray2){

        //あなたのお題を表示

            if(player1.player1 != undefined){
            document.getElementById('span3').textContent = player1.player1 +" | "+ player2.player2;}
            if(player3.player3 != undefined){
            document.getElementById('span3').textContent = player3.player3 +" | "+ player4.player4;}
            if(player5.player5 != undefined){
            document.getElementById('span3').textContent = player5.player5 +" | "+ player6.player6;}
            document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";    
        
          });
    
            
        
        
    })        
        
    })            
        
    })       
        
    })  
        
    })    
    
    })   
    
        }
        if(ninzuu1 == 4){
     
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('td10').style.display = 'none';
    document.getElementById('td11').style.display = 'none';
    document.getElementById('td12').style.display = 'none';
    document.getElementById('td13').style.display = 'none';
    document.getElementById('td14').style.display = 'none';
    document.getElementById('td15').style.display = 'none';
    //予想とシークレットを9までに
    document.getElementById('yosou10').style.display = 'none';
    document.getElementById('yosou210').style.display = 'none';
    document.getElementById('yosou11').style.display = 'none';
    document.getElementById('yosou211').style.display = 'none';
    document.getElementById('yosou12').style.display = 'none';
    document.getElementById('yosou212').style.display = 'none';
    document.getElementById('yosou13').style.display = 'none';
    document.getElementById('yosou213').style.display = 'none';
    document.getElementById('answer10').style.display = 'none';
    document.getElementById('answer11').style.display = 'none';
    document.getElementById('answer12').style.display = 'none';
    document.getElementById('answer13').style.display = 'none';
    
    socket.on('player001_4', function(player1_4){

    socket.on('player002_4', function(player2_4){

    socket.on('player003_4', function(player3_4){

    socket.on('player004_4', function(player4_4){

    socket.on('player007', function(newArray2){

            if(player1_4.player1_4 != undefined){
            document.getElementById('span3').textContent = player1_4.player1_4;}
            if(player2_4.player2_4 != undefined){
            document.getElementById('span3').textContent = player2_4.player2_4;}
            if(player3_4.player3_4 != undefined){
            document.getElementById('span3').textContent = player3_4.player3_4;}
            if(player4_4.player4_4 != undefined){
            document.getElementById('span3').textContent = player4_4.player4_4;}
            document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";
    
        
             });
           })   })      })    })   
        }
         if(ninzuu1 == 5){
     
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('odai10').textContent = newArray[9];
    document.getElementById('odai11').textContent = newArray[10];
    document.getElementById('suuji12').style.display = 'none';
    document.getElementById('odai12').style.display = 'none';
    document.getElementById('td13').style.display = 'none';
    document.getElementById('td14').style.display = 'none';
    document.getElementById('td15').style.display = 'none';
    
    //予想とシークレットを11までに
    document.getElementById('yosou12').style.display = 'none';
    document.getElementById('yosou212').style.display = 'none';
    document.getElementById('yosou13').style.display = 'none';
    document.getElementById('yosou213').style.display = 'none';
    document.getElementById('answer12').style.display = 'none';
    document.getElementById('answer13').style.display = 'none';   
    
    //お題箱元に戻す　
    document.getElementById('td10').style.display = 'table-cell';
    document.getElementById('td11').style.display = 'table-cell';
    document.getElementById('td12').style.display = 'table-cell';
        
    //予想とシークレット元に戻す
    document.getElementById('yosou10').style.display = 'inline-block';
    document.getElementById('yosou210').style.display = 'inline';
    document.getElementById('yosou11').style.display = 'inline-block';
    document.getElementById('yosou211').style.display = 'inline';
    document.getElementById('answer10').style.display = 'block';
    document.getElementById('answer11').style.display = 'block';
    
    socket.on('player001_5', function(player1_5){
    socket.on('player002_5', function(player2_5){
    socket.on('player003_5', function(player3_5){
    socket.on('player004_5', function(player4_5){
    socket.on('player005_5', function(player5_5){    

   
    socket.on('player007', function(newArray2){

            if(player1_5.player1_5 != undefined){
            document.getElementById('span3').textContent = player1_5.player1_5;}
            if(player2_5.player2_5 != undefined){
            document.getElementById('span3').textContent = player2_5.player2_5;}
            if(player3_5.player3_5 != undefined){
            document.getElementById('span3').textContent = player3_5.player3_5;}
            if(player4_5.player4_5 != undefined){
            document.getElementById('span3').textContent = player4_5.player4_5;}
            if(player5_5.player5_5 != undefined){
            document.getElementById('span3').textContent = player5_5.player5_5;}  
            document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";
    
        
             });
         })   })   })      })    })   
        }
         if(ninzuu1 == 6){
     
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('odai10').textContent = newArray[9];
    document.getElementById('odai11').textContent = newArray[10];
    document.getElementById('odai12').textContent = newArray[11];
    document.getElementById('odai13').textContent = newArray[12];
    //お題箱元に戻す　
    document.getElementById('td10').style.display = 'table-cell';
    document.getElementById('td11').style.display = 'table-cell';
    document.getElementById('td12').style.display = 'table-cell';
    document.getElementById('td13').style.display = 'table-cell';
    document.getElementById('td14').style.display = 'table-cell';
    document.getElementById('td15').style.display = 'table-cell';
    document.getElementById('suuji12').style.display = 'inline';
    document.getElementById('odai12').style.display = 'inline';
    //予想とシークレット元に戻す
    document.getElementById('yosou10').style.display = 'inline-block';
    document.getElementById('yosou210').style.display = 'inline';
    document.getElementById('yosou11').style.display = 'inline-block';
    document.getElementById('yosou211').style.display = 'inline';
    document.getElementById('yosou12').style.display = 'inline-block';
    document.getElementById('yosou212').style.display = 'inline';
    document.getElementById('yosou13').style.display = 'inline-block';
    document.getElementById('yosou213').style.display = 'inline';
    document.getElementById('answer10').style.display = 'block';
    document.getElementById('answer11').style.display = 'block';
    document.getElementById('answer12').style.display = 'block';
    document.getElementById('answer13').style.display = 'block';
    
    socket.on('player001_6', function(player1_6){
    socket.on('player002_6', function(player2_6){
    socket.on('player003_6', function(player3_6){
    socket.on('player004_6', function(player4_6){
    socket.on('player005_6', function(player5_6){
    socket.on('player006_6', function(player6_6){  
    socket.on('player007', function(newArray2){

        if(player1_6.player1_6 != undefined){
            document.getElementById('span3').textContent = player1_6.player1_6;}
            if(player2_6.player2_6 != undefined){
            document.getElementById('span3').textContent = player2_6.player2_6;}
            if(player3_6.player3_6 != undefined){
            document.getElementById('span3').textContent = player3_6.player3_6;}
            if(player4_6.player4_6 != undefined){
            document.getElementById('span3').textContent = player4_6.player4_6;}
            if(player5_6.player5_6 != undefined){
            document.getElementById('span3').textContent = player5_6.player5_6;}
            if(player6_6.player6_6 != undefined){
            document.getElementById('span3').textContent = player6_6.player6_6;}     
            document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";
    
        
             });
       })   })   })   })      })    })   
        }
        
     });
    });
     //受け取りの人用----------------------------------------------------↑
    
    let player1 = [];
    let player2 = [];
    let player3 = [];
    let player4 = [];
    let player5 = [];
    let player6 = [];
    let newArray2 = [];
    
function buttonClick2(){
    
    document.getElementById('anatanoodai').style.display = 'inline';
    document.getElementById('rensoutango').style.display = 'inline';
    document.getElementById('rensou').style.display = 'inline';
    document.getElementById('rensoubutton').style.display = 'inline';
    
    const selected =(array.slice(), 13);
        // 配列arrayからランダムにnum個の要素を取り出す
        let newArray = [];
        while(newArray.length < 13 && array.length > 0)
        {
            // 配列からランダムな要素を選ぶ
         const rand = Math.floor(Math.random() * array.length);
            // 選んだ要素を別の配列に登録する
         newArray.push(array[rand]);
    
        // もとの配列からは削除する
        array.splice(rand, 1);
        
        }
     
     newArray0();
     
    function newArray0(){
    socket.emit('newArray0', {newArray});
    }
    
    socket.once('newArray0', function(newArray01){
        let ao = (newArray01.newArray);
        newArray=[];
        newArray = ao.toString().split(',');

    if(ninzuuSelect.value == 3){
     
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('odai10').textContent = newArray[9];
    document.getElementById('odai11').textContent = newArray[10];
    document.getElementById('odai12').textContent = newArray[11];
    document.getElementById('odai13').textContent = newArray[12];
    
    //番号と単語のリスト作成
        newArray2 = [];
    for(let i=0; i<13; i++){
        let bangou = newArray.indexOf(newArray[i])+1;
        newArray2.push(bangou + newArray[i]);
    }

    const selected =(newArray2.slice(), 2);
        // 配列arrayからランダムにnum個の要素を取り出す
        
            player1 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player1.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            player2 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player2.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            player3 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player3.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            player4 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player4.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            player5 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player5.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            player6 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player6.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
        
    player001();
    function player001(){
    socket.emit('player001', {player1});}
    socket.once('player001', function(player1){
    player002();
    function player002(){
    socket.emit('player002', {player2});}
    socket.once('player002', function(player2){
    player003();
    function player003(){
    socket.emit('player003', {player3});}
    socket.once('player003', function(player3){
   player004();
    function player004(){
    socket.emit('player004', {player4});}
    socket.once('player004', function(player4){
    player005();
    function player005(){
    socket.emit('player005', {player5});}
    socket.once('player005', function(player5){
   player006();
    function player006(){
    socket.emit('player006', {player6});}
    socket.once('player006', function(player6){
    player007();   
    function player007(){
    socket.emit('player007', {newArray2});}
    socket.once('player007', function(newArray2){

        //あなたのお題を表示
        let playersocketId
            
            if(player1.player1 != undefined){
            document.getElementById('span3').textContent = player1.player1 +" | "+ player2.player2;}
            if(player3.player3 != undefined){
            document.getElementById('span3').textContent = player3.player3 +" | "+ player4.player4;}
            if(player5.player5 != undefined){
            document.getElementById('span3').textContent = player5.player5 +" | "+ player6.player6;}
             
            
            document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";
        
          }); }); }); }); }); }); });   
    }
    
    if(ninzuuSelect.value == 4){
    
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('td10').style.display = 'none';
    document.getElementById('td11').style.display = 'none';
    document.getElementById('td12').style.display = 'none';
    document.getElementById('td13').style.display = 'none';
    document.getElementById('td14').style.display = 'none';
    document.getElementById('td15').style.display = 'none';
    
    //番号と単語のリスト作成
    let newArray2 = [];
    for(let i=0; i<9; i++){
        let bangou = newArray.indexOf(newArray[i])+1;
        newArray2.push(bangou + newArray[i]);
    }
    
    const selected =(newArray2.slice(), 2);
        // 配列arrayからランダムにnum個の要素を取り出す
        
            let player1_4 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player1_4.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player2_4 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player2_4.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player3_4 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player3_4.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player4_4 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player4_4.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
    //予想とシークレットを9までに
    document.getElementById('yosou10').style.display = 'none';
    document.getElementById('yosou210').style.display = 'none';
    document.getElementById('yosou11').style.display = 'none';
    document.getElementById('yosou211').style.display = 'none';
    document.getElementById('yosou12').style.display = 'none';
    document.getElementById('yosou212').style.display = 'none';
    document.getElementById('yosou13').style.display = 'none';
    document.getElementById('yosou213').style.display = 'none';
    document.getElementById('answer10').style.display = 'none';
    document.getElementById('answer11').style.display = 'none';
    document.getElementById('answer12').style.display = 'none';
    document.getElementById('answer13').style.display = 'none';
    
    player001_4();
    function player001_4(){
    socket.emit('player001_4', {player1_4});}
    socket.once('player001_4', function(player1_4){
    player002_4();
    function player002_4(){
    socket.emit('player002_4', {player2_4});}
    socket.once('player002_4', function(player2_4){
    player003_4();
    function player003_4(){
    socket.emit('player003_4', {player3_4});}
    socket.once('player003_4', function(player3_4){
   player004_4();
    function player004_4(){
    socket.emit('player004_4', {player4_4});}
    socket.once('player004_4', function(player4_4){

    player007();   
    function player007(){
    socket.emit('player007', {newArray2});}
    socket.once('player007', function(newArray2){

            if(player1_4.player1_4 != undefined){
            document.getElementById('span3').textContent = player1_4.player1_4;}
            if(player2_4.player2_4 != undefined){
            document.getElementById('span3').textContent = player2_4.player2_4;}
            if(player3_4.player3_4 != undefined){
            document.getElementById('span3').textContent = player3_4.player3_4;}
            if(player4_4.player4_4 != undefined){
            document.getElementById('span3').textContent = player4_4.player4_4;}
            document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";
    }); }); }); }); });
    

    }
    
    if(ninzuuSelect.value == 5){
    
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('odai10').textContent = newArray[9];
    document.getElementById('odai11').textContent = newArray[10];
    document.getElementById('suuji12').style.display = 'none';
    document.getElementById('odai12').style.display = 'none';
    document.getElementById('td13').style.display = 'none';
    document.getElementById('td14').style.display = 'none';
    document.getElementById('td15').style.display = 'none';
    
     //番号と単語のリスト作成
    let newArray2 = [];
    for(let i=0; i<11; i++){
        let bangou = newArray.indexOf(newArray[i])+1;
        newArray2.push(bangou + newArray[i]);
        
    }

    const selected =(newArray2.slice(), 2);
        // 配列arrayからランダムにnum個の要素を取り出す
        
            let player1_5 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player1_5.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player2_5 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player2_5.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            let player3_5 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player3_5.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player4_5 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player4_5.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player5_5 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player5_5.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
        
    //予想とシークレットを11までに
    document.getElementById('yosou12').style.display = 'none';
    document.getElementById('yosou212').style.display = 'none';
    document.getElementById('yosou13').style.display = 'none';
    document.getElementById('yosou213').style.display = 'none';
    document.getElementById('answer12').style.display = 'none';
    document.getElementById('answer13').style.display = 'none';   
    
    //お題箱元に戻す　
    document.getElementById('td10').style.display = 'table-cell';
    document.getElementById('td11').style.display = 'table-cell';
    document.getElementById('td12').style.display = 'table-cell';

    //予想とシークレット元に戻す
    document.getElementById('yosou10').style.display = 'inline-block';
    document.getElementById('yosou210').style.display = 'inline';
    document.getElementById('yosou11').style.display = 'inline-block';
    document.getElementById('yosou211').style.display = 'inline';
    document.getElementById('answer10').style.display = 'block';
    document.getElementById('answer11').style.display = 'block';
    
     player001_5();
    function player001_5(){
    socket.emit('player001_5', {player1_5});}
    socket.once('player001_5', function(player1_5){
    player002_5();
    function player002_5(){
    socket.emit('player002_5', {player2_5});}
    socket.once('player002_5', function(player2_5){
    player003_5();
    function player003_5(){
    socket.emit('player003_5', {player3_5});}
    socket.once('player003_5', function(player3_5){
   player004_5();
    function player004_5(){
    socket.emit('player004_5', {player4_5});}
    socket.once('player004_5', function(player4_5){
    player005_5();
    function player005_5(){
    socket.emit('player005_5', {player5_5});}
    socket.once('player005_5', function(player5_5){

    player007();   
    function player007(){
    socket.emit('player007', {newArray2});}
    socket.once('player007', function(newArray2){

    if(player1_5.player1_5 != undefined){
    document.getElementById('span3').textContent = player1_5.player1_5;}
    if(player2_5.player2_5 != undefined){
    document.getElementById('span3').textContent = player2_5.player2_5;}
    if(player3_5.player3_5 != undefined){
    document.getElementById('span3').textContent = player3_5.player3_5;}
    if(player4_5.player4_5 != undefined){
    document.getElementById('span3').textContent = player4_5.player4_5;}
    if(player5_5.player5_5 != undefined){
    document.getElementById('span3').textContent = player5_5.player5_5;}   
    document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";
    }); }); }); }); }); });
    }
    
    if(ninzuuSelect.value == 6){
     
    document.getElementById('odai01').textContent = newArray[0];
    document.getElementById('odai02').textContent = newArray[1];
    document.getElementById('odai03').textContent = newArray[2];
    document.getElementById('odai04').textContent = newArray[3];
    document.getElementById('odai05').textContent = newArray[4];
    document.getElementById('odai06').textContent = newArray[5];
    document.getElementById('odai07').textContent = newArray[6];
    document.getElementById('odai08').textContent = newArray[7];
    document.getElementById('odai09').textContent = newArray[8];
    document.getElementById('odai10').textContent = newArray[9];
    document.getElementById('odai11').textContent = newArray[10];
    document.getElementById('odai12').textContent = newArray[11];
    document.getElementById('odai13').textContent = newArray[12];
    
    //番号と単語のリスト作成
    let newArray2 = [];
    for(let i=0; i<13; i++){
        let bangou = newArray.indexOf(newArray[i])+1;
        newArray2.push(bangou + newArray[i]);
        
    }

    const selected =(newArray2.slice(), 2);
        // 配列arrayからランダムにnum個の要素を取り出す
        
            let player1_6 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player1_6.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player2_6 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player2_6.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player3_6 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player3_6.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player4_6 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player4_6.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player5_6 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player5_6.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
            
            let player6_6 = [];
            for(let j=0; j<2; j++)
            {
            const rand = Math.floor(Math.random() * newArray2.length);// 配列からランダムな要素を選ぶ
            player6_6.push(newArray2[rand]);// 選んだ要素を別の配列に登録する
            newArray2.splice(rand, 1);// もとの配列からは削除する
            }
        
        //お題箱元に戻す　
        document.getElementById('td10').style.display = 'table-cell';
        document.getElementById('td11').style.display = 'table-cell';
        document.getElementById('td12').style.display = 'table-cell';
        document.getElementById('td13').style.display = 'table-cell';
        document.getElementById('td14').style.display = 'table-cell';
        document.getElementById('td15').style.display = 'table-cell';
        document.getElementById('suuji12').style.display = 'inline';
        document.getElementById('odai12').style.display = 'inline';
        
        //予想とシークレット元に戻す
        document.getElementById('yosou10').style.display = 'inline-block';
        document.getElementById('yosou210').style.display = 'inline';
        document.getElementById('yosou11').style.display = 'inline-block';
        document.getElementById('yosou211').style.display = 'inline';
        document.getElementById('yosou12').style.display = 'inline-block';
        document.getElementById('yosou212').style.display = 'inline';
        document.getElementById('yosou13').style.display = 'inline-block';
        document.getElementById('yosou213').style.display = 'inline';
        document.getElementById('answer10').style.display = 'block';
        document.getElementById('answer11').style.display = 'block';
        document.getElementById('answer12').style.display = 'block';
        document.getElementById('answer13').style.display = 'block';
        
        
     player001_6();
    function player001_6(){
    socket.emit('player001_6', {player1_6});}
    socket.once('player001_6', function(player1_6){
    player002_6();
    function player002_6(){
    socket.emit('player002_6', {player2_6});}
    socket.once('player002_6', function(player2_6){
    player003_6();
    function player003_6(){
    socket.emit('player003_6', {player3_6});}
    socket.once('player003_6', function(player3_6){
    player004_6();
    function player004_6(){
    socket.emit('player004_6', {player4_6});}
    socket.once('player004_6', function(player4_6){
    player005_6();
    function player005_6(){
    socket.emit('player005_6', {player5_6});}
    socket.once('player005_6', function(player5_6){
    player006_6();
    function player006_6(){
    socket.emit('player006_6', {player5_6});}
    socket.once('player006_6', function(player5_6){

    player007();   
    function player007(){
    socket.emit('player007', {newArray2});}
    socket.once('player007', function(newArray2){

    if(player1_6.player1_6 != undefined){
    document.getElementById('span3').textContent = player1_6.player1_6;}
    if(player2_6.player2_6 != undefined){
    document.getElementById('span3').textContent = player2_6.player2_6;}
    if(player3_6.player3_6 != undefined){
    document.getElementById('span3').textContent = player3_6.player3_6;}
    if(player4_6.player4_6 != undefined){
    document.getElementById('span3').textContent = player4_6.player4_6;}
    if(player5_6.player5_6 != undefined){
    document.getElementById('span3').textContent = player5_6.player5_6;}
    if(player6_6.player6_6 != undefined){
    document.getElementById('span3').textContent = player6_6.player6_6;}  
    document.getElementById('kekka').textContent = "シークレットは「" +newArray2.newArray2　+"」";
    }); }); }); }); }); });}); 
    
  }
    });
  

}
