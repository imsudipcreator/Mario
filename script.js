let currMoleTile;
let currPlantTile;
let score =0;
let gameOver =false;
let rstBtn=document.querySelector(".rst-btn");
let strtBtn=document.querySelector(".strt-btn");
let pallete=document.querySelector(".pallete");

strtBtn.addEventListener('click',function(){
    setGame();
    strtBtn.disabled=true;
});
// window.onload=function(){
//     setGame();
// }

function setGame(){
    for( let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id =i.toString();
        tile.addEventListener('click',selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,1000);
    setInterval(setPlant,2000);
}

function getRandomTile(){
    let num =Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }

if (currMoleTile){
    currMoleTile.innerHTML="";
}

    let mole =document.createElement("img");
    mole.src="./monty-mole.png";
    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);

}

function setPlant(){

    if(gameOver){
        return;
    }
    if (currPlantTile){
        currPlantTile.innerHTML="";
    }
    
        let plant =document.createElement("img");
        plant.src="./piranha-plant.png";
        let num = getRandomTile();
        if(currMoleTile && currMoleTile.id == num){
            return;
        }
        currPlantTile=document.getElementById(num);
        currPlantTile.appendChild(plant);
    
    }

    function selectTile(){
        if(gameOver){
            return;
        }
        if(this == currMoleTile){
            score+=10;
            document.getElementById("score").innerText=score.toString();
        }
        else if (this == currPlantTile){
            document.getElementById("score").innerText="GAME OVER : " +score.toString() ;
            gameOver=true;
        }
    }

    rstBtn.addEventListener('click', ()=>{
        gameOver =false;
        document.getElementById("score").innerText="0";
        score =0;
        strtBtn.disabled=false;
        window.location.reload();
    
    })



pallete.addEventListener('click',()=>{
  document.body.classList.toggle("pallete-2");
})