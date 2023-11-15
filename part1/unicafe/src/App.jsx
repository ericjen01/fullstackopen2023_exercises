import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
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
      <span>good- {good}</span><br/>
      <span>neutral- {neutral}</span><br/>
      <span>bad- {bad}</span>
    </div>
  )
}

export default App