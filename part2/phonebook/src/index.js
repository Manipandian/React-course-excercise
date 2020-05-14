import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Persons from "./component/Persons";
import PersonForm from "./component/PersonForm";
import Filtered from "./component/Filtered";
import personsData from "./Services/Persons";
import './index.css'


const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className={(message.indexOf('successfully') !== -1) ? "success" : "error"}>
    {message}
    </div>
  )
}

const App = () => {
  const [persons, setPerson] = useState([]);
  const [names, setName] = useState(persons.map((person) => person["name"]));
  const [filteredList, setFilter] = useState([...persons]);
  const [filterValue, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const hook = () => {
    personsData.getAll().then(dataAccessed => {
      setPerson(dataAccessed);
      setFilter(dataAccessed);
      setName(dataAccessed.map((person) => person["name"]));
    })
  };

  useEffect(hook, []);
  return (
    <div>
      <Notification message={errorMessage}/>
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
        setErrorMessage={setErrorMessage}
      />
      <h3>Numbers</h3>
      <Persons filtered={filteredList} allPersons={persons} setPerson={setPerson} setFilter={setFilter}/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
