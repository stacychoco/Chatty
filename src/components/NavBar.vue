<template>
    <b-navbar toggleable="md" type="light" variant="light" class="nav-bar">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">Chatty!</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto logged_user" id="welcome">
                Welcome back @{{logged_user}} &nbsp;&nbsp;&nbsp; <a href="">Log out</a>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    logged_user: String
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Eczar:wght@400;500;700&family=Neuton:wght@700&family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@700&family=Source+Sans+Pro&display=swap');
.nav-bar {
  border-bottom: 1px solid #343a40;
}

* {
font-family: 'Signika Negative', sans-serif;
font-size: 22px;
}

#welcome {
  /* margin-left: 68vw; */
  color: black;
}

a {
  color: #5d17b8;
}

a:hover {
  color:#3e1079;
}
</style>