class Card extends Phaser.GameObjects.Sprite {
  constructor(scene, value, position) {
    super(scene, position.x, position.y, `card${value}`);
    this.scene = scene;
    this.value = value;
    this.setOrigin(0, 0);
    this.scene.add.existing(this);
    this.setInteractive();
    this.click = true;

    // this.on("pointerdown", this.open, this);
  }

  close() {
    // this.visible = !this.visible;
    // this.click = false;
    console.log("close");
    this.setTexture("card");
  }
  open() {
    console.log("open");
    // this.click = true;
    this.setTexture(`card${this.value}`);
  }
}
