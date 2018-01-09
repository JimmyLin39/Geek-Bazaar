<template>
  <div id="messageDetail">
    <div class="container">
    <div class="cs-row">
      <div class="cs-col-xs-12 cs-col-md-6 cs-offset-md-3">
        <h2 v-if="messages.length == 0"id="sender-name">You have no messages with {{ senderName }}</h2>
        <h2 v-else id="sender-name">Messages with {{ senderName }}</h2>
      </div>
    </div>
    <div class="cs-row">
      <div class="messages cs-col-xs-12 cs-col-md-6 cs-offset-md-3">
        <div v-for="message in messages" >
          <div v-if="message.sender_id == id" class="msg-from-them">
            <span class="message-sender">{{ message.sender_name }}</span>
            <span class="message-created">{{ message.created_at }}</span>
            </br>
            <p>{{ message.content }}</p>
          </div>
          <div v-else class="msg-from-you">
            <span class="message-sender">Me</span>
            <span class="message-created">{{ message.created_at }}</span>
            </br>
            <p>{{ message.content }}</p>
          </div>
        </div>
    </div>
    <div class="cs-col-xs-12 cs-col-md-6 cs-offset-md-3">
      <div v-if="error" class="form-control-feedback">{{ error }}</div>
      <form id="message-form" method="POST">
        <textarea v-model="content" id="message-text" class="form-control" name="body" rows="2" maxlength="500"></textarea>
        <button id="send-btn" class="btn btn-info" type="submit" v-on:click.prevent="addMessage()">Send</button>
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
      error: '',
    }
  },
  props: ['id'],
  created () {
    this.$store.dispatch('fetchSenderName', this.id);
    this.$store.dispatch('fetchMessage', this.id);
  },
  computed: {
    ...mapGetters({
      messages: 'getMessage',
      senderName: 'getSenderName'
    })
  },
  methods: {
    addMessage() {
      if (this.content.length === 0) {
        this.error = 'Please type in some message.'
      }else{
        this.error = '';
        const payload = {
          receiverId: this.id,
          content: this.content
        }
        this.$store.dispatch('addMessage', payload);
        // reset content
        this.content = '';
      }
    },
  },
}
</script>

<style>
#sender-name {
  margin-top: 10px;
  margin-bottom: 10px;
}
.cs-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
}

.messages {
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  overflow-x: hidden;
  background-color: #ecf0f1;
}
.cs-offset-md-3 {
  margin-left: 25%;
}
.cs-col-md-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.messages .msg-from-them {
  float: left;
  margin-bottom: 5px;
  padding: 5px 10px;
  clear: both;
  border-radius: 3px;
  max-width: 95%;
  word-break: break-word;
  background-color: #3498db;
  color: #fff;
}
.messages .msg-from-you {
  float: right;
  text-align: right;
   margin-bottom: 5px;
  padding: 5px 10px;
  clear: both;
  border-radius: 3px;
  max-width: 95%;
  word-break: break-word;
  background-color: #1abc9c;
  color: #fff;
}
.messages .message-sender {
  font-weight: 700;
}
.messages .message-created {
  font-style: italic;
}
#send-btn {
  margin-top: 5px;
  float: right;
  background-color: #1abc9c!important;
  border-color: #1abc9c!important;
  color: #fff!important;
}
.form-control-feedback {
  color: red;
  font-weight: 500;
}
</style>
