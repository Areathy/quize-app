import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        result: {
            correctAnswer: 0,
            wrongAnswer: 0,
            totalPoints: 0,
            totalQuestionAnswered: 0,
            phoneNumber: null,
        },
        info: {
          phoneNumber: null,
          country: null,
        }
    },
    
    mutations: {
      storeResult (state, payload) {
        state.result = {...payload}
      },
      storeInfo (state, payload) {
        state.info = {...payload}
      }
    },
    getters: {
      getResult: state => {
        return {...state.result}
      },
      getInfo: state => {
        return {...state.info}
      }
    }
})

export default store;