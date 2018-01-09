<template>
  <div class='login-container'>
    <div class="container">
      <div id="loginbox" style="margin-top:50px;"class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info" >
          <div class="panel-heading">
            <div class="panel-title">Please Log In</div>
          </div>
          <div style="padding-top:30px" class="panel-body"></div>
<<<<<<< HEAD
            <div style="display:none" id="login-alert"
              class="alert alert-danger col-sm-12"></div>
              <form id="loginform" class="form-horizontal" role="form">
                <div style="margin-bottom: 25px" class="input-group">
                  <span class="input-group-addon"><i
                    class="glyphicon glyphicon-user"></i></span>
                  <input id="login-email" type="text" class="form-control"
                    name="email" value="" placeholder="Email"
                    v-model='email' @click='reset'>
                </div>
                <div style="margin-bottom: 25px" class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                  <input id="login-password" type="password" class="form-control"
                    name="password" placeholder="Password"
                    v-model='password' @click='reset'>
                </div>
                <div style="margin-top:10px" class="form-group">
                  <div class="col-sm-12 controls">
                    <a id="btn-login" href="#/login" class="btn btn-success"
                      @click='login' @keyup.enter='login'>
                        <router-link to='/inventories'>Login</router-link>
                    </a>
                    <hr>
                    <div class='errors'>
                      {{ errors }}
                    </div>
                    <div></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-md-12 control">
                    <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                      Don't have an account!
                      <a href="#/register">Register Here</a>
                    </div>
=======
            <form id="loginform" class="form-horizontal" role="form">
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"><i
                  class="glyphicon glyphicon-user"></i></span>
                <input id="login-email" type="text" class="form-control"
                  name="email" placeholder="Email"
                  v-model="info.email">
                  <!-- @click="reset" -->
              </div>
              <div style="margin-bottom: 25px" class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input id="login-password" type="password" class="form-control"
                  name="password" placeholder="Password"
                  v-model="info.password">
                  <!-- @click="reset" -->
              </div>
              <div style="margin-top:10px" class="form-group">
                <div class="col-sm-12 controls">
                  <button 
                    id="btn-login" 
                    class="btn btn-success"
                    @click.prevent.stop="onLogin" 
                    @keyup.enter="onLogin" 
                  >
                  Login
                  </button>
                  <hr>
                  <div class='errors'>
                    {{ errors }}
>>>>>>> f3130de1a86d1e08a56a4d4745391cbf41606e30
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="col-md-12 control">
                  <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                    Don't have an account!
                    <a href="#/register">Register Here</a>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
<<<<<<< HEAD

import AuthenticationService from '@/services/AuthenticationService';
import Vue from 'vue';
import VueCookie from 'vue-cookie';
import VueSession from 'vue-session';

Vue.use(VueSession);
Vue.use(VueCookie);
=======
import AuthenticationService from '@/services/AuthenticationService'
import { mapGetters, mapActions } from 'vuex'
>>>>>>> f3130de1a86d1e08a56a4d4745391cbf41606e30

const initialData = () => {
  return {
    info: {
      email: '',
      password: '',
    }
  }
}

export default {
<<<<<<< HEAD
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      errors: '',
      cookies: false
    };
  },
  methods: {
    // async login() {
    //   const response = await AuthenticationService.login({
    //     email: this.email,
    //     password: this.password
    //   })
    //   this.errors = response.data.message
    //   this.cookies = response.data.cookies
    //   if (response.data.cookies === true) {
    //     this.$cookie.set('newUser', generateRandomId(), 1)
    //     this.errors = 'Cookies succesfully set!'
    //   } else {
    //     this.errors = 'Cookies not set!'
    //   }
    // },
    login() {
      this.$http.post('/login', {
        password: this.password,
        email: this.email
      }).then(function(response) {
        if (response.status === 200 && 'token' in response.body) {
          this.$session.start();
          this.$session.set('jwt', response.body.token);
        }
      }, function(err) {
        console.log('err: ', err);
      })
    },
    reset() {
      this.errors = ''
    },
=======
  data: initialData,
  computed: mapGetters({
    errors: 'getLoginErrors',
    cookies: 'getCookies'
  }),
  methods: {
    ...mapActions([
      'login',
    ]),
    onLogin(){
      this.login(this.info).then(()=>{
        const cookie = this.$cookie.get('userId');
        if (cookie) {
          this.$router.replace('/index')
          this.$store.dispatch('fetchCart');
        }
      });
    }
>>>>>>> f3130de1a86d1e08a56a4d4745391cbf41606e30
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.errors {
  text-align: center;
  color: darkred;
  font-size: 25px;
  padding: 5px;
  overflow: auto;
}


</style>
