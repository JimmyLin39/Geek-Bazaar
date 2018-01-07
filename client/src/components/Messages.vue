<template>
  <div id="messages">
    <h1>Message</h1>
    <div class="list-group thread">
      <router-link :to="{ name: 'MessageDetail', params: { id: message.sender_id }}" v-for="message in messages" :key="message.sender_id" class="list-group-item">
        <h5 class="list-group-item-heading list-group-item-date">{{ message.created_at }}</h5>
        <h4 class="list-group-item-heading">{{ message.sender_name }}</h4>
        <span class="list-group-item-text">{{ message.sender_name }}: {{ message.content }}</span>
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
