import { createWebHistory, createRouter } from "vue-router";
import Employees from '../components/Employees.vue'
import AddEmployee from '../components/AddEmployee'
import UpdateEmployee from '../components/UpdateEmployee'
import EmployeeDetail from '../components/EmployeeDetail'

const routes = [
    {
        path: "/employees",
        name: 'employees',
        component: Employees
    },
    {
        path: "/employees/:id",
        name: 'empDetail',
        component: EmployeeDetail
    },
    {
        path: "/add-employee",
        name: 'addEmployee',
        component: AddEmployee
    },
    {
        path: "/employees/:id",
        name: "updateEmployee",
        component: UpdateEmployee
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;