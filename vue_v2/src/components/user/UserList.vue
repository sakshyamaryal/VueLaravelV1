<template>

<button  @click="addUser()" type="button" :class="['btn', 'btn-secondary', 'pull-right']">Add User</button>

<div class="mt-12">

<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, i) in users" :key="i">
      <th scope="row">{{ 1 + i }}</th>
      <td>{{ user.name }}</td>
      <td>{{ user.email }}</td>
      <td>
       
        <button  @click="goToEdit(user.id)" type="button" :class="['btn', 'btn-success', user.id]">Edit</button> &nbsp;
        <button  @click="goToDelete(user.id)" type="button" :class="['btn', 'btn-danger', user.id]">Delete</button>
      </td>
    </tr>
    
  </tbody>
</table>
</div>
</template>

<script>
    import LoginService from "../../services/LoginService";

    export default {
        name: 'user-list',
        data() {
            return {
                users: [],
                
            }
        },
        methods: {
            getUsers(){
                LoginService.getUsers().then(response => {
                    console.log(response.data.users);
                    this.users = response.data.users;
                });
            },

            goToEdit(userId) {
                this.$router.push('/user/' + userId);
            },

            goToDelete(userId) {
                LoginService.deleteUser(userId).then(response => {
                  if (response.data) {
                    alert("user Deleted");
                    this.getUsers();
                  }
                });
            },
            
            addUser(){
              this.$router.push('/add-user');
            }
        },
        mounted() {
            this.getUsers();
        }
    };


</script>