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
      // Conditions
      var valid = true;
      var conditions = [this.$refs.length, this.$refs.uppercase, this.$refs.lowercase, this.$refs.numeric, this.$refs.start, this.$refs.underscore];
      var checks = [/^.{8,14}$/, /[A-Z]/, /[a-z].*[a-z]/, /\d/, /^[A-Z]/, /_/];
      // Validation
      for (let i = 0; i < conditions.length; i++) {
        if(this.inputText.match(checks[i])) {
          conditions[i].style.color = "#00aa01";
        } else {
          valid = false;
          conditions[i].style.color = "#fe0000";
        }
      }
      // Password validity
      if (valid) {
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