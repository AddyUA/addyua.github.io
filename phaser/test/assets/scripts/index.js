const config = {
  type: Phaser.AUTO, // webgl or canvas
  width: 304,
  height: 275,
  rows: 6,
  cols: 6,
  cards: ["Spades", "Clubs", "Diamonds", "Hearts"],
  scene: new GameScene()
};

const game = new Phaser.Game(config);
