<template>
  <div>
  <Modal>
    <template #coolModal>
    I am a <p @click.once="addCoolPoint">cool</p> Modal
    <button @click="WinGame">Don't push this button</button>
    </template>
  </Modal>
  </div>
</template>

<script>
import store from '../store';
import Modal from './Modal.vue';

export default {
  name: 'CoolModals',
  components: {
    Modal,
  },
  methods: {
    addCoolPoint() {
      store.dispatch('increaseCoolCount');
    },
    WinGame() {
      store.dispatch('winGame');
    },
  },
};
</script>

<style>

</style>
