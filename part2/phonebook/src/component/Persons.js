import React from "react";

const Person = (props) => {
  return (
    <div>
      {props.person.name}: {props.person.number}
    </div>
  );
};

const Persons = (props) => {
  const persons = props.persons;
  return (
    <>
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </>
  );
};

export default Persons;
