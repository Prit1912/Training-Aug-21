// 2. Create a StudentIDCard Component which will include another component image,
// Personal Component include(ID,FirstName,LastName,DOB),
// College Component include collegeName,College Address and College Logo)


export default function StudentIDCard(){
    return(
        <>
            <h1>Assignment 2</h1>
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
    return(
        <>
            <p>FirstName = Prit</p>
            <p>LastName = Rojivadiya</p>
            <p>DOB = 19/12/2000</p>
        </>
    )
}

function College(){
    return(
        <>
            <p>CollegeName = GEC Gandhinagar</p>
            <p>CollegeAddress = Sector 28 Gandhinagar</p>
            <img src="/A1-01.jpg" width = "200px" alt="" />
        </>
    )
}