/**
 * Personaje principal del juego. Hereda de la clase Character.
 * @extends Character
 */
class Player extends Character {
    /**
     * Inicializa un jugador
     * @param game {Game} La instancia del juego al que pertenece el jugador
     */
    constructor (game) {
        const height = PLAYER_HEIGHT * game.width / 100,
            width = PLAYER_WIDTH * game.width / 100,
            x = game.width / 2 - width / 2,
            y = game.height - height,
            speed = PLAYER_SPEED,
            myImage = PLAYER_PICTURE,
            myImageDead = PLAYER_PICTURE_DEAD;

        super(game, width, height, x, y, speed, myImage, myImageDead);
    }

    /**
     * Actualiza los atributos de posición del jugador y los disparos en función de las teclas pulsadas
     */
    update () {
        if (!this.dead) {
            switch (this.game.keyPressed) {
            case KEY_LEFT:
                if (this.x > this.speed) {
                    this.x -= this.speed;
                }
                break;
            case KEY_RIGHT:
                if (this.x < this.game.width - this.width - this.speed) {
                    this.x += this.speed;
                }
                break;
            case KEY_SHOOT:
                this.game.shoot(this);
                break;
            }
        }
    }

    /**
     * Mata al jugador
     */

    collide() {
        if (!this.dead) {
            this.lives--;
          //Restamos una vida al jugador en caso de haber sido alcanzado por un disparo. Pero sigue vivo.
          if (this.lives > 0) {
            //Si al jugador le quedan vidas
            super.collide();
            // El jugador muere durante dos segundos y renace con una vida menos.
            setTimeout(() => {
              this.image.src = this.myImage;
              this.dead = false;
            }, 2000);
          } else {
            // Si al jugador no le quedan vidas, muere definitivamente y se acaba el juego.
            super.collide();
            this.game.endGame();
          }
        }
      }
    }