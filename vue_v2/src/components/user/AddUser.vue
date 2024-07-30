<template>
    <div>
        <form @submit.prevent="adduser()">
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                <input type="text" name="name" class="form-control-plaintext" id="" placeholder="Username" v-model="user.name">
                </div>
            </div>

            <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="text" name="email"  class="form-control-plaintext" value="email@example.com" v-model="user.email">
                </div>
            </div>
           

            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" name="password" class="form-control" id="inputPassword" placeholder="Password" v-model="user.password">
                </div>
            </div>
            <button type="submit" class="btn btn-secondary">Add</button>
        </form>
    </div>
</template>

<script>

import Signup from '../auth/Signup.vue'; 
import LoginService from '../../services/LoginService';

export default {
    name : "adduser",
    data(){
        return {
            user:{
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods:{
        adduser(){
            LoginService.addNewUser(this.user).then(response => {
                console.log(response.data);
                
            });
        }
    },
    components: {
        Signup
    }
}

</script>
