// 3. Store above example info javascript variable and then display dynamically, 
// Display FullName variable in respective Component


export default function StudentIDCard2(){
    return(
        <>
            <h1>Assignment 3</h1>
            <Image />
            <Personal />
            <College />
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

function Personal(){
    const fname = "Prit";
    const lname = "Rojivadiya"
    const dob = "19/12/2000"
    return(
        <>
            <p>FullName = {`${fname} ${lname}`}</p>
            <p>DOB = {dob}</p>
        </>
    )
}

function College(){

    const collegeName = "GEC Gandhinagar"
    const collegeAddress = "Sector 28 Gandhinagar"

    return(
        <>
            <p>CollegeName = {collegeName}</p>
            <p>CollegeAddress = {collegeAddress}</p>
            <img src="/A1-01.jpg" width = "200px" alt="" />
        </>
    )
}