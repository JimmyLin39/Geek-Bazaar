<template>
  <div class='login-container'>
    <div>
      <div id="loginbox" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
        <div class="panel panel-info" >
          <div class="panel-heading">
            <div class="panel-title">Please Log In</div>
          </div>
          <div style="padding-top:30px" class="panel-body"></div>
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
              <div class="form-group">
                  <button 
                    class="btn btn-primary"
                    @click.prevent.stop="onLogin" 
                    @keyup.enter="onLogin" 
                  >
                  Login
                  </button>
                  <hr>
                  <div class='errors'>
                    {{ errors }}
                  </div>
              </div>

              <div class="form-group">
                <div style="border-top: 1px solid#888; padding-top:15px; font-size:85%" >
                  Don't have an account!
                  <a href="#/register">Register Here</a>
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
import { mapGetters, mapActions } from 'vuex'

const initialData = () => {
  return {
    info: {
      email: '',
      password: '',
    }
  }
}

export default {
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
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login-container {
  color: black;
  margin-bottom: -50px;
  height: 900px;
  background-image: url("../assets/landing-background.jpg");
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding-top: 10%;
}
#loginbox {
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
  overflow: auto;
}


</style>
