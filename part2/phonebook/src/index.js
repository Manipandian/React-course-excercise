import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Persons from "./component/Persons";
import PersonForm from "./component/PersonForm";
import Filtered from "./component/Filtered";

const App = () => {
  const [persons, setPerson] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [names, setName] = useState(persons.map((person) => person["name"]));
  const [filteredList, setFilter] = useState([...persons]);
  const [filterValue, setValue] = useState("");
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
      <Persons persons={filteredList} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
