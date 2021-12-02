// 5. Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address
// and CollegeLogo and pass it as Object to the StudentIDCardComponent.

import "./assignment.css";

const stuArr = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fname: "Prit",
    lname: "Rojivadiya",
    dob: "19/12/2000",
    collegeName: "Gec Gandhinagar",
    collegeAddress: "Sector28 Gandhinagar",
    clgLogo: "/A1-01.jpg",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fname: "Man",
    lname: "Rojivadiya",
    dob: "31/12/2000",
    collegeName: "Gec Rajkot",
    collegeAddress: "Rajkot Gujarat",
    clgLogo: "/d.jpg",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    fname: "Tirth",
    lname: "Rojivadiya",
    dob: "30/08/2000",
    collegeName: "Gec Bhavanagar",
    collegeAddress: "Bhavnagar Gujarat",
    clgLogo: "/p.jpg",
  },
];

export default function StudentIDCard4() {
  return (
    <div className="container">
      <h1 className="display-3 text-danger">Students Details</h1>
      <hr />
      <div className="row justify-content-center">
        {stuArr.map((stu, index) => {
          return (
            <div className="students col-8">
              <StudentIDCard data={stu} />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StudentIDCard(props) {
  const { id, image, fname, lname, dob, collegeName, collegeAddress, clgLogo } =
    props.data;

  return (
    <div className="card">
      <div className="card-body">
        <h1>{id}.</h1>
        <div className="row text-center">
            <h2 className = "text-success">Student Info</h2>
          <div className="col-12 col-sm-6 align-self-center">
            <Image url={image} />
          </div>
          <div className="col-12 col-sm-6 align-self-center">
            <Personal fname={fname} lname={lname} dob={dob} />
          </div>
        </div>
        <hr />
        <College
          clgname={collegeName}
          clgaddress={collegeAddress}
          clglogo={clgLogo}
        />
      </div>
    </div>
  );
}

function Image(props) {
  return (
    <div className="stuImage">
      <img src={props.url} className = "img-fluid rounded img-thumbnail" width = "200px" alt="stuImage" />
    </div>
  );
}

function Personal({ fname, lname, dob }) {
  return (
    <div className="personalInfo">
        <h5>First Name: {fname}</h5>
        <h5>Last Name: {lname}</h5>
        <h5>DOB: {dob}</h5>
    </div>
  );
}

function College({ clgname, clgaddress, clglogo }) {
  return (
    <div className="clgInfo">
      <div className="row my-3 text-center">
          <h2 className = "text-success">College Info</h2>
        <div className="col-12 col-sm-6 align-self-center">
          <h5>College Name = {clgname}</h5>
          <h5>College Address = {clgaddress}</h5>
        </div>
        <div className="col-12 col-sm-6 align-self-center">
            <h5>College Logo</h5>
          <img src={clglogo} width="200px" height="200px" alt="" />
        </div>
      </div>
    </div>
  );
}
