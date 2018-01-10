<template>
  <div id="messages"  class="container">
    <div class="cs-row">
      <div class="cs-col-xs-12 cs-col-md-6 cs-offset-md-3">
      </div>
    </div>
    <div class="list-group thread">
      <h2>Messages</h2>
      <router-link :to="{ name: 'MessageDetail', params: { id: message[0].sender_id }}" v-for="message in messages" :key="message[0].sender_id" class="list-group-item">
        <h5 class="list-group-item-heading list-group-item-date">{{ message[0].created_at }}</h5>
        <h4 class="list-group-item-heading">{{ message[0].sender_name }}</h4>
        <span class="list-group-item-text">{{ message[0].sender_name }}: {{ message[0].content }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created () {
    this.$store.dispatch('fetchMessages');
  },
  computed: {
    ...mapGetters({
      messages: 'getMessages'
    })
  },
  methods: {
  },
}
</script>

<style>
.list-group {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  max-width: 500px;
  padding-left: 0;
}
.list-group-item {
  color: #555;
}
.list-group-item:nth-of-type(odd) {
  background-color: #ecf0f1;
}
.list-group-item-date {
  float: right;
}
.list-group-item-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
h5 {
  font-size: 14px;
}

</style>
