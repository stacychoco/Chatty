<template>
    <div class="message-input">
        <b-form-input 
          v-model="message_input"
          type="text"
          placeholder="Enter your message"
          v-on:keyup.enter.native="send_message"
        >
        </b-form-input>
    </div>
</template>

<script>
export default {
  name: "MessageInput",
  data() {
    return {
      message_input: ""
    };
  },
  methods: {
    send_message() {
      let message = this.message_input;
      message = message.replace(/ /g, '');
      console.log(message)
      if (message.length > 0) {
        this.$emit("send_message", this.message_input);
        this.message_input = "";
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.message-input {
  position: absolute;
  bottom: 0px;
  width: 100%;
  margin-bottom: 0.5vw;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>