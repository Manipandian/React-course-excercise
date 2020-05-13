import React from "react";
import personsData from "../Services/Persons"

const Person = (props) => {
  return (
    <div>
      {props.person.name}: {props.person.number} <button onClick={() => props.deleteData(props.person)} >Delete</button>
    </div>
  );
};

const Persons = (props) => {
  const filtered = props.filtered;
  const deleteData = (personData) => {
      if(window.confirm(`Do you really wants to delete ${personData.name} contact`)) {
        personsData.removeData(personData.id);
        props.setPerson( props.allPersons.filter((person) => person.id !== personData.id))
        props.setFilter( props.filtered.filter((person) => person.id !== personData.id))
      }
    }
  return (
    <>
      {filtered.map((person) => (
        <Person key={person.name} person={person} deleteData={deleteData}/>
      ))}
    </>
  );
};

export default Persons;
