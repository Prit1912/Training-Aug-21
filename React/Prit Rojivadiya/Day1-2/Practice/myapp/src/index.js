import React from "react";
import ReactDOM from "react-dom";
import './index.css'

function Greeting() {

  const txt = 'hello'
  const fname = 'Prit'
  const lname = 'Rojivadiya'

  // return React.createElement('div',{},'hello') // element props children
  return(
    <React.Fragment>
      {txt}
      <br />
      {`${fname} ${lname}`}
      <h1 className = "heading">Hello world</h1>
      <button className = "btn" style = {{color: "red"}} >Click</button>
      <Person />
      <Image />
      <PersonDetail fname = "Prit" lname = "Rojivadiya">
        <p>This is child prop</p>
      </PersonDetail>
      <PersonDetail fname = "Raj" lname = "Patel"/>
      <PersonDetail fname = "Jay" lname = "Patel"/>
    </React.Fragment>
  )
}


const personCss = {
  backgroundColor: 'yellow'
}

const PersonDetail = ({children,fname,lname})=>{
  return(
    <>
    {/* <br />
      FirstName = {props.fname}
      <br />
      LastName = {props.lname}
      <br />
      {props.children} */}

      <br />
      FirstName = {fname};
      <br />
      LastName = {lname};
      <br />
      {children}
    </>
    )
}

const Person = ()=> <h2 style = {personCss}>Prit Rojivadiya</h2>

const Image = () => {
  return(
    <>
      <img src="https://camo.githubusercontent.com/3416d4ade73b86959286ddcb5f4d8994214f256ac0b747a9a7f571e7e7c5d53f/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f64656d6f2f696d6167652f75706c6f61642f775f3135302c685f3130302c635f66696c6c2f73616d706c652e6a7067" alt="" />
    </>
  )
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
