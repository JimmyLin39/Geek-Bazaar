<template>
  <div id="messages">
    <h1>Message</h1>
    {{ messages[0] }}
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