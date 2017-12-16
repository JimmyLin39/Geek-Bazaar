<template>
  <div class='register'>
    <h1>Register</h1>
    <p><input type='firstName' firstName='firstName' placeholder='First Name'>
    </input></p>
    <p><input type='lastName' lastName='lastName' placeholder='Last Name'>
    </input></p>
    <p><input type='email' email='email' placeholder='Email'
      v-model='email'></input></p>
    <p><input type='password' password='password' placeholder='Password'
      v-model='password'>
    </input></p>
    <p><input type='confirmPassword' confirmPassword='confirmPassword'
      placeholder='Confirm Password'></input></p>
    <br>
    <button @click='register'>Register</button>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };
  },
  watch: {
    email(value) {
      console.log('email has changed to ', value);
    }
  },
  methods: {
    register() {
      console.log('register button was clicked', this.email, this.passwordd)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
