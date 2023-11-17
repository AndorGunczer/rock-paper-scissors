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