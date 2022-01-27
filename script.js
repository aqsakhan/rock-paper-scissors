const handOptions = {
    "rock" : "images/icon-rock.svg",
    "paper" : "images/icon-paper.svg",
    "scissor" : "images/icon-scissors.svg",
}

const handStyles = {
    "rock" : "rock",
    "paper" : "paper",
    "scissor" : "scissor",
}

let SCORE = 0;
let rulesBtnOpen = document.getElementById("rules-btn-open");
let rulesBtnCldse = document.getElementById("rules-btn-close");
let rulesModal = document.querySelector(".rules-modal");


// Rules
const rulesOpen = () => {
    rulesBtnOpen.style.display = "none";
    rulesModal.style.display = "flex";
}

const rulesClose = () => {
    rulesBtnOpen.style.display = "flex";
    rulesModal.style.display = "none";
}


// Function for the user's pick 
const pickUserHand = (hand) => {
    // After you pick a hand
    // hide the current page
    let hands = document.querySelector('.hands');
    hands.style.display = "none";
    // Show the next page with the hand you picked

    // Hide the end result interface
    let contest = document.querySelector('.contest');
    contest.style.display = "flex";

    // set the user pick
    document.getElementById('userPickImage').src = handOptions[hand];
    document.getElementById('userImageContainer').classList.add(handStyles[hand]);

    let cpHand = pickComputerHand();

    referee(hand, cpHand);
}

// Function for the computer's pick
const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissor"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

    // set the user pick
    document.getElementById('computerPickImage').src = handOptions[cpHand];
    document.getElementById('computerImageContainer').classList.add(cpHand);

    return cpHand;
}

const referee = (userHand, cpHand) => {

    if(userHand == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } else if(userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } else if(userHand == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } else if(userHand == cpHand) {
        setDecision("TIE!");
    } else {
        setDecision("YOU LOSE!");
    }
}

const setDecision = (decision) => {
    document.querySelector('.decision h1').innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector('.score h1').innerText = score;
}

const restartGame = () => {
    let hands = document.querySelector('.hands');
    hands.style.display = "flex";

    let contest = document.querySelector('.contest');
    contest.style.display = "none";
    
    document.getElementById('userImageContainer').classList.remove("rock", "paper", "scissor");
    document.getElementById('computerImageContainer').classList.remove("rock", "paper", "scissor");
}