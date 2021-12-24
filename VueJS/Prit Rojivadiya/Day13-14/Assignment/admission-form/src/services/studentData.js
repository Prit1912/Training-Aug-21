import http from '../http-common'
import router from '../router/index'

class stuServices{
    getStudents(){
        return http.get("/students")
    }

    getStudent(id){
        return http.get(`/students/${id}`)
    }

    updateStudent(id,data){
        http.put(`/students/${id}`,data).then((res)=>{
            if (res.status=== 200) {
                router.push('/students');
              }
        }).catch((err)=>{
            console.log(err)
        })
    }

    deleteStudent(id){
        return http.delete(`/students/${id}`)
    }

    addStudent(data){
        http.post("/students",data).then((res)=>{
            if (res.status === 200) {
                router.push('/students');
            }
        }).catch((err)=>{
            console.log(err.message);
        })
    }
}
export default new stuServices();