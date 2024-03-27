<template>

    <div style="height: 100vh" class="flex justify-center items-center">
        <div class="" >
            <div>
                <img src="../assets/confetti.gif" width="200"/>
                <h4 class="text-green-800 text-center my-4 font-bold mb-4">
                    Урок {{ lesson_finished }} пройден !
                </h4>        
                <div class="flex justify-center">
                    <button @click="() => {
                            this.$store.state.cardCounter = 0
                            $router.push('/')
                        }"
                    :class="{'w-full bg-green-800 p-4 rounded-xl': true}">
                        <h5 class="white">Продолжить</h5>
                    </button>
                </div>
            </div>
        </div> 
    </div>

</template>


<script>

    import axios from 'axios'

    export default {
        name: 'Finish Lesson',
        props: ['lesson_finished'],
        data: () => ({
            token: JSON.parse(localStorage.triolingo).token
        }),
        async mounted() {
            await axios.get(`https://triolingo3.vercel.app/lessons/completed/${this.lesson_finished}?token=${this.token}`)
                .then(resp => {
                    console.log(resp.data)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }

</script>