import PersonCard from "./components/Person_card";

const peopleArr = [
  {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "black",
  },
  {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "brown",
  }
];

function App() {
  return (
    <div className="App">
      {peopleArr.map((personObj, index) => (
        <PersonCard
          key={index}
          firstName={personObj.firstName}
          lastName={personObj.lastName}
          age={personObj.age}
          hairColor={personObj.hairColor}
        />
      ))}
      
    </div>
  );
}

export default App;