<template>
  <div class='register'>
    <h1>Register</h1>
    <p><input type='firstName' name='firstName' placeholder='First Name'
      v-model='firstName'>
    </input></p>
    <p><input type='lastName' name='lastName' placeholder='Last Name'
      v-model='lastName'>
    </input></p>
    <p><input type='email' name='email' placeholder='Email'
      v-model='email'></input></p>
    <p><input type='password' name='password' placeholder='Password'
      v-model='password'>
    </input></p>
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
  methods: {
    async register() {
      const response = AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
