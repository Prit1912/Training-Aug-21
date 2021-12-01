// 4. Call StudentID Card component 3 times and pass different student data using props.

export default function StudentIDCard3(){
    return(
        <>
            <h1>Assignment 4</h1>
            <StudentIDCard fname="Prit" lname="Rojivadiya" dob = "19/12/2000" collegeName="Gec Gandhinagar" collegeAddress="Sector28 Gandhinagar"/>
            <br />
            <StudentIDCard fname="Man" lname="Rojivadiya" dob = "31/12/2004" collegeName="Gec Rajkot" collegeAddress="Rajkot Gujarat"/>
            <br />
            <StudentIDCard fname="Tirth" lname="Rojivadiya" dob = "30/08/2008" collegeName="Gec Bhavnagar" collegeAddress="Bhavnagar Gujarat"/>
        </>
    )
}

function StudentIDCard(props){
    return(
        <>
            <Image />
            <Personal fname = {props.fname} lname = {props.lname} dob = {props.dob}/>
            <College clgname = {props.collegeName} clgaddress = {props.collegeAddress}/>
        </>
    )
}

function Image(){
    return(
        <>
            <img src="/logo192.png" alt="stuImage" />
        </>
    )
}

function Personal({fname,lname,dob}){
    return(
        <>
            <p>FullName = {`${fname} ${lname}`}</p>
            <p>DOB = {dob}</p>
        </>
    )
}

function College({clgname,clgaddress}){

    return(
        <>
            <p>CollegeName = {clgname}</p>
            <p>CollegeAddress = {clgaddress}</p>
            <img src="/A1-01.jpg" width = "200px" alt="" />
        </>
    )
}