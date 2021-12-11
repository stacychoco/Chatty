<template>
  <div style="margin-top: 0px;">
    <div v-for="(user, id) in users" v-bind:key="id">
      <div
        v-bind:class="[activeUser == user.id ? 'user active' : 'user']"
        v-on:click="chat(user.id)"
      >
        {{user.userName}}
        <span v-if="user.has_new_message" class="has_new_message">New message</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Users",
  props: {
    users: Array
  },
  data() {
    return {
      activeUser: null
    };
  },
  methods: {
    chat: function(id) {
      this.activeUser = id;
      this.$emit("chat", id);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.user {
  margin: 0px !important;
  padding: 10px 4px 10px 8px;
  border-bottom: 1px solid gray;
}
.active {
  background: #000000;
  color: white;
}
.has_new_message {
  background-color: #5d17b8;
  border-radius: 4px;
  display: inline-block;
  color: white;
  margin-bottom: -4px;
  font-size: 10px;
  margin: 4px;
  padding: 3px;
  font-weight: bolder;
}

* {
  font-family: 'Source Sans Pro', sans-serif;
  cursor: pointer;
}
</style>