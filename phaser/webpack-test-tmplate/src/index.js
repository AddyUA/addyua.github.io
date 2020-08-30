import Phaser from "phaser";
import config from "./scripts/config";
import GameScene from "./scripts/GameScene";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Game", GameScene);
    this.scene.start("Game");
  }
}

window.onload = function () {
  window.game = new Game();
};
