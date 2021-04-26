//List of features TODO:
// JS display the world of brick, coin, etc
// pacman move up and down

let world = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,0,0,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

var chomp = {
    x: 1,
    y: 1
};
var score= 0;
function displayworld(){
    var output ='';

    for(var i=0;i<world.length;i++){
        output+="<div class='row'>\n"
        for(var j=0;j<world[i].length;j++)
        {
            if(world[i][j]==0)
                output += "<div class='brick'></div>";
            else if(world[i][j]==1)
                output += "<div class='coin'></div>";
            if(world[i][j]==2)
                output+="<div class='empty'></div>"
        }     
        output += "</div>"
    }
    document.getElementById('world').innerHTML = output;
}

displayworld();
displayChomp();

function displayChomp(){
    document.getElementById('chomp').style.top = chomp.y*30+"px";
    document.getElementById('chomp').style.left = chomp.x*30+"px";
}

function displayScore(){
    document.getElementById('score').innerHTML= score + ' Puntos';
}

document.onkeydown = function(k){
    if(k.keyCode == 37 && world[chomp.y][chomp.x-1] !=0){
        chomp.x--;
        document.getElementById('chomp').style.transform="scaleX(-1)";
    }
    else if(k.keyCode==38 && world[chomp.y-1][chomp.x] !=0){
        chomp.y--;
        document.getElementById('chomp').style.transform="rotate(-90deg)"
    }
    else if(k.keyCode==39 && world[chomp.y][chomp.x+1] !=0){
        chomp.x++;
        document.getElementById('chomp').style.transform="scaleX(1)"
    }
    else if(k.keyCode==40 && world[chomp.y+1][chomp.x] !=0){
        chomp.y++;
        document.getElementById('chomp').style.transform="rotate(90deg)"
    }
    if(world[chomp.y][chomp.x]==1){
        world[chomp.y][chomp.x]=2;
        score +=100;
        displayScore();
        displayworld();
    }
    displayworld();
    displayChomp();
}
