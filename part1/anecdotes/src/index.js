import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {

  return (
    <button onClick={props.triggerClick}>{props.text}</button>
  )
}

const Anecdotes = (props) => {

  return (
    <>
    <div style={{height: '50px' }}>{props.anecdotes}</div>
    <div style={{height: '40px' }}>Has {props.votes} votes</div>
    </>
  )
}

const App = () => {
  const [random, setRandom] = useState(Math.round(Math.random() * (anecdotes.length - 1)));
  const [vote, setVote] = useState(Array.apply(null, Array(anecdotes.length)).map( () => {return 0}));
   const [maxVoteIndex, setMaxVoteIndex] = useState(0);

  const changeAnecdotes = () => {
    setRandom(Math.round(Math.random() * (anecdotes.length - 1)))
  }
  const addVote = () => {
    const testVotes = [...vote];
    testVotes[random] += 1; 
    setVote( [...testVotes] );
    if (testVotes[maxVoteIndex] < testVotes[random]) {
      setMaxVoteIndex(random);
    }
  }
  return (
    <div> 
    <h2><b>Anecdotes of the day</b></h2>
    <Anecdotes anecdotes={anecdotes[random]} votes={vote[random]}/>
    <Button text="Vote" triggerClick={addVote}/>
    <Button text="Next anecdotes" triggerClick={changeAnecdotes}/>
    <h2><b>Anecdotes with most votes</b></h2>
    <Anecdotes anecdotes={anecdotes[maxVoteIndex]} votes={vote[maxVoteIndex]}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);