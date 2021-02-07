class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
        this.count = 0;
        this.rank=0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount:count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            rank:this.rank,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }    
    
    getfinishedplayer(){
        var finishedplayerref = database.ref("finishedplayer")
        finishedplayerref.on("value", (data)=>{
          finishedplayer = data.val();
        })
      }
  
      static updatefinishedplayer(rank){
        database.ref("/").update({
          finishedplayer:finishedplayer+1
        })
        this.rank +=1
      }

    
}
