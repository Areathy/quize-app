<template>
  <div class="page-body">
    <img src="../assets/img1.jpg" />
    <div class="phone_number-div">
      <input
        type="tel"
        class="phone-number"
        placeholder="Phone Number"
        v-model="phone_number"
        @input="enforcePhoneFormat()"
      />
    </div>
    <br>
    <div class="countries">
      <label for="cars">Please select your country</label><br>
      <select v-model="country" @click="fetchCountries()">
        <option v-for="country in countries" :key="country.name" value: country.name >
          {{country.name}}
        </option>
      </select>
    </div>
    <br>
    <div class="submit"><button @click=" saveContact()" class="button">Let's Play</button></div>
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

<style lang="scss" scoped>
.page-body {
  margin-top: 2rem;
  img {
    width: 15rem;
    height: 15rem;
  }
  .phone-number {
    @include input-c();
  }
  .countries {
    label {
      color: $azure-read;
    }
    select {
      @include input-c();
    }
  }
  button {
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
</style>