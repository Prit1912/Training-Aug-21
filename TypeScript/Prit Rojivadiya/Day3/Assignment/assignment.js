"use strict";
/* This project is aimed at developing a web-based and central Recruitment Process System for the HR Group
for a company. Some features of this system will be creating vacancies, storing Applicants data,
Interview process initiation, Scheduling Interviews, Storing Interview results for the applicant and
finally Hiring of the applicant. Reports may be required to be generated for the use of HR group. */
exports.__esModule = true;
var classes_1 = require("./classes");
var vacancyArr = [];
var applicantArr = [];
function addVacancy(numOfVacancy, jobid, position, exp, salary) {
    var vacancy = new classes_1.vacancies(numOfVacancy, jobid, position, exp, salary);
    vacancyArr.push(vacancy);
    vacancy.getDetail();
}
addVacancy(4, 1, 'ReactJS developer', 2, 50000);
addVacancy(2, 2, ' Senior ReactJS developer', 3, 60000);
addVacancy(3, 3, '.net developer', 2, 40000);
addVacancy(5, 4, 'NodeJS developer', 1, 40000);
addVacancy(1, 5, 'Android developer', 2, 50000);
console.log(vacancyArr);
function addApplicant(id, name, email, phone, exp, jobid, expCTC) {
    var applicant = new classes_1.Applicants(id, name, email, phone, exp, jobid, expCTC);
    applicantArr.push(applicant);
    applicant.getDetail();
}
addApplicant(1, "a1", "a1@gmail.com", 9898767654, 3, 2, 60000);
addApplicant(2, "a2", "a2@gmail.com", 9898767754, 2, 1, 55000);
addApplicant(3, "a3", "a3@gmail.com", 9898767854, 1, 3, 40000);
addApplicant(4, "a4", "a4@gmail.com", 9898767954, 4, 2, 70000);
addApplicant(5, "a5", "a5@gmail.com", 9898767694, 2, 4, 40000);
addApplicant(6, "a6", "a6@gmail.com", 9898767650, 1, 5, 55000);
console.log(applicantArr);
var interviewOfApplicants = [];
var rejectedApplicants = [];
var selectedApplicants = [];
for (var _i = 0, applicantArr_1 = applicantArr; _i < applicantArr_1.length; _i++) {
    var ap = applicantArr_1[_i];
    var jobId = ap.jobid;
    var reqExp = void 0;
    for (var _a = 0, vacancyArr_1 = vacancyArr; _a < vacancyArr_1.length; _a++) {
        var vac = vacancyArr_1[_a];
        if (vac.jobID == jobId) {
            reqExp = vac.Exp;
            break;
        }
    }
    if (ap.exp < reqExp) {
        rejectedApplicants.push(ap);
    }
    else {
        interviewOfApplicants.push(ap);
    }
}
// console.log("Applicants call for interview" , interviewOfApplicants);
for (var _b = 0, interviewOfApplicants_1 = interviewOfApplicants; _b < interviewOfApplicants_1.length; _b++) {
    var i = interviewOfApplicants_1[_b];
    var jobId = i.jobid;
    var salary = void 0;
    for (var _c = 0, vacancyArr_2 = vacancyArr; _c < vacancyArr_2.length; _c++) {
        var vac = vacancyArr_2[_c];
        if (vac.jobID == jobId) {
            salary = vac.Salary;
            break;
        }
    }
    if (i.ExpCTC > salary) {
        rejectedApplicants.push(i);
    }
    else {
        selectedApplicants.push(i);
    }
}
// console.log("Rejected Applicants" , rejectedApplicants);
// console.log("Selected Applicants", selectedApplicants);
console.log("\n-------------------Selected Applicants-------------------------");
for (var _d = 0, selectedApplicants_1 = selectedApplicants; _d < selectedApplicants_1.length; _d++) {
    var y = selectedApplicants_1[_d];
    console.log("\nApplicant ID   :  ".concat(y.id));
    console.log("Applicant Name   :  ".concat(y.name));
    console.log("Applicant Email  :  ".concat(y.email));
    console.log("Applicant Phone  :  ".concat(y.phone));
    console.log("Applicant JobID  :  ".concat(y.jobid));
    console.log('\n---------------------------------------------------------------');
}
