<template>
    <div>
    <div v-for="(message, id) in messages" v-bind:key="id"> 
        <div class="chat-message col-md-4" 
          v-bind:class="[(message.from_user == active_chat) ? 'to-message' : 'from-message offset-md-8']">
          {{message.message}}
        </div> 
    </div>
    </div>
</template>
<script>
export default {
  name: "Messages",
  props: {
    messages: Array,
    active_chat: Number
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.from-message {
  background: #5d17b8;
  color: white;
  border-radius: 10px;
  padding: 8px 2px;
  padding-left: 10px;
  margin-bottom: 4px;
  font-family: 'Source Sans Pro', sans-serif;
}
.to-message {
  background: rgb(201, 209, 209);
  color: rgb(41, 53, 52);
  border-radius: 10px;
  padding: 8px 2px;
  padding-left: 10px;
  margin-bottom: 4px;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>