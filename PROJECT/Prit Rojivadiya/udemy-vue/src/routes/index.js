import { createWebHashHistory, createRouter } from "vue-router";
// import userStore from '../store/modules/user'
import store from '../store'
console.log(store.state)

// auth routes
import Login from "../views/auth/Login.vue";
import Signup from "../views/auth/Signup.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import ResetPassword from "../views/auth/ResetPassword.vue";

// user routes
import Main from "../views/user/Main.vue";
import Home from "../views/user/Home.vue";
import About from "../views/user/About.vue";
import TeachOnUdemy from "../views/user/TeachOnUdemy.vue";
import Cart from "../views/user/Cart.vue";
import Wishlist from "../views/user/Wishlist.vue";
import Profile from "../views/user/Profile.vue";
import MyCourses from "../views/user/MyCourses.vue";
import FullCourse from "../views/user/EnrolledCourse.vue"
import AllCourses from "../views/courses/AllCourses.vue";
import CourseInfo from "../views/courses/CourseInfo.vue";
import CategoryWiseCourses from "../views/courses/CategoryWiseCourses.vue";
import SubCateWiseCourses from "../views/courses/SubCateWiseCourses.vue";

// instructor routes
import InstMain from "../views/instructor/Main.vue";
import InstHome from "../views/instructor/Home.vue";
import InstAbout from "../views/instructor/About.vue";
import InstProfile from "../views/instructor/Profile.vue";
import HowToTeach from "../views/instructor/HowToTeach.vue";
import InstCourses from "../views/instructor/courses/MyCourses.vue";
import InstFullCourse from "../views/instructor/courses/FullCourse.vue";
import Reviews from '../views/instructor/courses/Reviews.vue';
import Buyers from "../views/instructor/courses/Buyers.vue";
import AddCourse from '../views/instructor/courses/AddCourse.vue';
import UpdateCourse from '../views/instructor/courses/UpdateCourse.vue'

// admin routes
import AdminMain from "../views/admin/Main.vue";
import AdminHome from "../views/admin/Home.vue";
import AdminProfile from "../views/admin/Profile.vue";
import Categories from "../views/admin/categories/Home.vue";
import Courses from "../views/admin/courses/Home.vue";
import Offers from "../views/admin/offers/Home.vue";
import Users from "../views/admin/users/Home.vue";
import AddCategory from "../views/admin/categories/AddCategory.vue";
import AddSubCategory from "../views/admin/categories/AddSubCategory.vue";
import UpdateCategory from "../views/admin/categories/EditCategory.vue";
import UpdateSubCategory from '../views/admin/categories/EditSubCategory.vue';
import AdminCourseSummary from '../views/admin/courses/Summary.vue';
import AdminCourseBuyers from '../views/admin/courses/Buyers.vue';
import AdminCourseUpdate from '../views/admin/courses/UpdateCourse.vue';
import UpdateUser from '../views/admin/users/UpdateUser.vue';
import AddOffer from '../views/admin/offers/AddOffer.vue';
import UpdateOffer from '../views/admin/offers/UpdateOffer.vue';

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "about",
        name: "about",
        component: About,
      },
      {
        path: "teach-on-udemy",
        name: "teachOnUdemy",
        component: TeachOnUdemy,
      },
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "signup",
        name: "signup",
        component: Signup,
      },
      {
        path: "forgot-password",
        name: "forgotPassword",
        component: ForgotPassword,
      },
      {
        path: "reset-password/:token",
        name: "resetPassword",
        component: ResetPassword,
      },
      {
        path: "cart",
        name: "cart",
        component: Cart,
        meta: {requiresAuth: true, role: 'user'}
      },
      {
        path: "wishlist",
        name: "wishlist",
        component: Wishlist,
        meta: {requiresAuth: true, role: 'user'}
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        meta: {requiresAuth: true, role: 'user'}
      },
      {
        path: "my-courses",
        name: "myCourses",
        component: MyCourses,
        meta: {requiresAuth: true, role: 'user'}
      },
      {
        path: 'my-courses/:id',
        name: 'enrolledCourse',
        component: FullCourse,
        meta: {requiresAuth: true, role: 'user'}
      },
      {
        path: "courses",
        name: "allCourses",
        component: AllCourses,
      },
      {
        path: 'courses/category/:cname',
        name: 'categoryWiseCourses',
        component: CategoryWiseCourses,
      },
      {
        path: 'courses/category/:cname/subcategory/:sname',
        name: 'subCategoryWiseCourses',
        component: SubCateWiseCourses
      },
      {
        path: "courses/:id",
        name: "courseInfo",
        component: CourseInfo,
      },
    ],
  },
  {
    path: "/instructor",
    name: "instMain",
    component: InstMain,
    meta: {requiresAuth: true, role: 'instructor'},
    children: [
      {
        path: "",
        name: "instHome",
        component: InstHome,
      },
      {
        path: "about",
        name: "instAbout",
        component: InstAbout,
      },
      {
        path: "profile",
        name: "instProfile",
        component: InstProfile,
      },
      {
        path: "how-to-teach",
        name: 'howToTeach',
        component: HowToTeach,
      },
      {
        path: "my-courses",
        name: 'instCourses',
        component: InstCourses,
      },
      {
        path: "my-courses/:id",
        name: 'instFullCourse',
        component: InstFullCourse,
      },
      {
        path: 'my-courses/:id/update',
        name: 'updateCourse',
        component: UpdateCourse,
        props: true,
      },
      {
        path: "my-courses/:id/reviews",
        name: 'reviews',
        component: Reviews,
      },
      {
        path: "my-courses/:id/buyers",
        name: 'buyers',
        component: Buyers,
      },
      {
        path: "add-course",
        name: 'addCourse',
        component: AddCourse,
      }
    ],
  },
  {
    path: '/admin',
    name: 'adminMain',
    component: AdminMain,
    meta: {requiresAuth: true, role: 'admin'},
    children:[
      {
        path: '',
        name: 'adminHome',
        component: AdminHome
      },
      {
        path: 'profile',
        name: 'adminProfile',
        component: AdminProfile
      },
      {
        path: 'categories',
        name: 'categories',
        component: Categories
      },
      {
        path: 'categories/add-category',
        name: 'addcategory',
        component: AddCategory
      },
      {
        path: 'categories/add-subcategory',
        name: 'addSubCategory',
        component: AddSubCategory
      },
      {
        path: 'categories/:id',
        name: 'updateCategory',
        component: UpdateCategory,
        props: true
      },
      {
        path: 'categories/:cId/subcategory/:sId',
        name: 'updateSubCategory',
        component: UpdateSubCategory,
        props: true
      },
      {
        path: 'offers',
        name: 'offers',
        component: Offers
      },
      {
        path: 'add-offer',
        name: 'addOffer',
        component: AddOffer
      },
      {
        path: 'offers/:id',
        name: 'updateOffer',
        component: UpdateOffer,
        props: true,
      },
      {
        path: 'courses',
        name: 'courses',
        component: Courses
      },
      {
        path: 'courses/:id/summary',
        name: 'courseSummary',
        component: AdminCourseSummary,
        props: true
      },
      {
        path: 'courses/:id/buyers',
        name: 'courseBuyers',
        component: AdminCourseBuyers,
        props: true
      },
      {
        path: 'courses/:id/update',
        name: 'updateCourseByAdmin',
        component: AdminCourseUpdate,
        props: true
      },
      {
        path: 'users',
        name: 'users',
        component: Users
      },
      {
        path: 'users/:id',
        name: 'updateUser',
        component: UpdateUser,
        props: true
      }
    ]
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
    let token = store.state.user.token;
    if(!token){
      next('/login')
    }
    let user = store.state.user.user;
    let isLoggedIn = store.state.user.isLoggedIn;

    if(user && isLoggedIn && to.meta.role == user.role){
      next();
    }else{
      next('/login');
    }

  }else{
    next();
  }
});

export default router;
