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
    // todo
    this.coordinates = this.getCardPositions();
  }

  createTable() {
    this.add.sprite(0, 0, "table").setOrigin(0, 0);
  }

  createCards() {
    this.cards = [];
    let positions = this.getCardPositions();

    Phaser.Utils.Array.Shuffle(positions);

    for (let value of config.cards) {
      for (let i = 0; i < 10; i++) {
        this.cards.push(new Card(this, value, positions.pop()));
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
    const cardWidth = cardTexture.width + 24;
    const cardHeight = cardTexture.height + 19;
    const offsetX = this.sys.game.config.width - cardWidth * config.cols + 10;
    const offsetY = this.sys.game.config.height - cardHeight * config.rows + 8;

    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        positions.push({
          x: offsetX + col * cardWidth,
          y: offsetY + row * cardHeight
        });
      }
    }
    return positions;
  }
}
