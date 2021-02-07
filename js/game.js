class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    
async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if (playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }
player1 = createSprite(200,500);
player1.addImage(player_img);

player2 = createSprite(800,500);
player2.addImage(player_img);
players=[player1,player2];

he1 = createSprite(100,570);
he1.addImage(fullimg);
he1.scale=0.2
he2 = createSprite(170,570);
he2.addImage(fullimg);
he2.scale=0.2
he3 = createSprite(240,570);
he3.addImage(fullimg);
he3.scale=0.2

}
    
play(){     
    form.hide();
    Player.getPlayerInfo();
    player.getfinishedplayer();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();
        for(var plr in allPlayers){       
            index = index+1;
            x = mouseX
            y=500
            players[index-1].x=mouseX
            players[index-1].y=y;

            textSize(25);
            fill("white");
            text(allPlayers.player1.name + "'s Score:"+allPlayers.player1.score,50,50);
            text(allPlayers.player2.name + "'s Score:" + allPlayers.player2.score, 50, 100);

            if(index === player.index){                    
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25);                    
            }        
        }       
        
    if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
        player.distance -= 10
        player.update();
    }
    if (keyIsDown(LEFT_ARROW) && player.index !== null) {
        player.distance += 10
        player.update();
    }

    if (frameCount % 20 === 0) {
        fruits = createSprite(random(100, 1000), 0, 100, 100);
        fruits.velocityY = 6;
        var rand = Math.round(random(1,5));
        switch(rand){
            case 1: fruits.addImage("fruit1",fruit1_img);
            break;
            case 2: fruits.addImage("fruit1", fruit2_img);
            break;
            case 3: fruits.addImage("fruit1", fruit3_img);
            break;
            case 4: fruits.addImage("fruit1", fruit4_img);
            break;
            case 5: fruits.addImage("fruit1", fruit5_img);
            break;
        }
        fruitGroup.add(fruits);        
    }    

    if (frameCount % 100 === 0) {
        enemy = createSprite(random(100, 1000), 0, 100, 100);
        enemy.velocityY = 6;
        var rand1 = Math.round(random(1,2));
        switch(rand1){
            case 1: enemy.addImage("enemy",burimg);
            break;
            case 2: enemy.addImage("enemy", pizzaimg);
            break;
        }
        junkFoodGroup.add(enemy);        
    }
        
        if (player.index !== null) { 
            for(var i = 0;i<fruitGroup.length;i++){
            if(fruitGroup.get(i).isTouching(players)){
                fruitGroup.get(i).destroy();
                player.score = player.score+1;
                player.update();               
            }
        }
        }         
        if (player.index !== null) { 
            for(var e = 0;e<junkFoodGroup.length;e++){
            if(junkFoodGroup.get(e).isTouching(players)){
                junkFoodGroup.get(e).destroy();
                turn = turn-1;            
            }
        }
        } 

        if(turn===2){
            he1.addImage(brokenimg);
            he1.scale=0.1;
        }
        if(turn===1){
            he2.addImage(brokenimg);
            he2.scale=0.1;
        }
        if(turn===0){
            he3.addImage(brokenimg);
            he3.scale=0.1;
            gameState=2;
            player.rank=finishedplayer;
            Player.updatefinishedplayer();
            player.update();
        }

}

    end(){
        camera.position.x=0;
        camera.position.y=0;
        Player.getPlayerInfo();
        textAlign(CENTER);
        fill("white");
        for(var plr in allPlayers){
          if(allPlayers[plr].rank===0){
            textSize(50);
            text("Loser:"+" "+allPlayers[plr].name+"!!!",0,100);
          }else
          if(allPlayers[plr].rank===1){
            textSize(50);
            text("Winner:"+" "+allPlayers[plr].name+"!!!",0,-50);
          }
        }
    }
}