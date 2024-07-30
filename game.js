let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscoreshow = document.querySelector("#userscore");
const compscoreshow = document.querySelector("#compscore");


// Draw game function

const drawgame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was draw Play Again!";
    msg.style.backgroundColor ="blue";
}

// random choice or computer choice

const comprandomchoice = () =>{
    const options = ["rock","papper","scissors"];
    const compidx = Math.floor(Math.random() * 3);
    return options[compidx];
}

// winner

const showwinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscoreshow.innerText = userscore;


        console.log("you win");
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor ="green";

    }
    else{
        compscore++;
        compscoreshow.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You Lose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor ="red";

    }
}



// start the game

const playgame = (userchoice) =>{
    console.log("user choice",userchoice);
    const compchoice = comprandomchoice();
    console.log("compchoice", compchoice);

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice ==="rock"){
            userwin = compchoice === "paper"? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "scissors"? false : true;
        }
        else{
            userwin = compchoice === "rock"? false : true;
        }
        showwinner(userwin, userchoice,compchoice);
    }
};

// for user choice

choices.forEach((choice) => {
    choice.addEventListener("click",() =>
    {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })

});