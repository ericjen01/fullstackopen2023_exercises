/* eslint-disable react/prop-types */
import { useState } from 'react'

const Stats = (props) => (
  <>
  <StatsLine txt={"good: "} calc= {props.good}/>
  <StatsLine txt={"neutral: "} calc= {props.neutral}/>
  <StatsLine txt={"bad: "} calc= {props.bad}/>
  <StatsLine txt={"total: "} calc= {props.good + props.neutral + props.bad}/>
  <StatsLine txt={"average: "} calc= {(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good+props.neutral+props.bad)}/>
  <StatsLine txt={"postive: "} calc= {(props.good)/(props.good+props.neutral+props.bad)*100 +"%"}/>
  </>
)

const StatsLine = (props) => (
  <div>
    <span>{props.txt} {props.calc}</span>
  </div>
)

const Button = (props) =>(
  <button onClick={()=>props.setStatehook(props.feedback+1)}>{props.option}</button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Feedbacks</h1>
      <Button setStatehook={setGood} feedback={good} option={"GOOD"}/>
      <Button setStatehook={setNeutral} feedback={neutral} option={"NEUTRAL"}/>
      <Button setStatehook={setBad} feedback={bad} option={"BAD"}/>
      <h2>Stats</h2>
      <Stats good={good} neutral={neutral} bad={bad}/>
      
    </div>
  )
}

export default App