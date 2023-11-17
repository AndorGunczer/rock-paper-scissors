// Obtain the elements that represent the score of the participants from the DOM.

let computer_score = document.getElementsByClassName('score')[1];
let player_score = document.getElementsByClassName('score')[0];

/*
    decisions(event) function is triggered when a player clicks on either
        - rock
        - paper
        - scissor
    It then maps the id of the clicked div to an int value, and generates a random decision
        for the computer and calls the game() function.
*/

 function decisions(event) {
    let player_decision;

    switch (event.id) {
        case 'rock': player_decision = 0; break;
        case 'paper': player_decision = 1; break;
        case 'scissor': player_decision = 2; break;
    }

    computer_decision = Math.floor(Math.random() * 3);

    game(computer_decision, player_decision);
 }

 /*
    Takes the int values representing the
        decisions and compare them.
    Then checks who has won the given round and at each
        such check, the score_checker() is called to see if one of
        the players have reached 5 points.

 */

 function game(computer_decision, player_decision) {
    let player_wins = false;
    let victor;

    if (player_decision == computer_decision)
        return;
    else if (player_decision == 0 && computer_decision == 2)
        player_wins = true;
    else if (player_decision == 1 && computer_decision == 0)
        player_wins = true;
    else if (player_decision == 2 && computer_decision == 1)
        player_wins = true;

    if (player_wins == true) {
        victor = "player";
        player_score.textContent = parseInt(player_score.textContent) + 1;
        score_checker();
    } else {
        computer_score.textContent = parseInt(computer_score.textContent) + 1;
        victor = "computer";
        score_checker();
    }

    console.log("player: " + player_decision + "\ncomputer: " + computer_decision + "\nwinner: " + victor);
 }

 /*
    Checks the scores of the current game. If one of the players
        has reached the score of 5, then reset the scores and
        display an alert() message containing the victor.
 */

function score_checker() {
    if (player_score.textContent == 5) {
       player_score.textContent = 0;
       computer_score.textContent = 0;
       alert("player has won!");
    } else if (computer_score.textContent == 5) {
       player_score.textContent = 0;
       computer_score.textContent = 0;
       alert("computer has won!");             
    }
 }

/*
    Hide start menu button, and make the game menu visible
*/

start_button = document.querySelector('#game_menu');
back_to_menu_button = document.querySelector('.back_to_menu');

start_button.onclick = () => {
    game_window = document.querySelectorAll('.to_show');
    body = document.querySelector('body');
    game_start_button = document.querySelector('#game_menu');

    // console.log(game_window);
    // console.log(body);
    // console.log(game_start_button);
    game_start_button.setAttribute('style', 'display: none;');
    body.setAttribute('style', 'display: block;');
    game_window.forEach(element => {
        element.classList.remove('game_window');
    });
}

/*
    Hide game menu, and make the start menu button visible
*/

back_to_menu_button.onclick = () => {
    game_window = document.querySelectorAll('.to_show');
    body = document.querySelector('body');
    game_start_button = document.querySelector('#game_menu'); 
    
    game_start_button.setAttribute('style', 'display: block;');
    body.setAttribute('style', 'display: flex;');
    game_window.forEach(element => {
        element.classList.add('game_window');
    });
}