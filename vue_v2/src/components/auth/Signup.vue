<template>
<div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div v-if="!submitted" class="card mt-5">
                    <div class="card-header text-center">
                        <h2>Sign Up</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="registerUser">
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username" placeholder="Enter username" name="name" v-model="user.name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="user.email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Enter password" name="password" v-model="user.password" required>
                            </div>
                            <div class="mb-3">
                                <label for="confirm-password" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password" name="confirmpassword" v-model="user.confirmpassword" required>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <small>Already have an account? <router-link to="/login">Login here</router-link></small>
                    </div>
                </div>
                <div v-else>
                    The Account Has Been Created
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginService from '../../services/LoginService';

export default {
    name: "Signup",
    data() {
        return {
            submitted: false,
            user: {
                id: null,
                name: "",
                email: "",
                password: "",
                confirmpassword: "",
            },
        }
    },
    methods: {
        registerUser() {
            var data = {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
            };
            var confirmPass = this.user.confirmpassword;

            if (data.password === confirmPass) {
                LoginService.signUp(data).then(response => {
                    console.log(response.data);
                    this.submitted = true;
                }).catch(error => {
                    console.error(error);
                    alert('There was an error creating your account.');
                });
            } else {
                alert('The Confirm Password Must Match Password Field');
                return false;
            }
        }
    }
}
</script>