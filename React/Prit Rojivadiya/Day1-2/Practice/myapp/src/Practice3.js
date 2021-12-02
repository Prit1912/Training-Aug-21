// components and props

export default function Practice3() {
  return (
    <>
      <User fname="Prit" lname="Rojivadiya" />
      <User fname="Man" lname="Patel">
        <p>Child Element</p>
      </User>
      <User fname="Tirth" lname="Vasoya" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </>
  );
}

function User(props) {
  return (
    <>
      <p>{props.children}</p>
      <p>
        {props.fname} {props.lname}
      </p>
    </>
  );
}

// props example

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Prit",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
