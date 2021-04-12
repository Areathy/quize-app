<template>
    <div class="page-body">
        <h2>Welldone!!! <br>hope the whetther is great in <span>{{ getInfo.country }}</span></h2>
        <div class="summary">
            <h5>You passed: <span>{{ getResult.correctAnswer }} questions</span></h5>
            <h5>You failed: <span>{{ getResult.wrongAnswer }} questions</span></h5>
            <h5>You attempted: <span>{{ getResult.totalQuestionAnswered }} questions</span></h5>
            <h5>You scored: <span>{{ getResult.totalPoints }} points</span></h5>
        </div>
        <button @click="resetQuiz">
            Play again
        </button>
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

<style lang="scss" scoped>
.page-body{
    margin-top: 7rem;
    .summary {
        background-color: rgb(224, 241, 245);
        border: 1px solid $azure;
        border-radius: 0.3rem;
        color: $azure-read;
        font-size: 1.5rem;
    }
    button {
        margin-top: 1rem;
        width: 10rem;
        height: 2.5rem;
        background-color: $white;
        border: 1px solid $azure;
        border-radius: 0.3rem;
        color: $azure-read;
  }
    button:hover {
        @include hovering;
    }  
}
    
</style>>