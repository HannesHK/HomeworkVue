<template>
  <div class="home">
    <header-vue></header-vue>
    <div id="signUpPage">
      <form action="/" method="get">
        <label for="email">Email</label>
        <input type="email" id="email" name="Email" placeholder="Email" required><br>
        <label for="password">Password</label>
        <input type="password" id="password" name="Password" v-model="inputText" @input="validate" pattern="^(?=.*[a-z].*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_])[A-Z].{7,13}$" placeholder="Password" required><br>
        <input type="submit" id="submitButton" value="Sign Up">
        <p v-show="invalidPassword">Password is not valid. It must:
          <ul>
            <li ref="length">Be between 8 and 14 characters long.</li>
            <li ref="uppercase">Include at least one uppercase alphabet character.</li>
            <li ref="lowercase">Include at least two lowercase alphabet characters.</li>
            <li ref="numeric">Include at least one numeric value.</li>
            <li ref="start">Start with an uppercase alphabet.</li>
            <li ref="underscore">Include the character “_”.</li>
          </ul>
        </p>
      </form>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderVue from '@/components/Header.vue'
import FooterVue from '@/components/Footer.vue';

export default {
  name: 'SignUpView',
  components: {
    HeaderVue,
    FooterVue
  },
  data: function() {
    return {invalidPassword: false}
  },
  methods: {
    validate: function () {
      var valid = true;
      // Conditions
      var length = this.$refs.length;
      var uppercase = this.$refs.uppercase;
      var lowercase = this.$refs.lowercase;
      var numeric = this.$refs.numeric;
      var start = this.$refs.start;
      var underscore = this.$refs.underscore;
      // Validate length
      var lengthCheck = /^.{8,14}$/;
      if(this.inputText.match(lengthCheck)) {
        length.style.color = "#00aa01";
      } else {
        valid = false;
        length.style.color = "#fe0000";
      }
      // Validate uppercase
      var uppercaseCheck = /[A-Z]/;
      if(this.inputText.match(uppercaseCheck)) {
        uppercase.style.color = "#00aa01";
      } else {
        valid = false;
        uppercase.style.color = "#fe0000";
      }
      // Validate lowercase
      var lowercaseCheck = /[a-z].*[a-z]/;
      if(this.inputText.match(lowercaseCheck)) {
        lowercase.style.color = "#00aa01";
      } else {
        valid = false;
        lowercase.style.color = "#fe0000";
      }
      // Validate numeric
      var numericCheck = /\d/;
      if(this.inputText.match(numericCheck)) {
        numeric.style.color = "#00aa01";
      } else {
        valid = false;
        numeric.style.color = "#fe0000";
      }
      // Validate start
      var startCheck = /^[A-Z]/;
      if(this.inputText.match(startCheck)) {
        start.style.color = "#00aa01";
      } else {
        valid = false;
        start.style.color = "#fe0000";
      }
      // Validate underscore
      var underscoreCheck = /_/;
      if(this.inputText.match(underscoreCheck)) {
        underscore.style.color = "#00aa01";
      } else {
        valid = false;
        underscore.style.color = "#fe0000";
      }
      // Password validity
      if(valid) {
        this.invalidPassword = false;
      } else {
        this.invalidPassword = true;
      }
    }
  }
}
</script>

<style scoped>
#signUpPage {
  background-color: #ebf1df;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
}
</style>