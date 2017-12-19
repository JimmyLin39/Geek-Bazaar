<template>
  <div>
    <div class="title-container">
      <div class="container">
        <h1 class="display-3">Geek Bazaar</h1>
        <p class='description'>
          Welcome to <b>Geek Bazaar</b>, a place where passionate gamers can come 
          to connect and bid-on/sell a variety of board games.
          Whatever game it might be, we are 100% sure you'll be able to find it on 
          the Geek Bazaar!  Register below and discover all the games inside!
        </p>
        <hr>              
        <br>
        <div class='register-button'>
          <p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Register Now &raquo;
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>Feature 1</h2>
          <p class='col-md-4-p'>
            Description of Feature 1
          </p>
          <p class='col-md-4-p-button'>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
        <div class="col-md-4">
          <h2>Feature 2</h2>
          <p class='col-md-4-p'>
            Description of Feature 2. 
          </p>
          <p class='col-md-4-p-button'>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
       </div>
        <div class="col-md-4">
          <h2>Feature 3</h2>
          <p class='col-md-4-p'>
            Description of Feature 3
          </p>
          <p class='col-md-4-p-button'>
            <a class="btn btn-secondary" href="#" role="button">
              View details &raquo;
            </a>
          </p>
        </div>
      </div>

        <hr>

      <div class='footer-div'>
        <footer class='footer-section'>
          <p>&copy; [Karan, Jimmy, Thomas, Kang]
            (<a href='www.lighthouselabs.ca'>Lighthouse Labs</a>) 2017</p>
        </footer>
      </div>

    </div> <!-- /container -->

  </div>

</template>

<script>

export default {
  name: 'titlebar'
};


</script>

<style>
.container {
  margin: 20px;
}
.register-button,
.display-3 {
  text-align: center;
}
.title-container {
  background-color: lightgrey;
  padding-top: 5%;
  padding-bottom: 5%;
}
.description {
  text-align: justify;
  margin-left: 100px;
  margin-right: 100px;
}
.btn.btn-secondary {
  background-color: #0275d8;
  border-color: #0275d8;
  color: white;   
}
.col-md-4-p {
  text-align: justify;
}
.col-md-4-p-button {
  text-align: center;
}
.row h2 {
  text-align: center;
}

</style>

