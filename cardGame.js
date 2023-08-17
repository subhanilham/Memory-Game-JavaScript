let cards = document.querySelectorAll(".cards");
const gameContainer = document.querySelector("#gameContainer");
const defBack = "url('cardd.png')";

let tempCards = [
    {mage : "none"},
    {mage : "none"},
    {mage : "none"},
    {mage : "none"},
    {mage : "none"},
    {mage : "none"},
    {mage : "none"},
    {mage : "none"}
]

const pic1 = "url('card1.png')";
const pic2 = "url('card2.png')";
const pic3 = "url('card3.png')";
const pic4 = "url('card4.png')";
let array = [];
let p = 0;
let temp = [];
let i = 0;
let win = 0;
gameStart();

function gameStart(){
    add();
    change();
    cards.forEach(card => {
        card.addEventListener("click",clicked);
        card.style.backgroundSize = "190px 270px";
    });
}

cards.forEach(card => {
    card.addEventListener("click",clicked);
})

function clicked(e){
    if(p < 2){
        cards[e.target.id].style.backgroundImage = `${tempCards[e.target.id].mage}`;
        temp.push(e.target.id);
        conditions();
        gameEnd();
        p++;
    }
    else{

    }
}

function add(){
    while(array.length <8 ){
        let a = Math.floor(Math.random() * 8);
        if(array.includes(a)){
            continue;
        }
        else{
            array.push(a);
        }
    }
}

function change(){
    tempCards[array[0]].mage = pic1;
    tempCards[array[1]].mage = pic1;
    tempCards[array[2]].mage = pic2;
    tempCards[array[3]].mage = pic2;
    tempCards[array[4]].mage = pic3;
    tempCards[array[5]].mage = pic3;
    tempCards[array[6]].mage = pic4;
    tempCards[array[7]].mage = pic4;

}

function conditions(){
    if(temp.length > 0 && cards[temp[0]].style.backgroundImage == cards[temp[1]].style.backgroundImage){
        setTimeout(() => {
            cards[temp[0]].style.backgroundImage = 'none';
            cards[temp[0]].style.border = '4px hidden';
            cards[temp[1]].style.backgroundImage = 'none';
            cards[temp[1]].style.border = '4px hidden';
            temp = [];
            p = 0;
            win++;
        },500);
        
    }
    else{
        setTimeout(() =>{
            cards[temp[0]].style.backgroundImage = defBack;
            cards[temp[1]].style.backgroundImage = defBack;
            temp = [];
            p = 0;
        },1000);
    }
}

function gameEnd(){
    if(win == 3){
        gameContainer.textContent =  "YOU WIN!";
        gameContainer.style.fontSize = "150px"; 
        gameContainer.style.textAlign = "Center"; 
        gameContainer.style.alignItems = "Center"; 
        gameContainer.style.marginTop = "200px"; 
        gameContainer.style.Color = "black"; 
        gameContainer.style.fontFamily = "Permanent marker , cursive"; 
    }
}
