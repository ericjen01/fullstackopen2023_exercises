/* eslint-disable react/prop-types */
const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => ( <div> <h1>{props.crs}</h1> </div> )

  const Total = (props) => ( <div> <p>Total Score: {props.tt}</p> </div>)

  const Content2 = () => (
    <div>
      <Part pt={part1.name} exe={part1.exercises} />
      <Part pt={part2.name} exe={part2.exercises} />
      <Part pt={part3.name} exe={part3.exercises} />
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
      <Content2 />
      <Total tt={part1.exercises + part2.exercises + part3.exercises}/>

    </div>
  )
}

export default App