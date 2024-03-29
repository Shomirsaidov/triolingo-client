<template>
  <div class="">


    <div class="main_menu_tab">

      <div v-if="!profileData" style="height:75vh" class="w-full h-full flex flex-col justify-center items-center">
    
        <div id="loader"></div>
        
      </div>


      <div class="levels_tab" v-if="profileData">
          <h4>Словарь</h4>
          <div class="level shadow-lg">
              <h4>Cлова A1</h4>
              <button v-if="profileData.level == 'A1' || profileData.level == 'A2' || profileData.level == 'B1'" @click="$router.push(`/vocabulary/A1`)" class="unlock_level px-4 py-2">
                  <img src="../../svg/next.svg" alt="next" >
              </button>
              <button v-else class="locked_level px-4 py-2">
                <img src="../../svg/lock.svg" alt="lock">              
              </button>
          </div>
          <div class="level shadow-lg">
              <h4>Слова A2</h4>
              <button v-if="profileData.level == 'A2' || profileData.level == 'B1' " @click="$router.push(`/vocabulary/A2`)" class="unlock_level px-4 py-2">
                  <img src="../../svg/next.svg" alt="next">
              </button>
              <button v-else class="locked_level px-4 py-2">
                <img src="../../svg/lock.svg" alt="lock">              
              </button>
          </div> 
          <div class="level shadow-lg">
              <h4>Слова B1</h4>
              <button v-if="profileData.level == 'B1'" @click="$router.push(`/vocabulary/B1`)" class="unlock_level px-4 py-2">
                  <img src="../../svg/next.svg" alt="next">
              </button>
              <button v-else class="locked_level px-4 py-2">
                <img src="../../svg/lock.svg" alt="lock">              
              </button>
          </div>
      </div>
      </div>
        


  </div>
</template>

<script>
// bismillah
import axios from 'axios'

export default {
  name: 'Profile Page',
  components: {
  },
  data: () => ({
    accessToken: null,
    profileData: null
    
  }),
  methods: {
    isRegistered() {
      if(localStorage.triolingo === undefined) {
        return false
      } 
      return true
    }
  },
  async mounted() {
    if(this.isRegistered()) {
      this.accessToken = JSON.parse(localStorage.triolingo).token
      await axios.get('https://triolingo3.vercel.app/user?token=' + this.accessToken)
      .then(response => {
        this.profileData = response.data      
        this.$store.userData = response.data
      })
      .catch(error => {
        console.error('Error:', error);
      });
    } else {
      this.$router.push('/register')
    }
  },

  computed: {}
}
</script>


<style lang="scss" scoped>
  @import '../../stylesheets/styles_main_menu.css';


</style>
