<template>
  <div>
    <section class="row">
      <div class="small-6 columns fix">
        <h1 class="text-center">PLAYER</h1>
        <div class="attack-score">
          <span
            style="color: #ff3f43"
            v-if="damages.player.attack > 0"
          >hit: {{ damages.player.attack }}</span>
          <span
            style="color: #76ff7e"
            v-if="damages.player.heal > 0"
          >heal: {{ damages.player.heal }}</span>
        </div>
        <div class="healthbar">
          <div class="health text-center" :style="{width: playerHealth + '%'}">{{ playerHealth }}</div>
        </div>
      </div>
      <div class="small-6 columns fix">
        <h1 class="text-center">MONSTER</h1>
        <div class="attack-score">
          <span
            style="color: #3a137a"
            v-if="damages.monster.attack > 0"
          >hit: {{ damages.monster.attack }}</span>
          <span
            style="color: #ff9a2b"
            v-if="damages.monster.specialAttack > 0"
          >special: {{ damages.monster.specialAttack }}</span>
        </div>
        <div class="healthbar">
          <div class="health text-center" :style="{width: monsterHealth + '%'}">{{ monsterHealth }}</div>
        </div>
      </div>
    </section>
    <transition name="fade" mode="out-in">
      <section class="row controls" v-if="!gameIsRunning" key="start">
        <div class="small-12 columns">
          <button id="start-game" @click="startGame">START NEW GAME</button>
        </div>
      </section>

      <section class="row controls" v-else key="play">
        <div class="small-12 columns">
          <button id="attack" @click="attack">ATTACK</button>
          <button id="special-attack" @click="specialAttack">SPECIAL ATTACK ({{valOfSpAttacks}})</button>
          <button id="heal" @click="heal">HEAL ({{valOfHeals}})</button>
          <button id="give-up" @click="giveUp">GIVE UP</button>
        </div>
      </section>
    </transition>

    <section class="row log" v-if="turns.length > 0">
      <div class="small-12 columns">
        <ul>
          <transition-group name="slide">
            <li
              v-for="turn in turns"
              :key="turn"
              :class="{'player-turn': turn.isPlayer, 'monster-turn': !turn.isPlayer}"
            >{{turn.text}}</li>
          </transition-group>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      gameIsRunning: false,
      valOfSpAttacks: 3,
      valOfHeals: 2,
      turns: [],
      damages: {
        player: {
          attack: 0,
          heal: 0
        },
        monster: {
          attack: 0,
          specialAttack: 0
        }
      }
    };
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
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 0.5s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
