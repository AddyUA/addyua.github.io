const config = {
  type: Phaser.AUTO, // webgl or canvas
  width: 304,
  height: 320,
  rows: 7,
  cols: 6,
  cards: ["Spades", "Clubs", "Diamonds", "Hearts"],
  scene: new GameScene()
};

const game = new Phaser.Game(config);
