<template>
    


    <div class="lesson_tab">
        <div class="flex justify-between">
        <button @click="$router.back()">
            <img src="../svg/back.svg" alt="">
        </button>
        <h4 class="">Задача {{ $store.state.cardCounter + 1 }}</h4>
        <h4 class=""></h4>
        </div>
        <h4>Что он сказал ?</h4>
    </div>


    <div class="question_tab mt-4">
        <img src="../assets/guy_in_black.png" alt="girl_in_purple">
        <div class="question_and_answer_tab">
        <div class="audios_tab" v-if="lessonData">
            <div @click="speak(lessonData.answer,1)" class="audio">
                <img src="../svg/audio.svg" alt="audio icon">
            </div>
            <div @click="speak(lessonData.answer, 0.7)" class="audio_slow">
                <img src="../svg/audio_slow.svg" alt="">
            </div>  
        </div>
            <div class="answer">
                <h6 id="word"></h6>
                <div class="line"></div>
            </div>
        </div>
    </div>


    <div class="translates" v-if="lessonData">
        <div @click="selectOption($event)" v-for="(option, i) in lessonData.options.split(',')" class="translate">
            <h6 id="word1" @click="selectOption($event)">{{ option }}</h6>
        </div>
       
    </div>

    <div class="fixed bottom-4 w-full pr-16 flex justify-center" >
        <div>
          <h4 v-if="mistake.length > 0" class="pl-4 text-red-700 font-bold mb-4">{{ mistake }}</h4>
          <h4 v-if="mistake.length == 0 && started" class="pl-4 text-green-800 font-bold mb-4">Правильно !</h4>        
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
      started: false,
      lessonData: null,
      buttonDisabled: true,
      mistake: '',
      answer: '',
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

    },
    methods: {
        speak(text, pace) {
          console.log('speak !')
          const utterance = new SpeechSynthesisUtterance(text);
          utterance.lang = 'de-DE'; 
          utterance.rate = pace;
          window.speechSynthesis.speak(utterance);
        },
        selectOption(e) {

          this.buttonDisabled = false

            this.clearOthers()

            if (e.target.tagName.toLowerCase() === 'h6') {
              e.target.style.color = 'green';
              e.target.parentNode.style.borderColor = 'green'
              this.answer = e.target.textContent
            } else {
              e.target.style.borderColor = 'green'
              e.target.children[0].style.color = 'green'
              this.answer = e.target.children[0].textContent
            }

        },
        clearOthers() {
            const translateElements = document.querySelectorAll('.translates h6');
            translateElements.forEach(element => {
                element.style.color = 'black';
            });

            const translateElements2 = document.querySelectorAll('.translates div');
            translateElements2.forEach(element => {
                element.style.borderColor = '#626262';
            });
        },
        next(e) {

          this.started = true
        
            if(this.answer.toLowerCase().trim() !== this.lessonData.answer.toLowerCase()) {
              this.mistake = this.lessonData.answer
              document.querySelector('.next_task_button').style.background = 'red'

            } else {
              this.mistake = ''
              document.querySelector('.next_task_button').style.background = '#0B8800'

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
  