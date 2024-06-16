let userScore=0;
let compScore=0;

const genCompChoice =() =>{
 const options =["rock","paper","scissor"];
 const ranId=Math.floor(Math.random()*3);
return options[ranId];
}

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const userComppara=document.querySelector("#comp-score");


const showWinner = (userWin,userChoice,CompChoice) =>{
    if(userWin){
       userScore++;
       userScorepara.innerText =userScore;
        msg.innerText =`You win! Your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor="lightgreen";
    }
    else{
        compScore++;
        userComppara.innerText = compScore;
        msg.innerText ="You lose!";
        msg.innerText =`You lose!  ${CompChoice} beats your ${userChoice}`;

        msg.style.backgroundColor="red";


    }

}

const drawGame = () =>{
    console.log("The game is draw");
    msg.innerText ="Game was Draw.Play again.";
    msg.style.backgroundColor="aqua";


}

const playGame= (userChoice) =>{
    console.log("User choice =",userChoice);

const CompChoice= genCompChoice();
console.log("Computer choice =",CompChoice);

if(userChoice === CompChoice){
    drawGame();
}
else{
    let userWin =true;
    if(userChoice === "rock"){
       userWin= CompChoice==="paper"?false:true;
    }
    else if(userChoice==="paper") 
    {
        userWin= CompChoice==="scissor"?false:true;
    }
    else if(userChoice==="scissor")
    {
        userWin=CompChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,CompChoice);

}

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was selected",userChoice);
        playGame(userChoice);

    })
})