<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div v-if="!submitted" class="card mt-5">
                    <div class="card-header text-center">
                        <h2>Change Username and Email</h2>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="changeUserDetails">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" v-model="user.email" required>
                            </div>
                            <div class="mb-3">
                                <label for="name" class="form-label">Username</label>
                                <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" v-model="user.name" required>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-secondary">Change</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div v-else>
                    Username Changed Successfully
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginService from "../../services/LoginService";

export default {
    name: "user",
    data() {
        return {
            user: {
                email: '',
                name: ''
            },
            submitted: false
        }
    },
    methods: {
         loadUser() {
            const userId = this.$route.params.id;

            LoginService.getUserById(userId).then(response => {
                this.user.email = response.data.users[0].email;
                this.user.name = response.data.users[0].name;
            }).catch(error => {
                console.error(error);
            });
        },
        changeUserDetails() {
            // Replace with actual user ID if needed
            const userId = this.$route.params.id;
            
            console.log(this.$route);

            LoginService.updateUser(userId, this.user).then(response => {
                this.submitted = true;
            }).catch(error => {
                console.error(error);
            });
        }
    },
    mounted() {
        this.loadUser();
    }
}
</script>
