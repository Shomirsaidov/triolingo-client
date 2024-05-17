<template>
  <div class="lesson_tab">
    <div class="flex justify-between">
      <button @click="$router.back()">
        <img src="../svg/back.svg" alt="">
      </button>
      <h4 class="">Задача {{ $store.state.cardCounter  + 1}}</h4>
      <h4 class=""></h4>
    </div>
    <h4>Переведите предложение</h4>
  </div>

  <div class="question_tab mt-2">
    <img src="../assets/girl_in_purple.png" alt="girl_in_purple">
    <div class="">
      <h5 class="rounded-xl mt-4 border-2 p-3">{{ lessonData.question }}</h5>
    </div>
  </div>

  <div class="translate_tab">
    <h4 @click="removePuzzle(index)" v-if="lessonData" v-for="(word,index) in puzzle">{{ word }}</h4>
  </div>

  <div class="variations" v-if="lessonData">
    <div v-for="(word, index) in lessonData[$store.state.cardCounter].options.split(',')" :key="index" class="variation"
        @click="addPuzzle(word)">
      <h6>{{ word }}</h6>
    </div>
  </div>


  <div class="fixed bottom-4 w-full pr-16 flex justify-center" >
        <div>
          <div v-if="started" class="p-2 px-4 bg-white border-t-2 px-4 pb-4">
            <h5 v-if="mistake.length > 0" class=" text-red-700 font-bold">{{ mistake }}</h5>
            <h5 v-if="mistake.length == 0 && started" class="text-green-800 font-bold ">Правильно !</h5>        
          </div>
          <div class="flex justify-center">
            <button @click="next" :disabled="buttonDisabled" 
            :class="{ 'disabled': buttonDisabled , 'next_task_button': true}">
                <h5 class="white">Продолжить</h5>
            </button>
          </div>
        </div>
  </div> 


  
</template>

<script>
export default {
  data: () => ({
    lessonData: null,
    puzzle: [],
    buttonDisabled: true,
    mistake: '',
    started: false,
    rightAnswerGot: false
  }),
  computed: {
    mistaken() {
      if(this.mistake.length > 0) {
        return true
      } 
    }
  },
  mounted() {
    this.lessonData = this.$store.state.lessonData[this.$store.state.cardCounter];
    console.log(this.lessonData[this.$store.state.cardCounter].options.split(','))
  },
  methods: {
    addPuzzle(word) {
      this.puzzle.push(word);
      this.buttonDisabled = this.puzzle.length === 0;
    },
    removePuzzle(index) {
      this.puzzle.splice(index, 1);
      this.buttonDisabled = this.puzzle.length === 0;
    },
    next() {
      this.started = true
      if(this.puzzle.join('').toLowerCase() !== this.lessonData[this.$store.state.cardCounter].answer.toLowerCase()) {
        this.mistake = this.lessonData[this.$store.state.cardCounter].answer
        document.querySelector('.next_task_button').style.background = 'red'
         if ('vibrate' in navigator) {
          navigator.vibrate(200);
        }

      } else {
        document.querySelector('.next_task_button').style.background = '#0B8800'

        this.mistake = ''
        if(this.rightAnswerGot) {
          this.$store.state.cardCounter += 1
        } else {
          this.rightAnswerGot = true
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import '../stylesheets/styles_lessons.css';

.disabled {
  opacity: 0.4;
}
</style>
