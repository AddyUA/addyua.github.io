export const Methods = {
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.valOfSpAttacks = 3;
      this.valOfHeals = 2;
      this.turns = [];
    },
    attack() {
      this.damages.monster.specialAttack = 0;
      this.damages.player.heal = 0;

      let damage = this.calculateDamage(3, 10);
      this.damages.monster.attack = damage;
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: `Player HITS for ${damage}`
      });

      if (this.checkWin()) {
        return;
      }

      this.monsterAttack();
    },
    specialAttack() {
      if (this.valOfSpAttacks > 0) {
        this.damages.monster.attack = 0;
        this.damages.player.heal = 0;
        this.valOfSpAttacks--;

        let damage = this.calculateDamage(8, 15);
        this.damages.monster.specialAttack = damage;
        this.monsterHealth -= damage;

        this.turns.unshift({
          isPlayer: true,
          text: `Player special attack HITS for ${damage}`
        });

        if (this.checkWin()) {
          return;
        }

        this.monsterAttack();
      } else {
        return;
      }
    },
    heal() {
      if (this.valOfHeals > 0 && this.playerHealth <= 90) {
        this.valOfHeals--;
        this.damages.monster.attack = 0;
        this.damages.monster.specialAttack = 0;

        let health = this.calculateDamage(10, 16);
        this.damages.player.heal = health;
        this.playerHealth += health;

        this.turns.unshift({
          isPlayer: true,
          text: `Player healed for ${health}`
        });

        this.monsterAttack();
      } else {
        return;
      }
    },
    giveUp() {
      this.gameIsRunning = false;
      this.damages.monster.attack = 0;
      this.damages.monster.specialAttack = 0;
      this.damages.player.heal = 0;
      this.damages.player.attack = 0;
    },
    calculateDamage(minDmg, maxDmg) {
      return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
    },
    monsterAttack() {
      let damage = this.calculateDamage(6, 10);
      this.damages.player.attack = damage;
      this.playerHealth -= damage;

      this.turns.unshift({
        isPlayer: false,
        text: `Monster HITS for ${damage}`
      });

      this.checkWin();
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm(`You WON! Wanna Try Again?`)) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm(`You LOOSE! Wanna Try Again?`)) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
};
