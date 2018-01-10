<template>
  <div class="register-container">
    <div id="registerbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
      <div class="panel panel-info" >
        <div class="panel-heading">
          <div class="panel-title">Create Account</div>
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
              <a id="btn-login" href="#/register" class="btn btn-primary" @click='register'>Register</a>
              <hr>
              <div class='errors'>{{ errors }}</div>
            </div>
            <div class="form-group">
              <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                Already registered?
                <a href="#/login">Login here</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </div>
</div>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

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
      const userId = response.data.userId
      if (this.cookies === true) {
        this.$cookie.set('userId', userId, 1);
        this.$router.replace('/index')
        // this.errors = 'User cookies successfully set!'
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
  background-image: url('../assets/landing-background.jpg');
  background-repeat: no-repeat;
  background-position: left;
  height: 900px;
  padding-top: 10%;
}

#registerbox {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 2%;
  padding-right: 2%;
  background-color: #ffffff;
  margin-left: 10%;
  opacity: 0.95;
}

.errors {
  text-align: center;
  color: #E37222;
  font-size: 25px;
  padding: 5px;
}

</style>
