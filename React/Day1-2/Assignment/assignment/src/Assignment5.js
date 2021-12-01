// 5. Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address 
// and CollegeLogo and pass it as Object to the StudentIDCardComponent.

const stuArr = [
    {id: 1, image: '/logo192.png', fname:"Prit", lname:"Rojivadiya",dob:"19/12/2000", collegeName:"Gec Gandhinagar", collegeAddress:"Sector28 Gandhinagar", clgLogo:'/A1-01.jpg'},
    {id: 2, image: '/logo192.png', fname:"Man", lname:"Rojivadiya",dob:"31/12/2000", collegeName:"Gec Rajkot", collegeAddress:"Rajkot Gujarat", clgLogo:'/A1-01.jpg'},
    {id: 3, image: '/logo192.png', fname:"Tirth", lname:"Rojivadiya",dob:"30/08/2000", collegeName:"Gec Bhavanagar", collegeAddress:"Bhavnagar Gujarat", clgLogo:'/A1-01.jpg'}
]

export default function StudentIDCard4(){
    return(
        <>
            <h1>Assignment 5</h1>
            {
                stuArr.map((stu,index)=>{
                    return(
                        <>
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