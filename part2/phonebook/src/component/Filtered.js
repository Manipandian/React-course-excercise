import React from "react";

const Filtered = (props) => {
  const filteredArray = [];
  const applyFilter = (event) => {
    props.setValue(event.target.value);
    props.persons.forEach((element) => {
      if (element.name.indexOf(event.target.value) !== -1) {
        filteredArray.push(element);
      }
    });
    props.setFilter(filteredArray);
  };
  return <input value={props.filterValue} onChange={applyFilter} />;
};

export default Filtered;
