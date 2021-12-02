import "./Project.css";

export default function Project() {
  return (
    <>
      <div className="person-list">
        <Person
          imgUrl="https://randomuser.me/api/portraits/thumb/men/75.jpg"
          name="Prit"
          job="react developer"
        />
        <Person
          imgUrl="https://randomuser.me/api/portraits/thumb/men/76.jpg"
          name="Man"
          job="node developer"
        >
          <p>Man is a node developer</p>
        </Person>
        <Person
          imgUrl="https://randomuser.me/api/portraits/thumb/men/77.jpg"
          name="Tirth"
          job="Vue developer"
        />
      </div>
    </>
  );
}

function Person({ imgUrl, name, job, children }) {
  return (
    <>
      <div className="person">
        <img src={imgUrl} alt="" />
        <h2>{name}</h2>
        <h4>{job}</h4>
        {children}
      </div>
    </>
  );
}
