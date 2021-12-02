// JSX concept

const day = "Sunday";

const user = {
    fname: "Prit",
    lname: "Rojivadiya"
}

function formatUser(user){
    return user.fname + " " + user.lname;
}

let imgUrl = 'http://res.cloudinary.com/demo/image/upload/w_150,h_100,c_fill,r_20/sample.png';

const divElement = (
    <div>
        <h1>hello</h1>
        <h2>Good morning</h2>
    </div>
)

export default function Practice2(){

    return(
        <>
            <p>Today is {day}</p>
            <p>{formatUser(user)}</p>
            <img src={imgUrl} alt="flower_img" />
            {divElement}
        </>
    )
}
