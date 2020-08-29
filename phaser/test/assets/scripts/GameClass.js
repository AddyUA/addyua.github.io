class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.image("table", "assets/img/table.png");
    this.load.image("card", "assets/img/card.png");

    this.load.image("cardSpades", "assets/img/spades.png");
    this.load.image("cardClubs", "assets/img/clubs.png");
    this.load.image("cardDiamonds", "assets/img/diamonds.png");
    this.load.image("cardHearts", "assets/img/hearts.png");
  }

  create() {
    this.createTable();
    this.createCards();
    this.initCards();
  }

  initCards() {
    let positions = this.getCardPositions();

    this.cards.forEach(card => {
      let position = positions.pop();
      card.setPosition(position.x, position.y);
    });
  }

  createTable() {
    this.add.sprite(0, 0, "table").setOrigin(0, 0);
  }

  createCards() {
    this.cards = [];

    for (let value of config.cards) {
      for (let i = 0; i < 9; i++) {
        this.cards.push(new Card(this, value));
      }
    }

    this.input.on("gameobjectdown", this.onCardClicked, this);
  }

  onCardClicked(_pointer, card) {
    if (card.click) {
      for (let i = 0; i < this.cards.length; i++) {
        if (
          (this.cards[i].value === card.value && this.cards[i].y === card.y) ||
          (this.cards[i].value === card.value && this.cards[i].x === card.x)
        ) {
          // if (
          //   this.cards[i].x > card.x + 50.5 ||
          //   this.cards[i].x < card.x - 50.5 ||
          //   this.cards[i].y > card.y + 45.5 ||
          //   this.cards[i].y < card.y - 45.5
          // ) {
          //   continue;
          // }
          this.cards[i].close();
        }
      }
      card.click = false;
    } else {
      for (let i = 0; i < this.cards.length; i++) {
        if (
          (this.cards[i].value === card.value && this.cards[i].y === card.y) ||
          (this.cards[i].value === card.value && this.cards[i].x === card.x)
        ) {
          this.cards[i].open();
        }
      }
      card.click = true;
    }
  }

  getCardPositions() {
    const positions = [];
    const cardTexture = this.textures.get("card").getSourceImage();
    const cardWidth = cardTexture.width + 24.5;
    const cardHeight = cardTexture.height + 19.5;
    const offsetX =
      this.sys.game.config.width - cardWidth * config.cols + cardWidth / 2;
    const offsetY =
      this.sys.game.config.height - cardHeight * config.rows + cardHeight / 2;

    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        positions.push({
          x: offsetX + col * cardWidth,
          y: offsetY + row * cardHeight
        });
      }
    }
    return Phaser.Utils.Array.Shuffle(positions);
  }
}
