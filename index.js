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

    // console.log(player_decision + " vs " + computer_decision);
 }