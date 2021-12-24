import http from '../http-common'
import router from '../router/index'

class empServices{
    getEmployees(){
        return http.get("/employees")
    }

    getEmployee(id){
        return http.get(`/employees/${id}`)
    }

    addEmployee(data){
        // console.log(data);
        // return http.post("/employees",data);
        http.post("/employees",data).then((res)=>{
            if (res.status=== 200) {
                router.push('/employees');
              }
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    deleteEmployee(id){
        return http.delete(`/employees/${id}`)
    }

    updateEmployee(id,data){
        http.put(`/employees/${id}`,data).then((res)=>{
            if (res.status=== 200) {
                router.push('/employees');
              }
        }).catch((err)=>{
            console.log(err.message)
        })
    }
}

export default new empServices();