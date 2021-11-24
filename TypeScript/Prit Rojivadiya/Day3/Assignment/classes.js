"use strict";
exports.__esModule = true;
exports.Applicants = exports.vacancies = void 0;
var vacancies = /** @class */ (function () {
    function vacancies(numOfVacancy, jobID, position, Exp, Salary) {
        this.numOfVacancy = numOfVacancy;
        this.jobID = jobID;
        this.position = position;
        this.Exp = Exp;
        this.Salary = Salary;
    }
    vacancies.prototype.getDetail = function () {
        console.log("Number of vacancy: ".concat(this.numOfVacancy, ", JobID: ").concat(this.jobID, ", Position: ").concat(this.position, ", Experience Require: ").concat(this.Exp, ", Salary: ").concat(this.Salary));
    };
    return vacancies;
}());
exports.vacancies = vacancies;
var Applicants = /** @class */ (function () {
    function Applicants(id, name, email, phone, exp, jobid, ExpCTC) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.exp = exp;
        this.jobid = jobid;
        this.ExpCTC = ExpCTC;
    }
    Applicants.prototype.getDetail = function () {
        console.log("id: ".concat(this.id, ", Name: ").concat(this.name, ", Email: ").concat(this.email, ", Phone: ").concat(this.phone, ", Experience: ").concat(this.exp, ", JobID: ").concat(this.jobid, ", Expected CTC: ").concat(this.ExpCTC));
    };
    return Applicants;
}());
exports.Applicants = Applicants;
