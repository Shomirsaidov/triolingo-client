<template>
    <div class="">
  
  
  
        <div class="main_menu_tab">
            <div class="levels_tab">
                <div class="title_tab">
                    <button id="back_to_main_menu_button" @click="$router.back()">
                        <img src="../../svg/back.svg" alt="">
                    </button>
                    <h4>Выберите урок </h4>
                </div>

                <div class="space-y-2">
                    <div v-if="level_selected < $store.userData?.level" class="level2 mb-2" v-for="level in [1,2,3,4,5,6,7,8]">
                    <h4>Урок {{level}}</h4>
                    <button name="button_to_start_lesson" @click="() => $router.push(`/vocabulary/learn/${level_selected}-${level}`)" class="unlock_level2">
                        <img src="../../svg/next.svg" alt="next">
                    </button>
                    </div>
                    <div v-if="level_selected == $store.userData?.level">
                        <div class="level2" v-for="level in [1,2,3,4,5,6,7,8]">
                            <h4>Урок {{level}}</h4>
                            <button @click="$router.push(`/vocabulary/learn/${level_selected}-${level}`)" v-if="level <= $store.userData.lesson" class="unlock_level2">
                                <img src="../../svg/next.svg" alt="next">
                            </button>
                            <button v-else class="locked_level">
                                <img src="../../svg/lock.svg" alt="lock">
                            </button>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
  
  
  
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    name: 'Lessons Page',
    components: {
    },
    data: () => ({
        level_selected: null,
        levels: {
            'A1': 1,
            'A2': 2,
            'B1': 3
        }
    }),
    mounted() {
        this.level_selected = this.$route.params.level
    }
    
  }
  </script>
  
  
  <style lang="scss" scoped>
    // @import '../stylesheets/styles_level.css';
  


    *{
    margin: 0;
    padding: 0;
}
html{
    background-color: #fefefe;
    width: 393px;
    height: 852px;
}
body{
    padding: 72px 32px 0px 32px;
}
.red{
    color: #ff2400;
}
.green{
    color: #0B8800;
}
.black{
    color: #1e1e1e;
}
.white{
    color: #fefefe;
}
.grey{
    color: #eeeeee;
}
h1{
    font-family: Roboto;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: auto;
    color: #1e1e1e;
}
h2{
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: auto;
    color: #1e1e1e;
}
h3{
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: auto;
    color: #1e1e1e;
}
h4{
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: auto;
    color: #1e1e1e;
}
h5{
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: auto;
    color: #1e1e1e;
}
h6{
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: auto;
    color: #1e1e1e;
}
.main_menu_tab {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.levels_tab {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.title_tab{
    display: flex;
    align-items: center;
    justify-content: center;
}
#back_to_main_menu_button{
    border: none;
    background-color: #fefefe;
    outline: none;
    position: absolute;
    left: 32px;
}
.level2 {
    width: 301px;
    height: 44px;
    padding: 28px 12px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 69px;
    border: solid #7d7d7d;
    border-radius: 12px;
}
.unlock_level2{
    position: absolute;
    right: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background-color: #0B8800;
}
.locked_level{
    position: absolute;
    right: 50px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    background-color: #1e1e1e;
}

  
  </style>