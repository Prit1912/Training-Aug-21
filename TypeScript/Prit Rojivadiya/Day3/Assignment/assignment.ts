/* This project is aimed at developing a web-based and central Recruitment Process System for the HR Group 
for a company. Some features of this system will be creating vacancies, storing Applicants data, 
Interview process initiation, Scheduling Interviews, Storing Interview results for the applicant and 
finally Hiring of the applicant. Reports may be required to be generated for the use of HR group. */


import {vacancies,Applicants} from './classes'

let vacancyArr = [];
let applicantArr = [];

function addVacancy(numOfVacancy: number,jobid: number,position: string,exp: number,salary: number){
    let vacancy:vacancies = new vacancies(numOfVacancy,jobid,position,exp,salary);
    vacancyArr.push(vacancy);
    vacancy.getDetail();
}

addVacancy(4,1,'ReactJS developer',2,50000);
addVacancy(2,2,' Senior ReactJS developer',3,60000);
addVacancy(3,3,'.net developer',2,40000);
addVacancy(5,4,'NodeJS developer',1,40000);
addVacancy(1,5,'Android developer',2,50000);

console.log(vacancyArr);

function addApplicant(id:number,name:string,email:string,phone:number,exp:number,jobid:number,expCTC:number){
    let applicant: Applicants = new Applicants(id,name,email,phone,exp,jobid,expCTC);
    applicantArr.push(applicant);
    applicant.getDetail();
}

addApplicant(1,"a1","a1@gmail.com",9898767654,3,2,60000)
addApplicant(2,"a2","a2@gmail.com",9898767754,2,1,55000)
addApplicant(3,"a3","a3@gmail.com",9898767854,1,3,40000)
addApplicant(4,"a4","a4@gmail.com",9898767954,4,2,70000)
addApplicant(5,"a5","a5@gmail.com",9898767694,2,4,40000)
addApplicant(6,"a6","a6@gmail.com",9898767650,1,5,55000)

console.log(applicantArr);

let interviewOfApplicants = [];
let rejectedApplicants = [];
let selectedApplicants = [];

for(let ap of applicantArr){
    let jobId = ap.jobid;
    let reqExp: number;
    for(let vac of vacancyArr){
        if(vac.jobID == jobId){
            reqExp = vac.Exp;
            break;
        }
    }
    if(ap.exp < reqExp){
        rejectedApplicants.push(ap);
    }else{
        interviewOfApplicants.push(ap);
    }
}

// console.log("Applicants call for interview" , interviewOfApplicants);

for(let i of interviewOfApplicants){
    let jobId = i.jobid;
    let salary: number;
    for(let vac of vacancyArr){
        if(vac.jobID == jobId){
            salary = vac.Salary;
            break;
        }
    }
    if(i.ExpCTC > salary){
        rejectedApplicants.push(i);
    }else{
        selectedApplicants.push(i);
    }
}

// console.log("Rejected Applicants" , rejectedApplicants);
// console.log("Selected Applicants", selectedApplicants);

console.log("\n-------------------Selected Applicants-------------------------");
for(let y of selectedApplicants){
    console.log(`\nApplicant ID   :  ${y.id}`)
    console.log(`Applicant Name   :  ${y.name}`)
    console.log(`Applicant Email  :  ${y.email}`)
    console.log(`Applicant Phone  :  ${y.phone}`)
    console.log(`Applicant JobID  :  ${y.jobid}`)
    console.log('\n---------------------------------------------------------------')
}
