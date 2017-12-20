<template>
  <div class='register-container'>
    <div class="container">    
      <div id="loginbox" style="margin-top:50px;" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
        <div class="panel panel-info" >
          <div class="panel-heading">
            <div class="panel-title">Registration</div>
          </div>     
          <div style="padding-top:30px" class="panel-body" >
            <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>
              <form id="registerform" class="form-horizontal" role="form"> 
                <div style="margin-bottom: 25px" class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input id="register-username" type="text" class="form-control" name="fullname" value="" placeholder="full name">                                        
                </div>
                <div style="margin-bottom: 25px" class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input id="register-displayname" type="text" class="form-control" name="displayname" value="" placeholder="display name">                                        
                </div>
                <div style="margin-bottom: 25px" class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input id="register-email" type="text" class="form-control" name="username" value="" placeholder="email">                                        
                </div>
                <div style="margin-bottom: 25px" class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                  <input id="register-password" type="password" class="form-control" name="password" placeholder="password">
                </div>
                <div style="margin-top:10px" class="form-group">
                  <div class="col-sm-12 controls">
                    <a id="btn-login" href="#" class="btn btn-success">Register</a>
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
<style>
.register-container {
  text-align: center;
}

</style>
