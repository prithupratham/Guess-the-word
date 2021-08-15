function addUser(){
player1 = document.getElementById("Player_1_name").value;
player2 = document.getElementById("Player_2_name").value;
localStorage.setItem("player1",player1);
localStorage.setItem("player2",player2);

window.location = "game_page.html";
}
