<script>
    import API from '../api'
    import urls from '../urls'
    export default {
        data() {
          return {
            username: '',
            password: ''
          }
        },

      created() {
          if (this.$route.path === '/logout') {
            window.logout();
          }
      },

      methods: {
          login() {

            API.post('login/', {username: this.username, password: this.password}).then(r => {
              if (r.data.success) {
                localStorage.auth = r.data.token;
                API.defaults.headers.Authorization = r.data.token;
                window.location.href = urls.INVOICES;
              } else {
                alert('Niepoprawne dane logowania');
              }
            })
          }
      }
    }

</script>

<template>
    <div class="container">
        <div class="col-md-4 form">

            <form class="form-group">
                <h2 class="form-signin-heading">Zaloguj się</h2>
                <label for="username">Nazwa użytkownika</label>
                <input v-model="username" id="username" class="form-control"  required autofocus>
                <label for="inputPassword">Hasło</label>
                <input v-model="password" type="password" id="inputPassword" class="form-control" required>
                <br>
                <button v-on:click="login" class="btn btn-lg btn-primary btn-block" type="submit">Zaloguj się</button>
            </form>
        </div>

    </div> <!-- /container -->

</template>
<style>
    .form {
        margin: 0 auto;
    }
</style>