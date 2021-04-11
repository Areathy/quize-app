<template>
  <div>
        <div>
            <h1>
                Simple Quiz
            </h1>
            <div>
                <div v-if="index < count">
                    <p class="text-2xl font-bold">
                        {{ questions[index].question }}
                    </p>
            <label
                v-for="choice,key in questions[index].choices"
                :key="choice.id"                    
                v-bind:class="[{'not-selected' : selectedAnswer === null},
                {'select' : choice.is_correct_choice === 0 && selectedId === choice.id },
                {'right-answer' : choice.is_correct_choice === 1 && selectedId === choice.id }]"
                    >
                        <input
                            type="radio"
                            name="choice"
                            :id="key"
                            class="hidden"
                            :value="choice.is_correct_choice"
                            @change="answered($event, choice.id, questions[index].points)"
                            :disabled="selectedAnswer !== null"
                        />
                        {{ choice.choice }}
                    </label>
                    <div>
                        <button
                            v-show="selectedAnswer != null && index < count-1"
                            @click="nextQuestion"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div v-else>
                    <h2>Congratulations you finished Before time!!!</h2>  
                    <p>Please wait a few seconds to view your result</p>                      
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import questions from "@/store/question.json";
import store from "@/store/index";

export default {
  name: 'Play',

created(){
    setTimeout( () =>{ 
        this.finishQuize();
        this.$router.push({ path: '/summary'})
    }, 120000);

},

    data() {
        return {
            index: 0,
            selectedAnswer: null,
            selectedId: null,
            correctAnswer: 0,   
            wrongAnswer: 0,
            questions,
            count: questions.length,
            totalPoints: 0,
            totalQuestionAnswered: 0,
        }
    },
    methods: {
        answered(e, id, point) { 
            this.selectedAnswer = Number(e.target.value);
            this.selectedId = id;
            
            if(this.selectedAnswer === 1) {
                this.correctAnswer++
                this.totalPoints += Number(point)
            }else {
                this.wrongAnswer++
            }
            this.totalQuestionAnswered++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = null
        },
        finishQuize() {
            const finalResult = {
                correctAnswer: this.correctAnswer,
                wrongAnswer: this.wrongAnswer,
                totalPoints: this.totalPoints,
                totalQuestionAnswered: this.totalQuestionAnswered
            }
            store.commit('storeResult', finalResult)
        }
    }
}
</script>

<style lang="scss" scoped>
    .select {
        background-color: pink;
    }

    .right-answer {
        background-color: green;
    }
    .not-selected:hover {
        background-color: yellow;
    }
</style>