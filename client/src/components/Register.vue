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
      v-model='password' @keyup.enter='register'>
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
    // TODO: point the registration response to reference the '/register'
    // end point in the Express backend -->
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  } 
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
