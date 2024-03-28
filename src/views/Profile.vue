<template>
  <div class="">


    <div class="main_menu_tab">

      <div class="profile_tab shadow-lg">
          <!-- <img src="../assets/users_avatar.png" alt="photo of user"> -->
          <div class="bg-green-600 p-4 rounded-full text-white font-black">{{ getNameInitials }}</div>
          <div class="username">
              <h5 class="green">Здравствуйте</h5>
              <h4 v-if="profileData">{{ profileData.name }}</h4>
          </div>
      </div>


      <div class="levels_tab" v-if="profileData">
          <h4>Уровни</h4>
          <div class="level shadow-lg">
              <h4>Уровень Deutsch A1</h4>
              <button v-if="profileData.level == 'A1' || profileData.level == 'A2' || profileData.level == 'B1'" @click="$router.push(`/lessons/A1`)" class="unlock_level px-4 py-2">
                  <img src="../svg/next.svg" alt="next" >
              </button>
              <button v-else class="locked_level px-4 py-2">
                <img src="../svg/lock.svg" alt="lock">              
              </button>
          </div>
          <div class="level shadow-lg">
              <h4>Уровень Deutsch A2</h4>
              <button v-if="profileData.level == 'A2' || profileData.level == 'B1' " @click="$router.push(`/lessons/A2`)" class="unlock_level px-4 py-2">
                  <img src="../svg/next.svg" alt="next">
              </button>
              <button v-else class="locked_level px-4 py-2">
                <img src="../svg/lock.svg" alt="lock">              
              </button>
          </div> 
          <div class="level shadow-lg">
              <h4>Уровень Deutsch B1</h4>
              <button v-if="profileData.level == 'B1'" @click="$router.push(`/lessons/B1`)" class="unlock_level px-4 py-2">
                  <img src="../svg/next.svg" alt="next">
              </button>
              <button v-else class="locked_level px-4 py-2">
                <img src="../svg/lock.svg" alt="lock">              
              </button>
          </div>
          <h4>Скоро...</h4>
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

  computed: {
    getNameInitials() {
      
      if(this.profileData) {
        let a = this.profileData.name.split(' ')
        console.log(a)
        if(a.length > 1) {
          return a[0][0] + a[1][0]
        } else {
          return a[0][0] + a[1]
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../stylesheets/styles_main_menu.css';


  


</style>
