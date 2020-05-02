import React, { useState } from "react";

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
      props.setPerson(props.persons.concat(newPerson));
      props.setFilter(props.persons.concat(newPerson));
      props.resetFilterValue("");
      props.setName(props.names.concat(name));
      setName("");
      setNumber("");
    } else {
      window.alert(` ${name} is already added to phone book`);
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
