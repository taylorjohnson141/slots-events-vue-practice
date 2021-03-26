<template>
  <Modal>
    <template  #NotCoolModal>
      <p class ='block' @click="decreaseCoolCount">{{message}}</p>
      <button class = 'coolButton' :disabled="isButtonDisabled" @click="makeCool">
        Change Cool Status
      </button>
    </template>
  </Modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Modal from './Modal.vue';

export default {
  name: 'NotCoolModals',
  components: {
    Modal,
  },
  data() {
    return {
      message: 'Not cool',
      isCool: false,
    };
  },
  computed: {
    ...mapGetters(['isButtonDisabled']),
  },
  methods: {
    makeCool() {
      if (!this.isCool) {
        this.message = 'I still don\'t think you\'re super cool';
        this.isCool = true;
        this.increaseCoolCount();
      } else {
        this.message = 'That wasn\'t cool';
        this.isCool = false;
        this.decreaseCoolCount();
        this.disableButton();
      }
    },
    ...mapActions([
      'increaseCoolCount',
      'decreaseCoolCount',
      'disableButton',
    ]),
  },
};
</script>

<style>
.coolButton{
  border-radius:40px;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  cursor: pointer;
  background-color:#753a88;
  color: whitesmoke;
}
.coolButton:disabled{
   text-decoration: line-through;
  color: whitesmoke;
}

.block{
  display: block;
  padding: initial;
}
</style>
