<template>
<div>
  <div class="landing">
    <div class="landing-title">
      <h1 class="display-3">Geek Bazaar</h1>
      <p>
        Welcome to <b>Geek Bazaar</b> !
        <br> A place where passionate gamers can come to connect and bid-on/sell a variety of board games.
        <br> Whatever game it might be, we are 100% sure you'll be able to find it on
        the Geek Bazaar!
        <br> Register below and discover all the games inside!
      </p>
      <router-link class="btn btn-primary btn-register-now btn-lg" to="/register" tag="button">Register Now &raquo;</router-link>
    </div>
  </div>
    <div class="footer">  
      <p>
        &copy; [Karan, Jimmy, Thomas, Kang](<a href='www.lighthouselabs.ca'>Lighthouse Labs</a>) 2017
      </p>
    </div>
</div>
</template>

<style>

.landing {
  height: 900px;
  background-image: url("../assets/landing-background.jpg");
  padding-top: 10%;
}

.landing-title {
  padding-top: 5%;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 20%;
  font-size: 20px;
  color: black;
  background-color: #ffffff;
  opacity: 0.75;
}

.footer {
  margin-left: 5%;
  margin-top: 5px;
}

</style>
