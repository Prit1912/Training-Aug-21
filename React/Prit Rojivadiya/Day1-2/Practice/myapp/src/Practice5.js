// conditional rendering

export default function Practice5() {
  return (
    <>
        <Greeting isLoggedIn = {true}/>
        <Messages />
    </>
  );
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// Inline If with Logical && Operator

function Messages(){
    let msgCount = 0
    return(
        <>
            { msgCount > 0 && <p>There are {msgCount} messages</p> }
            { msgCount ? <p>There are {msgCount} messages</p> : 'there are no messages'}
        </>
    )
}
