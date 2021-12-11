<template>
  <div class="register">
    <h1>Register for Chatty!</h1>
    <p> Already have an account? Login <a href="#" v-on:click="set_route"> here </a> </p>
    <div v-if="proccessing" class="text-center"> Please wait... </div>
    <div v-if="message" class="text-center" id="message"> {{message}} </div>
    
    <b-form-input
      v-model="username"
      type="text"
      class="input-form"
      placeholder="Username">
    </b-form-input>
    
    <b-form-input
      v-model="password"
      v-on:keyup.enter.native="register"
      class="input-form"
      type="password"
      placeholder="Password">
    </b-form-input>
    
    <b-button 
      v-on:click="register" 
      v-on:keyup.enter.native="register"
      class="btn-block"
    >
    Register
    </b-button>
    
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      processing: false,
      message: ""
    };
  },
  methods: {
    register: function() {
      this.loading = true;
      this.axios
        .post("https://chatty-api-python.herokuapp.com/api/register", {
          username: this.username,
          password: this.password
        })
        .then(response => {
          if (response.data.status == "success") {
            this.processing = false;
            this.message = "Registered successfully.";
            this.login()
          } else {
            this.message = "Register failed, try again";
          }
        })
        .catch(error => {
          this.message = "Register failed, try again";
          this.processing = false;
        });
    },

    set_route: function() {
      this.$emit("register", false);
    },

    login: function() {
      this.loading = true;
      this.axios
          .post("https://chatty-api-python.herokuapp.com/api/login", {
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
    }
  }
};
</script>

<style scoped>

.register {
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