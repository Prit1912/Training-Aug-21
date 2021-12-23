<template>
    <div class="display-3 text-danger">Students Info</div>
    <hr>
    <div class="row">
        <div class="col-sm-8 ms-auto me-auto">
            <Student v-for="(stu) in studentsDetail" :item="stu" :key="stu.id" />
        </div>
    </div>
</template>

<script>

    import Student from './Student.vue'

    export default{
        name: 'StudentsList',
        components: {
            Student
        },
        data(){
            return{
                studentsDetail: [
                    {
                        id: 1,
                        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        fname: "Prit",
                        lname: "Rojivadiya",
                        dob: "19/12/2000",
                        collegeName: "Gec Gandhinagar",
                        collegeAddress: "Sector28 Gandhinagar",
                        clgLogo: "https://github.com/Prit1912/Training-Aug-21/blob/main/React/Prit%20Rojivadiya/Day1-2/Assignment/assignment/public/P.jpg?raw=true",
                    },
                    {
                        id: 2,
                        image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        fname: "Man",
                        lname: "Rojivadiya",
                        dob: "31/12/2000",
                        collegeName: "Gec Rajkot",
                        collegeAddress: "Rajkot Gujarat",
                        clgLogo: "https://github.com/Prit1912/Training-Aug-21/blob/main/React/Prit%20Rojivadiya/Day1-2/Assignment/assignment/public/D.jpg?raw=true",
                    },
                    {
                        id: 3,
                        image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                        fname: "Tirth",
                        lname: "Rojivadiya",
                        dob: "30/08/2000",
                        collegeName: "Gec Bhavanagar",
                        collegeAddress: "Bhavnagar Gujarat",
                        clgLogo: "https://github.com/Prit1912/Training-Aug-21/blob/main/React/Prit%20Rojivadiya/Day1-2/Assignment/assignment/public/A1-01.jpg?raw=true",
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>