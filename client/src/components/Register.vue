<template>
  <div class="container">
    <div id="registerbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info" >
        <div class="panel-heading">
          <div class="panel-title">Create Account</div>
          <!-- <div style="float:right; font-size: 80%; position: relative; top:-10px"><a href="#">Forgot password?</a></div> -->
        </div>
        <div style="padding-top:30px" class="panel-body" >
          <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
          <form id="registerform" class="form-horizontal" role="form">
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input id="register-fullname" type="text" class="form-control" name="full_name" value="" placeholder="Full Name"
                v-model='full_name' @click='reset'>
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input id="register-displayname" type="text" class="form-control" name="display_name" value="" placeholder="Display Name"
                v-model='display_name' @click='reset'>
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
              <input id="register-email" type="text" class="form-control" name="email" value="" placeholder="Email"
                v-model='email' @click='reset'>
            </div>
            <div style="margin-bottom: 25px" class="input-group">
              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input id="login-password" type="password" class="form-control" name="password" placeholder="Password"
                  v-model='password' @click='reset'>
            </div>
            <div style="margin-top:10px" class="form-group">
              <div class="col-sm-12 controls">
                <a id="btn-login" href="#/register" class="btn btn-success" @click='register'>Register</a>
                <hr>
                <div class='errors'>{{ errors }}</div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-md-12 control">
                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                  Already registered?
                  <a href="#/login">Login here</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="signupbox" style="display:none; margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info">
        <div class="panel-heading">
          <div class="panel-title">Sign Up</div>
          <div style="float:right; font-size: 85%; position: relative; top:-10px"><a id="signinlink" href="#" onclick="$('#signupbox').hide(); $('#loginbox').show()">Sign In</a></div>
        </div>
      <div class="panel-body" >
      <form id="signupform" class="form-horizontal" role="form">
        <div id="signupalert" style="display:none" class="alert alert-danger">
          <p>Error:</p>
          <span></span>
        </div>
        <div class="form-group">
          <label for="email" class="col-md-3 control-label">Email</label>
          <div class="col-md-9">
            <input type="text" class="form-control" name="email" placeholder="Email Address">
          </div>
        </div>
        <div class="form-group">
          <label for="firstname" class="col-md-3 control-label">First Name</label>
          <div class="col-md-9">
            <input type="text" class="form-control" name="firstname" placeholder="First Name">
          </div>
        </div>
        <div class="form-group">
          <label for="lastname" class="col-md-3 control-label">Last Name</label>
            <div class="col-md-9">
              <input type="text" class="form-control" name="lastname" placeholder="Last Name">
            </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-md-3 control-label">Password</label>
          <div class="col-md-9">
            <input type="password" class="form-control" name="passwd" placeholder="Password">
          </div>
        </div>
        <div class="form-group">
          <label for="icode" class="col-md-3 control-label">Invitation Code</label>
          <div class="col-md-9">
            <input type="text" class="form-control" name="icode" placeholder="">
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-offset-3 col-md-9">
            <button id="btn-signup" type="button" class="btn btn-info"><i class="icon-hand-right"></i> &nbsp Sign Up</button>
            <span style="margin-left:8px;">or</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Vue from 'vue'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie);

function generateRandomId() {
  const randomId = Math.random().toString(36).replace(/^[A-Za-z0-9_.]+$/).substring(2, 30);
  return randomId;
}

export default {
  data() {
    return {
      full_name: '',
      display_name: '',
      email: '',
      password: '',
      errors: '',
      cookies: '',
    };
  },
  methods: {
    // TODO: point the registration response to reference the '/register'
    // end point in the Express backend -->
    async register() {
      const response = await AuthenticationService.register({
        full_name: this.full_name,
        display_name: this.display_name,
        email: this.email,
        password: this.password,
      })
      this.errors = response.data.message
      this.cookies = response.data.cookies
      if (this.cookies === true) {
        this.$cookie.set(generateRandomId(), generateRandomId(), 1);
        this.errors = 'User cookies successfully set!'
      } else {
        this.errors = 'User cookies NOT set!'
      }
    },
    reset() {
      this.errors = ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.register-container {
  text-align: center;
}
.errors {
  text-align: center;
  color: darkred;
  font-size: 25px;
  padding: 5px;
}

</style>
