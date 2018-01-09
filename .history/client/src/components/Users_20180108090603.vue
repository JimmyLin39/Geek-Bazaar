<template>
<div class="container">
  <div class='user-info'>
    <h1>User Information</h1>
    <div class='user-info-details'>
      <span><p>Full Name: {{ user[0].full_name }} </p></span>
      <span><p>Dispaly Name: {{ user[0].display_name }} </p></span>
      <span><p>Email: {{ user[0].email }}</p></span>
      <span><p>Password: {{ user[0].password }}</p></span>
    </div>
  </div>
</div>
</template>

<script>
import usersService from '@/services/usersService';

export default {
  data() {
    return {
      user: [],
      userId: this.$cookie.get('userId'),
    }
  },
  created: function() {
    this.retrieveUser(this.user, this.userId);
  },
  methods: {
    retrieveUser: async (userId) => {
      const response = await usersService.retrieveUser(userId);
      console.log(response.data.user[0]);
      user.push(response.data.user[0]);
    }
  }
}
</script>


<style lang="scss" scoped>
.user-info {
  padding-top: 20px;
}

</style>
