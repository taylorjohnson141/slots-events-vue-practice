<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/coolModals">Cool</router-link>
      <router-link to="/NotCoolModals">Not Cool</router-link>
    </div>
    <router-view/>
    <text-message :isWon ="isWon" :message ="message"/>
  </div>
</template>
<script>
import textMessage from '@/components/text-message.vue';
import { mapGetters } from 'vuex';
import store from './store';

export default {
  name: 'App',
  components: {
    textMessage,
  },
  computed: {
    ...mapGetters([
      'message', 'isWon',
    ]),
  },
  method: {
    addCoolPoint() {
      store.dispatch('increaseCoolCount');
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

#nav {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 30px;

  a {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    border-bottom: 1px solid red;

    &.router-link-exact-active {
      color: blue;
      border-bottom: 1px solid blue;

    }
  }
}
</style>
