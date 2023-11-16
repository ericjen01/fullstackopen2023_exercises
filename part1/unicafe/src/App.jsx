/* eslint-disable react/prop-types */

import { useState } from 'react'

const Stats = (props) => (
  <>
    <span>total- {props.good + props.neutral + props.bad}</span><br/>
    <span>average- {(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good+props.neutral+props.bad)}</span><br/>
    <span>positive- {(props.good)/(props.good+props.neutral+props.bad)*100}%</span><br/>
  </>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Feedbacks</h1>
      <button onClick={()=>setGood(good+1)}>GOOD</button>
      <button onClick={()=>setNeutral(neutral+1)}>NEUTRAL</button>
      <button onClick={()=>setBad(bad+1)}>BAD</button>
      <h2>Stats</h2>
      <Stats good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App