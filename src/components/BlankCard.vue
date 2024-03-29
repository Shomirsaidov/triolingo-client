<template>
    


    <div class="lesson_tab">
        <div class="flex justify-between">
        <button @click="$router.back()">
            <img src="../svg/back.svg" alt="">
        </button>
        <h4 class="">Задача {{ $store.state.cardCounter + 1}}</h4>
        <h4 class=""></h4>
        </div>
        <h4>Дополните предложение</h4>
    </div>


    <div class="question_tab mt-4 ">
        <img src="../assets/girl_in_yellow.png" alt="girl_in_purple">
    </div>

    <div class="translate_tab">
        <h4>Lorem </h4>
        <div class="hiden_word">
            <h4 class="word" id="word">{{ answer }}</h4>
            <div class="line_for_hidden_word"></div>
        </div>
        <h4> dolor sit amet</h4>
    </div>

    <div class="translates" v-if="lessonData">
        <div @click="selectOption($event)" v-for="(option, i) in lessonData.options.split(',')" class="translate">
            <h6 id="word1" @click="selectOption($event)">{{ option }}</h6>
        </div>
       
    </div>

    <div class="fixed bottom-4 w-full pr-16 flex justify-center" >
        <div>
          <div v-if="started" class="p-2 px-4 bg-white border-t-2 mx-4 pb-4">
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
      buttonDisabled: true,
      mistake: '',
      answer: '',
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
    },
    methods: {
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
        next() {
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
  