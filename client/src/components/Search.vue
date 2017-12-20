

<template>
  <div>
  <autocomplete
    anchor="formatted_address"
    label="formatted_address"
    :onShouldGetData="getData"
  >
  </autocomplete>
  <input type="text" name="autocomplete" autocomplete="off" class="form-control autocomplete-input">
  <h1>Hello</h1>
  </div>
</template>



<script>

  import Autocomplete from 'vue2-autocomplete-js';

  export default {

    components: { Autocomplete },

methods: {
  promise(value) {
    return new Promise((resolve, reject) => {
      let ajax = new XMLHttpRequest();
      ajax.open('GET', `https://maps.googleapis.com/maps/api/geocode/json?address=${value}`, true);
      // On Done
      ajax.addEventListener('loadend', (e) => {
        const { responseText } = e.target
        let response = JSON.parse(responseText);
        // The options to pass in the autocomplete
        resolve(response.results)
      });
      ajax.send();
    })
  }
  }

  };

</script>