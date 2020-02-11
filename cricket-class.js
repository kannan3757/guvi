

class team{
    players=[
        {0:"dhoni","runs":0,"balls":0,"fours":0,"sixes":0},
        {1:"kohli","runs":0,"balls":0,"fours":0,"sixes":0},
        {2:"raina","runs":0,"balls":0,"fours":0,"sixes":0},
        {3:"jaddu","runs":0,"balls":0,"fours":0,"sixes":0},
        {4:"ab","runs":0,"balls":0,"fours":0,"sixes":0},
        {5:"yuvi","runs":0,"balls":0,"fours":0,"sixes":0},
        {6:"kl","runs":0,"balls":0,"fours":0,"sixes":0},
        {7:"bum","runs":0,"balls":0,"fours":0,"sixes":0},
        {8:"sehwag","runs":0,"balls":0,"fours":0,"sixes":0},
        {9:"pant","runs":0,"balls":0,"fours":0,"sixes":0},
        {10:"iyer","runs":0,"balls":0,"fours":0,"sixes":0},
    ]
    playerscore(){
        var k=0
        for(var i=0;i<=30;i++){
            var s= Math.floor(Math.random()*7)
            if (s==0){
            this.players[k]["runs"]=this.players[k]["runs"]+s;
            this.players[k]["balls"]+=1;
            k=k+1
        }
        else if(s==4){
            this.players[k]["runs"]+=s;
            this.players[k]["balls"]+=1;
            this.players[k]["fours"]+=1;
         }
         else if(s==6){
             this.players[k]["runs"]+=s;
             this.players[k]["balls"]+=1;
             this.players[k]["sixes"]+=1;
         }
         else{
             this.players[k]["runs"]+=s;
             this.players[k]["balls"]+=1;
         }        
        }
    }
    teamscore (){
        var teamscor=0
        for(var i=0;i<11;i++){
        teamscor=this.players[i]["runs"]+teamscor;
        
     } return teamscor;
    }
    geteamsummary(){
        for(var i=0;i<11;i++){
        console.log("name:"+this.players[i][i],"runs:"+this.players[i]["runs"],"balls:"+this.players[i]["balls"])
    }
    }
}   
    var team1 = new team();
    team1.playerscore()
    var total1=team1.teamscore()
    team1.geteamsummary()
    console.log(total1)
    var team2= new team();
    team2.playerscore()
    var total2=team2.teamscore()
    team2.geteamsummary()
    console.log(total2)
    if (total1>total2){
        console.log("team1 wins")
    }
    else{
        console.log("team2 wins")
    }
   
         
