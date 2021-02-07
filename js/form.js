class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.reset = createButton('Reset');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.greeting1 = createElement("h3");
       this.greeting2 = createElement("h3");
       this.greeting3 = createElement("h3");
       this.greeting4 = createElement("h2");
       this.greeting5 = createElement("h3");
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.greeting1.html("*Use your mouse to move the basket")
        this.greeting1.position(10,0);
        this.greeting1.style('color', 'red');
        this.greeting1.style('font-size', '20px');
        this.greeting2.html("*If you catch Junk Food(pizza,burgur) 3 times the game will be over")
        this.greeting2.position(10,20);
        this.greeting2.style('color', 'red');
        this.greeting2.style('font-size', '20px');
        this.greeting3.html("*Press Reset and Refresh the page after game is over to play again")
        this.greeting3.position(10,40);
        this.greeting3.style('color', 'red');
        this.greeting3.style('font-size', '20px');
        this.greeting5.html("*The player who gets out first will be the loser")
        this.greeting5.position(10,60);
        this.greeting5.style('color', 'red');
        this.greeting5.style('font-size', '20px');
        this.greeting4.html("NOTE:")
        this.greeting4.position(10,-30);
        this.greeting4.style('color', 'red');
        this.greeting4.style('font-size', '30px');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
            database.ref("/").update({
              players:null,
              finishedplayer:0
            })
        });

    }
}