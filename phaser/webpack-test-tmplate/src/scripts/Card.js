import Phaser from "phaser";

export class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, value) {
    super(scene, 0, 0, `card${value}`);
    this.scene = scene;
    this.value = value;
    this.scene.add.existing(this);
    this.setInteractive();
    this.click = true;
    this.scale = 0.4;

    this.showAnimation();
  }

  showAnimation() {
    this.scene.tweens.add({
      targets: this,
      scale: 1,
      ease: "Linear",
      duration: 500,
      onComplete: () => {}
    });
  }

  close() {
    this.setTexture("card");
  }
  open() {
    this.setTexture(`card${this.value}`);
  }
}
