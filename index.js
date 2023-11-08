let computer_score = document.getElementsByClassName('score')[1];
let player_score = document.getElementsByClassName('score')[0];

// console.log(player_score.innerHTML);
// console.log('finished');
 function player_decision(event) {
    let player_decision;

    switch (event.id) {
        case 'rock': player_decision = 0; break;
        case 'paper': player_decision = 1; break;
        case 'scissors': player_decision = 2; break;
    }

    computer_decision = Math.floor(Math.random() * 3);

    game(computer_decision, player_decision);

    // console.log(player_decision + " vs " + computer_decision);
 }

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
        player_score.innerHTML = parseInt(player_score.innerHTML) + 1;
    } else {
        computer_score.innerHTML = parseInt(computer_score.innerHTML) + 1;
        victor = "computer";
    }

    console.log("player: " + player_decision + "\ncomputer: " + computer_decision + "\nwinner: " + victor);
 }

//  computer_score.addEventListener("click", function (e) {
//     if (parseInt(computer_score.innerHTML) == 5)
//         alert("computer has won!");
//  });

//  player_score.addEventListener("click", function (e) {
//      if (parseInt(player_score.innerHTML) == 5)
//         alert("player has won!");
//  });