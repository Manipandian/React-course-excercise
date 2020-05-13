import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Persons from "./component/Persons";
import PersonForm from "./component/PersonForm";
import Filtered from "./component/Filtered";
import personsData from "./Services/Persons"

const App = () => {
  const [persons, setPerson] = useState([]);
  const [names, setName] = useState(persons.map((person) => person["name"]));
  const [filteredList, setFilter] = useState([...persons]);
  const [filterValue, setValue] = useState("");

  const hook = () => {
    console.log("Effect");
    personsData.getAll().then(dataAccessed => {
      setPerson(dataAccessed);
      setFilter(dataAccessed);
      setName(dataAccessed.map((person) => person["name"]));
    })
    // axios.get("http://localhost:3001/persons").then((resposnse) => {
    //   console.log("promise fulfilled");
    //   setPerson(resposnse.data);
    //   setFilter(resposnse.data);
    // });
  };

  useEffect(hook, []);

  console.log("render", persons.length, "notes");
  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with:
      <Filtered
        filter={filteredList}
        persons={persons}
        setFilter={setFilter}
        setValue={setValue}
        filterValue={filterValue}
      />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        names={names}
        setPerson={setPerson}
        setName={setName}
        setFilter={setFilter}
        filter={filteredList}
        resetFilterValue={setValue}
      />
      <h3>Numbers</h3>
      <Persons filtered={filteredList} allPersons={persons} setPerson={setPerson} setFilter={setFilter}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
