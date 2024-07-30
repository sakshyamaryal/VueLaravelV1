import http  from "../http-common"

class LoginService {

    signUp(data){
        return http.post('/users', data);
    }

    login(data){
        return http.post('/login', data);
    }

    logout(){
        return http.post('/logout');
    }

    getUsers(){
        return http.get("/users")
    }

    getUserById(id){
        return http.get(`/users?id=${id}`)
    }

    updateUser(id,data){
        return http.put(`/users/${id}`, data);
    }

    deleteUser(id){
        return http.delete(`/users/${id}`);
    }

    addNewUser(data){
        return http.post('/users', data);
    }

}

export default new LoginService();