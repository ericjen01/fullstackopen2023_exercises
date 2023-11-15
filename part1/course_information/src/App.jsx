/* eslint-disable react/prop-types */
const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => ( <div> <h1>{props.crs}</h1> </div> )

  const Part = (props) =>( <div> <p>{props.pt} {props.exe}</p> </div>)

  const Total = (props) => (
    <div> 
      <p>Total Score: {props.pts[0].exercises + props.pts[1].exercises + props.pts[2].exercises }</p>
    </div>
  )

  const Content = (props) => (
    <div>
      <Part pt={props.pts[0].name} exe={props.pts[0].exercises} />
      <Part pt={props.pts[1].name} exe={props.pts[1].exercises} />
      <Part pt={props.pts[2].name} exe={props.pts[2].exercises} />
    </div>
  )

  return (
    <div>
      <Header crs={course} />
      <Content pts={parts} />
      <Total pts={parts} />

    </div>
  )
}

export default App