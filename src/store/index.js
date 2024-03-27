import { createStore } from 'vuex'

export default createStore({
  state: {
      userData: null,
      cardCounter: 0,
      lessonData: [{
        "id": 1,
        "task": "Переведите предложение",
        "question": "Hallo, mein Freund",
        "answer": "Привет мой друг",
        "options": "привет,как,мой,день,друг",
        "type": "puzzle",
        "lesson": "A1-1"
    }, {
        "id": 2,
        "task": "Переведите слово",
        "question": "Milch",
        "answer": "Молоко",
        "options": "солнце,рука,молоко",
        "type": "translate",
        "lesson": "A1-1"
    }, {
        "id": 3,
        "task": "Что он сказал",
        "question": "speech.mp3, speech_slow.mp3",
        "answer": "lorem",
        "options": "lorem,lorum,loro",
        "type": "audio",
        "lesson": "A1-1"
    }, {
        "id": 4,
        "task": "Дополните предложение",
        "question": "Lorem ? dolor sit amet",
        "answer": "ipsum",
        "options": "chipsum,pupsum,ipsum",
        "type": "blank",
        "lesson": "A1-1"
    }, {
        "id": 5,
        "task": "Послушайте",
        "question": "audio.mp3",
        "answer": "Wie geht es dir",
        "options": "geht,wie,eich,es,weich,dir",
        "type": "audio_puzzzle",
        "lesson": "A1-1"
    }]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
