/* eslint-disable react/prop-types */
import { useState } from 'react'

const Stats = (props) => (
  <table>
    <tr>
      <td>stats</td>
      <td>outcome</td>
    </tr>
  <StatsLine txt={"good: "} calc= {props.good}/>
  <StatsLine txt={"neutral: "} calc= {props.neutral}/>
  <StatsLine txt={"bad: "} calc= {props.bad}/>
  <StatsLine txt={"total: "} calc= {props.good + props.neutral + props.bad}/>
  <StatsLine txt={"average: "} calc= {(props.good*1 + props.neutral*0 + props.bad*-1)/(props.good+props.neutral+props.bad)}/>
  <StatsLine txt={"postive: "} calc= {(props.good)/(props.good+props.neutral+props.bad)*100 +"%"}/>
  </table>
)

const StatsLine = (props) => (
  <tr>
    <td>{props.txt}</td>
    <td>{props.calc}</td>
  </tr>
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