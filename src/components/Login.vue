<template>
  <div class="login">
    <h1>Log into Chatty!</h1>
    <p> No account? Register <a href="#" v-on:click="set_route"> here </a> </p>
    <div v-if="processing" class="text-center"> Please wait... </div>
    <div v-if="message" class="text-center" id="message"> {{message}} </div>
    
    <b-form-input
      v-model="username"
      type="text"
      class="input-form"
      placeholder="Username">
    </b-form-input>
    
    <b-form-input
      v-model="password"
      v-on:keyup.enter.native="login"
      class="input-form"
      type="password"
      placeholder="Password">
    </b-form-input>
    
    <b-button 
      v-on:click="login"
      v-on:keyup.enter.native="login"
      class="btn-block"
    >
    Log in
    </b-button>
    
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      processing: false,
      message: ""
    };
  },
  methods: {
    login: function() {
      this.processing = true;
      this.axios
        .post("/api/login", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data.status == "success") {
            this.processing = false;
            this.$emit("authenticated", true, response.data.data);
          } else {
            this.message = "Login Failed, try again";
          }
        })
        .catch(error => {
          this.message = "Login Failed, try again";
          this.processing = false;
        });
    },
    set_route: function() {
      this.$emit("register", true);
    },
  }
};
</script>

<style scoped>

.login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 170px;
  padding: 20px;
}

.input-form {
  margin-bottom: 9px;
  font-family: 'Source Sans Pro', sans-serif;
}

.btn-block {
  background-color: #5d17b8;
  font-family: 'Source Sans Pro', sans-serif;
}

p {
  margin-left: 0.2vw;
  font-family: 'Source Sans Pro', sans-serif;
}

h1 {
  font-family: 'Signika Negative', sans-serif;
}

#message {
  font-family: 'Source Sans Pro', sans-serif;
  margin-top: -1.3vw;
  margin-bottom: 1.2vw;
  font-weight: bold;
}
</style>