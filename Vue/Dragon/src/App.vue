<template>
  <div style="padding: 25px">
    <section class="row">
      <div class="small-6 columns fix">
        <div class="center-element">
          <img src="./img/knight.png" alt="knight" class="center-element__img" />
        </div>
        <div class="attack-score">
          <transition name="fade">
            <span
              style="color: #3a137a"
              v-if="damages.player.attack > 0"
            >hit: {{ damages.player.attack }}</span>
          </transition>
          <transition name="fade">
            <span
              style="color: #55bb5c"
              v-if="damages.player.heal > 0"
            >heal: {{ damages.player.heal }}</span>
          </transition>
        </div>
        <div class="healthbar">
          <div
            class="health health-knight center-element"
            :style="{width: playerHealth + '%'}"
          >{{ playerHealth }}</div>
        </div>
      </div>
      <div class="small-6 columns fix">
        <div class="center-element">
          <img src="./img/monster.png" alt="knight" class="center-element__img" />
        </div>
        <div class="attack-score">
          <transition name="fade">
            <span
              style="color: #ff3f43"
              v-if="damages.monster.attack > 0"
            >hit: {{ damages.monster.attack }}</span>
          </transition>
          <transition name="fade">
            <span
              style="color: #ff9a2b"
              v-if="damages.monster.specialAttack > 0"
            >special: {{ damages.monster.specialAttack }}</span>
          </transition>
        </div>
        <div class="healthbar">
          <div
            class="health health-mosnter center-element"
            :style="{width: monsterHealth + '%'}"
          >{{ monsterHealth }}</div>
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
import { Methods } from "./Methods";
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
  mixins: [Methods]
};
</script>

<style>
/* ------- FADE ANIMATION ------- */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}
/* ------- SLIDE ANIMATION ------- */
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
