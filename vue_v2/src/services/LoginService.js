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

}

export default new LoginService();