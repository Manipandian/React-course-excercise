import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.excersize}
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].part} excersize={props.parts[0].exercises} />
      <Part part={props.parts[1].part} excersize={props.parts[1].exercises} />
      <Part part={props.parts[2].part} excersize={props.parts[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        part: "Fundamentals of React",
        exercises: 10,
      },
      {
        part: "Using props to pass data",
        exercises: 7,
      },
      {
        part: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total
        parts={course.parts}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
