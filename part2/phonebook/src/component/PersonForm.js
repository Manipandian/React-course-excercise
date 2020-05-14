import React, { useState } from "react";
import personsData from "../Services/Persons";

const PersonForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addName = (event) => {
    setName(event.target.value);
  };
  const addNumber = (event) => {
    setNumber(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();
    if (name === "" || number === "") {
      window.alert("Please enter value for name and number");
    } else if (props.names.indexOf(name) === -1) {
      const newPerson = {
        name: name,
        number: number,
      };
      personsData.addData(newPerson).then( newData => {
        props.setPerson(props.persons.concat(newData));
        props.setFilter(props.persons.concat(newData));
      })
      props.setErrorMessage(`Data of ${name} has been added successfully`)
          setTimeout(() => {
            props.setErrorMessage(null)
          }, 5000);
      props.resetFilterValue("");
      props.setName(props.names.concat(name));
      setName("");
      setNumber("");
    } else {
        const actualData = props.persons.find(person => person.name === name)
        const modifiedData = { ...actualData, number: number };
        personsData.updateData(actualData.id, modifiedData).then( finalData => {
          props.setPerson(props.persons.map(person => person.name !== name ? person : modifiedData));
          props.setFilter(props.filter.map(person => person.name !== name ? person : modifiedData));
        })
        .catch(error => {
          props.setErrorMessage(`This data of ${name} already deleted from the server, so it will be added as new one`)
          setTimeout(() => {
            props.setErrorMessage(null)
          }, 5000);
          personsData.addData(modifiedData).then( finalData => {
            props.setPerson(props.persons.map(person => person.name !== name ? person : modifiedData));
            props.setFilter(props.filter.map(person => person.name !== name ? person : modifiedData));
          })
        })
        setName("");
        setNumber("");
    }
  };

  return (
    <form onSubmit={addPerson}>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input value={name} onChange={addName} />
            </td>
          </tr>
          <tr>
            <td>Number:</td>
            <td>
              <input value={number} onChange={addNumber} />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default PersonForm;
