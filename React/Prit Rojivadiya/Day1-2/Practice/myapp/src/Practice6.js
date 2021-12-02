// lists and keys

export default function Practice6() {
  return (
    <>
      <StateName />
      <NumberList numbers = {[1,2,3,4,5]}/>
    </>
  );
}

// map method

function StateName() {
  const states = ["Gujarat", "Rajasthan", "Maharashtra", "Karnataka", "Goa"];
  const statesList = states.map((state) => {
    return <li>{state}</li>;
  });

  return (
    <>
      <ul>{statesList}</ul>
    </>
  );
}

// key usage in map method

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}
