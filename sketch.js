var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score = 0;
var count = 0;
var turn = 3;

var player, form,game;
var player1,player2;
var players;
var fruits,enemy;
var fruitGroup,junkFoodGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var burimg,pizzaimg;
var player_img;
var he1,he2,he3;
var finishedplayer = 0;
var passedfinish;

function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  burimg = loadImage("images/burgur.png");
  pizzaimg = loadImage("images/pizza.png");
  fullimg = loadImage("images/fullheart.png");
  brokenimg = loadImage("images/brokenheart.png");;
  fruitGroup = new Group();
  junkFoodGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2 && finishedplayer===0) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2 && finishedplayer===2) {    
     game.end();
   }


}