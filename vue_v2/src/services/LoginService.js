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

}

export default new LoginService();