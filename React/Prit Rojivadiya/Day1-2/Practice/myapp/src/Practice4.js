// handling events

export default function Practice4(){

    function handleEvent(e){
        e.preventDefault();
        const inputVal = document.getElementsByName('fname')[0].value;
        document.getElementById('fname').innerHTML = inputVal
    }

    return(
        <>
            <form>
                <input type="text" name="fname" placeholder="Enter First Name" />
                <br />
                <br />
                <button type = "submit" onClick = {handleEvent} >Submit</button>
            </form>
            <h3>First Name: <span id="fname"></span> </h3>
        </>
    )
}