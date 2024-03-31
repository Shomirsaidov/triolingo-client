<template>



    <div class="log_in_tab">
        <div class="log_in_text">
            <h2 class="text-xl font-bold">Создание аккаунта</h2>
            <h6>Придумайте логин и пароль</h6>
        </div>

        <div class="log_in_input_tab w-full">
          <div class="log_in_input_tab w-full">
              <h4>Имя</h4>
              <input v-model="username" type="text" name="login" class="log_in_input" placeholder="Введите полное имя">
              <h5 class="red" id="login_error"></h5>
          </div>
          <div class="log_in_input_tab w-full">
              <h4>Пароль</h4>
              <input v-model="password" type="password" name="password" class="log_in_input" placeholder="Введите пароль">
              <h5 class="red" id="password_error"></h5>
          </div>
          <h5 class="red" id="login_error">{{ error }}</h5>
          <button @click="register" class="log_in_button w-full">
            <div v-if="loading" style="height: 100vh" class="w-full h-full flex flex-col justify-center items-center">
                <div id="loader"></div>
              </div>
              <h5 class="white" v-if="!loading">Продолжить</h5>
          </button>
          <button class="w-full text-center mt-4">
            <h6 @click="$router.push('/login')">Войти</h6>
          </button>

      </div>



  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Login Page',
  components: {
  },
  data: () => ({
    username: '',
    password: '',
    error: '',
    loading: false
  }),
  methods: {
    async register() {
      if(this.username.length && this.password.length) {
        this.loading = true
        await axios.get(`https://triolingo3.vercel.app/register?username=${this.username}&password=${this.password}`)
        .then(resp => {
          localStorage.setItem('triolingo', JSON.stringify(resp.data))
          
          this.$router.push('/')
        }) 
        .catch(e => {
          this.error = "Пользователь уже существует !"
          
        })
        .finally(() => this.loading = false)
      } else {
        this.error = "Заполните все поля !"
      }
    }
  }
}
</script>


<style lang="scss">
  @import '../stylesheets/styles_log_in.css';





</style>
