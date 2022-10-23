const OPPONENT_HEIGHT = 5,
  OPPONENT_PICTURE = "assets/mini_pekka_ALIVE.png",
  OPPONENT_PICTURE_DEAD = "assets/mini_pekka_DEAD.png",
  OPPONENT_SPEED = 5, //La velocidad del boss deberá ser el doble a la del oponente
  OPPONENT_WIDTH = 5,
  GAME_OVER_PICTURE = "assets/game_over.png",
  YOU_WIN_PICTURE = "assets/you_win.png"
KEY_LEFT = "LEFT",
  KEY_RIGHT = "RIGHT",
  KEY_SHOOT = "SHOOT",
  MIN_TOUCHMOVE = 20,
  PLAYER_HEIGHT = 5,
  PLAYER_PICTURE = "assets/wizard_ALIVE.png",
  PLAYER_PICTURE_DEAD = "assets/wizard_DEAD.png",
  PLAYER_SPEED = 20,
  PLAYER_WIDTH = 5,
  SHOT_HEIGHT = 3, //1.5
  SHOT_SPEED = 20,
  SHOT_PICTURE_PLAYER = "assets/fireball.png",
  SHOT_PICTURE_OPPONENT = "assets/fireballPurple.png",
  SHOT_WIDTH = 3, //1.5 
  LIVES = 3;
BOSS_SPEED = 10,
  BOSS_PICTURE = "assets/pekka_ALIVE.png",
  BOSS_PICTURE_DEAD = "assets/pekka_DEAD.png";


function getRandomNumber(range) {
  return Math.floor(Math.random() * range);
}

function collision(div1, div2) {
  const a = div1.getBoundingClientRect(),
    b = div2.getBoundingClientRect();
  return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
  game = new Game();
  game.start();
}
);