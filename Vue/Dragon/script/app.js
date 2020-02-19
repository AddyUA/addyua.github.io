new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    valOfSpAttacks: 3,
    valOfHeals: 2,
    turns: []
  },
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
      let damage = this.calculateDamage(3, 10);
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
        this.valOfSpAttacks--;

        let damage = this.calculateDamage(8, 15);
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

        let health = this.calculateDamage(10, 16);
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
    },
    calculateDamage(minDmg, maxDmg) {
      return Math.max(Math.floor(Math.random() * maxDmg) + 1, minDmg);
    },
    monsterAttack() {
      let damage = this.calculateDamage(6, 10);
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
});
