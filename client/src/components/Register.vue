<template>
  <div class='register'>
    <h1>Register</h1>
    <p><input type='name' name='name' placeholder='Full Name'
      v-model='name'>
    </input></p>
    <p><input type='DisplayName' name='DisplayName' placeholder='Display Name'
      v-model='DisplayName'>
    </input></p>
    <p><input type='email' name='email' placeholder='Email'
      v-model='email'></input></p>
    <p><input type='password' name='password' placeholder='Password'
      v-model='password'></input></p>
       <p><input type='address' name='address' placeholder='Address'
      v-model='address'></input></p>
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
      name: '',
      DisplayName: '',
      address:''
    };
  },
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      })
      console.log(response.data)
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
