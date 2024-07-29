<template>
  <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div v-if="!submitted" class="card mt-5">
                    <div class="card-header text-center">
                        <h2>Login</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="user.email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" v-model="user.password" required>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <small>Sign-Up Here!<router-link to="/signup">Sign Up</router-link></small>
                    </div>
                </div>
                <div v-else>
                    You Have Successfully Logged in
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import LoginService from "../../services/LoginService";
  import { login as performLogIn  } from '../../components/auth/authenticate';

  export default {
    name: "Login",
    data() {
      return {
        user: {
          email: "",
          password: "",
        },
        submitted: false,
      }
    },methods: {
      login() {
        var data = {
          email: this.user.email,
          password: this.user.password
        }
        LoginService.login(data).then(response => {
          if (response.data.data) {
            console.log(response.data.data.token);
            performLogIn(response.data.data.token);
            // localStorage.setItem('token', response.data.data.token);
            this.submitted = true;
          }
          // this.submitted = true;
        });

      }
    }
  }
</script>
