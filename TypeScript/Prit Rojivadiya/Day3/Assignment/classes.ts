class vacancies{
    numOfVacancy: number;
    jobID: number;
    position: string;
    Exp: number;
    Salary: number
    constructor(numOfVacancy: number,jobID: number,position: string,Exp: number,Salary: number){
        this.numOfVacancy = numOfVacancy;
        this.jobID = jobID;
        this.position = position;
        this.Exp = Exp;
        this.Salary = Salary;
    }

    getDetail(){
        console.log(`Number of vacancy: ${this.numOfVacancy}, JobID: ${this.jobID}, Position: ${this.position}, Experience Require: ${this.Exp}, Salary: ${this.Salary}`)
    }
}



class Applicants{
    id: number;
    name: string;
    email: string;
    phone: number;
    exp: number;
    jobid: number;
    ExpCTC: number;

    constructor(id: number,name: string,email: string,phone: number,exp: number,jobid: number,ExpCTC: number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.exp = exp
        this.jobid = jobid;
        this.ExpCTC = ExpCTC;
    }

    getDetail(){
        console.log(`id: ${this.id}, Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}, Experience: ${this.exp}, JobID: ${this.jobid}, Expected CTC: ${this.ExpCTC}`)
    }
}

export {vacancies,Applicants};