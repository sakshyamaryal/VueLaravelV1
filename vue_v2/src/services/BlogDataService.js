import http  from "../http-common"

class BlogsDataService {
    getAll(){
        return http.get("/blogs")
    }

    get(id) {
        return http.get(`/blogs/${id}`);
    }

    create(data){
        return http.post("/blogs", data)
    }

    update(id, data) {
        return http.put(`/blogs/${id}`, data);
    }

    delete(id) {
        return http.delete(`/blogs/${id}`);
    }

    deleteAll() {
        return http.delete(`/blogs`);
    }

    findByTitle(title) {
        return http.get(`/blogs?title=${title}`);
    }
}

export default new BlogsDataService();