<template>


    <div class="mb-4">
        <div class="flex justify-between">
            <button @click="$router.back()">
                <img src="../../svg/back.svg" alt="">
            </button>
            <h4 class="font-black">Словарь</h4>
            <h4 class=""></h4>
        </div>
    </div>



    <div v-if="!lessonData" style="height:75vh" class="w-full h-full flex flex-col justify-center items-center">
        
        <div id="loader"></div>
        
    </div>    
    <div v-else>
        <div v-for="word in lessonData" class="flex justify-between p-4 border-b-2">
            <div @click="speak(word.word)" class="flex items-center space-x-4">
                <img src="../../svg/audio.svg" alt="audio icon">
                <h5 class="font-bold">{{ word.word }}</h5>
            </div>
            <h5>{{ word.translation }}</h5>
            
        </div>
    </div>

    <div v-if="lessonData !== null && lessonData.length == 0" style="height:75vh" class="w-full h-full flex flex-col justify-center items-center">
        <h1 class="text-xl font-black">В этом разделе нет новых слов !</h1>
    </div>



</template>

<script>

    import axios from 'axios'

    export default {
        data: () => ({
            token: JSON.parse(localStorage.triolingo).token,
            lessonData: null
        }),
        methods: {
            speak(text) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'de-DE'; 
                window.speechSynthesis.speak(utterance);
            },
        },
        computed: {
            lesson_id() {
                return this.$route.params.lesson_id
            }
        },
        async mounted() {
            await axios.get(`https://triolingo3.vercel.app/vocabulary/${this.lesson_id}?token=${this.token}`)
                .then(resp => {
                    console.log(resp.data)
                    this.lessonData = resp.data
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

</script>


<style scoped>

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