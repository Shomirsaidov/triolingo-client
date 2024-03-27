<template>
  
  
  
  
  <div v-if="loading" style="height: 100vh" class="w-full h-full flex flex-col justify-center items-center">
    
    <div id="loader"></div>
    <h5 class="mt-4">Doleap Team & Shomirsaidov</h5>
    
  </div>

  


  <div v-if="lessonData">
    
  
          <div v-for="(card,index) in lessonData">
            <CardTemp v-if="$store.state.cardCounter == index" :type="card.type"/>
          </div>


          <div v-if="$store.state.cardCounter == lessonData.length">
            <Finish :lesson_finished="level_selected"/>
          </div>


  
  
    </div>
  </template>
  
  <script>

  import axios from 'axios'
  import CardTemp from '../components/CardTemp.vue'
  import Finish from '../components/Finish.vue'
  
  export default {
    name: 'Lesson Page',
    components: {
        CardTemp, Finish
    },
    data: () => ({
        level_selected: null,
        token: JSON.parse(localStorage.triolingo).token,
        lessonData: null, 
        loading: true       
    }),

    async mounted() {
      console.log(this.$route.params.lesson_id)
      console.log('helllllooooo')
        this.level_selected = this.$route.params.lesson_id
        await axios.get(`https://triolingo3.vercel.app/lessons/${this.level_selected}?token=${this.token}`)
          .then(resp => {
            this.$store.state.lessonData = resp.data
            this.lessonData = resp.data
            console.log(this.$store.state.lessonData)
            this.loading = false
          })
          .catch(e => {
            console.log('oops !')
          }) 
    },
   
    
  }
  </script>
  
  
  <style lang="scss">
  
  

  #loader {
    height: 70px;
    width: 70px;
    border-left: 7px solid green;
    border-bottom: 1px solid green;
    border-right: 1px solid green;
    border-top: 7px solid greeny;
    border-radius: 50%;
    animation: spinner 0.5s linear infinite;
  }
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }


  </style>