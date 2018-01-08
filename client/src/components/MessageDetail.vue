<template>
  <div id="messageDetail">
    <h1>Message Detail</h1>
    <div class="container">
    <div class="cs-row">
      <div class="cs-col-xs-12 cs-col-md-6 cs-offset-md-3">
        <!-- FIXME: display the right sender_name -->
        <!-- <h4>Messages with {{ messages[0].sender_name }}</h4> -->
      </div>
    </div>
    <div class="cs-row">
      <div v-for="message in messages" class="messages cs-col-xs-12 cs-col-md-6 cs-offset-md-3">
        <div v-if="message.sender_id == id" class="msg-from-them">
          <span class="message-sender">{{ message.sender_name }}</span>
          <span class="message-created">{{ message.created_at }}</span>
          </br>
          <p>{{ message.content }}</p>
        </div>
      <div v-else class="msg-from-you">
          <span class="message-sender">{{ message.sender_name }}</span>
          <span class="message-created">{{ message.created_at }}</span>
          </br>
          <p>{{ message.content }}</p>
      </div>

    </div>
    <div class="cs-col-xs-12 cs-col-md-6 cs-offset-md-3">
      <form id="message-form" method="POST">
        <textarea v-model="content" id="message-text" class="form-control" name="body" rows="2" maxlength="500"></textarea>
        <button id="send-btn" class="btn btn-primary" type="submit" v-on:click.prevent="addMessage()">Send</button>
      </form>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      content: '',
    }
  },
  props: ['id'],
  created () {
    this.$store.dispatch('fetchMessage', this.id);
  },
  computed: {
    ...mapGetters({
      messages: 'getMessage'
    })
  },
  methods: {
    addMessage() {
      const payload = {
        receiverId: this.id,
        content: this.content
      }
      this.$store.dispatch('addMessage', payload);
      // reset content
      this.content = '';
    }
  },
}
</script>
