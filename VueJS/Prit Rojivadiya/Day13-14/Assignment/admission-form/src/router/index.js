import { createWebHistory, createRouter } from "vue-router";
import Students from '../components/Students.vue'
import AddStudent from '../components/AddStudent.vue'
import StudentDetail from '../components/StudentDetail.vue'
import UpdateStudent from "../components/UpdateStudent.vue"

const routes = [
    {
        path: "/students",
        name: 'students',
        component: Students
    },
    {
        path: "/add-student",
        name: 'addStudent',
        component: AddStudent
    },
    {
        path: "/students/:id",
        name: "student",
        component: StudentDetail
    },
    {
        path: "/students/:id",
        name: "UpdateStudent",
        component: UpdateStudent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;