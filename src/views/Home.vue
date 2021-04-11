<template>
  <div >
    <select v-model="country" @click="fetchCountries()">
      <option v-for="country in countries" :key="country.name" value: country.name >{{country.name}}</option>
    </select>







    <input
      type="tel"
      placeholder="(123) 456-7890"
      v-model="phone_number"
      maxlength="16"
      @input="enforcePhoneFormat()"
    /> {{phone_number}}
    <router-link to="/play">play</router-link>


    <button @click=" saveContact()">save</button>
  </div>
</template>

<script>
import store from "@/store/index";
import axios from 'axios'

export default {
  name: 'Home',

  data() {
   return {
     phone_number: null,
     country: undefined,
     countries: null
   };
 },

methods: {

  fetchCountries() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
         this.countries = res.data;
      })
      .catch(error => console.log(error))
  },

  enforcePhoneFormat() {
    let x = this.phone_number
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

    this.phone_number = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  },

    saveContact() {
            const contactLocation = {
          phone_number: this.phone_number,
          country: this.country
      }
            store.commit('storeInfo', contactLocation)
            this.$router.push({ path: '/play'})
        }
  }
}
</script>
