<template>
    <div>
      <h2>Results</h2>
      <div>
          <p>
              Correct Answers:
              <span>{{ getResult.correctAnswer }}</span>
          </p>
          <p>
              Wrong Answers:
              <span>{{ getResult.wrongAnswer }}</span>
          </p>
          <p>
              Total Question Answers:
              <span>{{ getResult.totalQuestionAnswered }}</span>
          </p>
          <p>
              Point accumulated:
              <span>{{ getResult.totalPoints }}</span>
          </p>
          <p>
              Number:
              <span>{{ getInfo.phone_number }}</span>
          </p>
          <p>
              Country:
              <span>{{ getInfo.country }}</span>
          </p>
      </div>
      <div>
          <button @click="resetQuiz">
              Play again
          </button>
      </div>
  </div>
</template>

<script>
import store from "@/store/index";
import { mapGetters } from "vuex";

export default {
    name: 'Summary',
    
    computed: {
      getResult() {
        return store.getters.getResult
      },
      getInfo() {
        return store.getters.getInfo
      }
    },
    methods: {
        resetQuiz() {
            this.$router.push({ path: '/play'})
        }
    }
}
</script>

<style>

</style>