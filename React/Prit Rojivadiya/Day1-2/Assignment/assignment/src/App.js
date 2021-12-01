import logo from './logo.svg';
import './App.css';
import Greet from './Assignment1'
import StudentIDCard from './Assignment2';
import StudentIDCard2 from './Assignment3';
import StudentIDCard3 from './Assignment4';
import StudentIDCard4 from './Assignment5';
import StudentIDCard5 from './Assignment6';

function App() {
  return (
    <>
      <Greet />
      <StudentIDCard />
      <br />  
      <StudentIDCard2 />
      <br />
      <StudentIDCard3 />
      <br />
      <StudentIDCard4 />
      <br />
      <StudentIDCard5 >
        <>
          <h1>This is child prop</h1>
        </>
      </StudentIDCard5>
      <br />
    </>
  );
}

export default App;
