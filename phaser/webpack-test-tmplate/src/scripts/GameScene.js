import Phaser from "phaser";
import config from "./config";
import { Card } from "./Card";

import table from "../assets/img/table.png";
import card from "../assets/img/card.png";
import spades from "../assets/img/spades.png";
import clubs from "../assets/img/clubs.png";
import diamonds from "../assets/img/diamonds.png";
import hearts from "../assets/img/hearts.png";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.image("table", table);
    this.load.image("card", card);

    this.load.image("cardSpades", spades);
    this.load.image("cardClubs", clubs);
    this.load.image("cardDiamonds", diamonds);
    this.load.image("cardHearts", hearts);
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
