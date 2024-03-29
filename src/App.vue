<template>
  <Navigator v-if="compWithNav"/>
  <router-view/>
</template>



<script>

  import { useRouter } from 'vue-router';
  import Navigator from './components/Navigator.vue'

  export default {
    data: () => ({
      path: useRouter().currentRoute
    }),
    mounted() {
      
    },
    components: {Navigator},
    computed: {
      compWithNav() {

        console.log(this.path)
        if(this.path.path.startsWith('/start')) {
          return false
        } else {
          return true
        }
      }
    }
  }

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
