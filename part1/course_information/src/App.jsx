/* eslint-disable react/prop-types */
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => (
<div>
      <h1>{props.crs}</h1> 
    </div>   
  )

  const Total = (props) => (
    <div>
      <p>Total Score: {props.tt}</p>
    </div>
  )

  const Content1 = (props) => (
    <div>
      <p>{props.pt} {props.exe}</p> 
    </div>
  )

  const Content2 = () => (
    <div>
      <Part pt={part1} exe={exercises1} />
      <Part pt={part2} exe={exercises2} />
      <Part pt={part3} exe={exercises3} />
    </div>
  )

  const Part = (props) =>(
    <div>
      <p>{props.pt} {props.exe}</p>
    </div>
  )

  return (
    <div>
      <Header crs={course} />
      <Content1 pt={part1} exe={exercises1}/>
      <Content1 pt={part3} exe={exercises2}/>
      <Content1 pt={part2} exe={exercises3}/>
      <Total tt={exercises1 + exercises2 + exercises3}/>
   
      --------------

      <Header crs={course} />
      <Content2 />
      <Total tt={exercises1 + exercises2 + exercises3}/>

    </div>
  )
}

export default App