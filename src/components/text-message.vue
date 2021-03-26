<template>
<div>
  <div v-if="message" v-on="hideMessage()">
    <div class = 'box' v-if="message">
      {{message}}!!
      <p class ='block'>
      You have
      {{coolCount}}
      cool points
      </p>
  </div>
  </div>
  <div v-if="isWon"  v-on="hideMessage()">
    YOU WON THE GAME CONGRATS!!!
    click <button @click="losePoints"> Click Me </button> to get your prize
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../store';

export default {
  name: 'text-message',
  props: ['message'],
  data() {
    return {
      timeOut: 4000,
    };
  },
  computed: {
    ...mapGetters([
      'coolCount', 'isWon',
    ]),
  },
  methods: {
    hideMessage() {
      if (this.coolCount === 7) {
        this.timeOut = 100000;
      }
      setTimeout(() => {
        store.dispatch('changeMessage', '');
      }, this.timeOut);
    },
  },
  losePoints() {
    store.dispatch('decreaseCoolCountLots');
  },
};
</script>

<style>
.box{
  box-shadow:rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;;
  position: absolute;
  padding: 20px;
  right: 10rem;
  top: 35rem;
  border-radius: 10px;
  background-color: lawngreen;
}


</style>
