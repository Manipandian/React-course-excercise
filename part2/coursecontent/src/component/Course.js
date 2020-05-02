import React from "react";

const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};
const Total = (props) => {
  let initialValue = 0;
  let sum = props.parts.reduce((total, currentvalue) => {
    return total + currentvalue.exercises;
  }, initialValue);
  return (
    <p>
      <b>Total of {sum} exercises</b>
    </p>
  );
};
const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      {props.course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts={props.course.parts} />
    </div>
  );
};

export default Course;
