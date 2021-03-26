<template>
  <div class="home">
    <Modal>
      <p>
        So you think you're cool?
      </p>
      <div @click="removeCoolPoint">
      This is your <p @click.stop.once="addCoolPoint"> cool </p> count :<h1>{{coolCount}}</h1>
      You need 7  <p @click.stop.once="addCoolPoint"> cool </p> points to win
      <p class = 'block'> And -3 to lose</p>
    </div>
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from '@/components/Modal.vue';
import { mapGetters } from 'vuex';
import store from '../store';

export default {
  name: 'Home',
  components: {
    Modal,
  },
  computed: {
    ...mapGetters(['coolCount']),
  },
  methods: {
    addCoolPoint() {
      store.dispatch('increaseCoolCount');
    },
    removeCoolPoint() {
      store.dispatch('decreaseCoolCount');
    },
  },
};
</script>
<style lang="sass" >
  p
   display: inline
  div
    font-size: 1.75rem
</style>
