import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const Button = (props) => {

  return (
  <button onClick={props.updateFeedBack}>{props.text}</button>
  )
}

const Statistics = (props) => {
  return (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const FeedBackData = (props) => {

  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>No FeedBack Given</div>
    )
  }
  return (
    <table>
      <tbody>
    <Statistics text="Good" value={props.good}/>
    <Statistics text="Neutral" value={props.neutral}/>
    <Statistics text="Bad" value={props.bad}/>
    <Statistics text="All" value={props.all}/>
    <Statistics text="Average" value={ (props.good - props.bad) / props.all }/>
    <Statistics text="Positive" value={ ((props.good / props.all) * 100) + ' %'}/>
    </tbody>
    </table>
  )
}

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = bad + good + neutral;

  return (
    <div>
    <h2>Give FeedBack</h2>
    <Button text="Good" updateFeedBack={ () => setGood(good + 1)}/>
    <Button text="Neutral" updateFeedBack={ () => setNeutral(neutral + 1) }/>
    <Button text="Bad" updateFeedBack={ () =>  setBad(bad + 1)}/>
    <h2>Statistics</h2>
    <FeedBackData good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
