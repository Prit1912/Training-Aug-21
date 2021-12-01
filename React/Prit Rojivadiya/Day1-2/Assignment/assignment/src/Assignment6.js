// 6. While calling StudentID Component in the app Component pass one <p>Student Details</p> as children. 
// Access it in the StudentID Card Component with Children props.

const stuArr = [
    {id: 1, image: '/logo192.png', fname:"Prit", lname:"Rojivadiya",dob:"19/12/2000", collegeName:"Gec Gandhinagar", collegeAddress:"Sector28 Gandhinagar", clgLogo:'/A1-01.jpg'},
    {id: 2, image: '/logo192.png', fname:"Man", lname:"Rojivadiya",dob:"31/12/2000", collegeName:"Gec Rajkot", collegeAddress:"Rajkot Gujarat", clgLogo:'/A1-01.jpg'},
    {id: 3, image: '/logo192.png', fname:"Tirth", lname:"Rojivadiya",dob:"30/08/2000", collegeName:"Gec Bhavanagar", collegeAddress:"Bhavnagar Gujarat", clgLogo:'/A1-01.jpg'}
]

export default function StudentIDCard5(props){
    return(
        <>
            <h1>Assignment 6</h1>
            {
                stuArr.map((stu,index)=>{
                    return(
                        <>
                            {props.children}
                            <StudentIDCard data = {stu}/>
                            <br />
                        </>
                        )
                })
            }
        </>
    )
}

function StudentIDCard(props){
    const {image,fname,lname,dob,collegeName,collegeAddress, clgLogo} = props.data

    return(
        <>
            <Image url = {image}/>
            <Personal fname = {fname} lname = {lname} dob = {dob}/>
            <College clgname = {collegeName} clgaddress = {collegeAddress} clglogo = {clgLogo}/>
        </>
    )
}

function Image(props){
    return(
        <>
            <img src={props.url} alt="stuImage" />
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

function College({clgname,clgaddress,clglogo}){

    return(
        <>
            <p>CollegeName = {clgname}</p>
            <p>CollegeAddress = {clgaddress}</p>
            <img src={clglogo} width = "200px" alt="" />
        </>
    )
}