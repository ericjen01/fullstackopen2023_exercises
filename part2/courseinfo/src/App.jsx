/* eslint-disable react/prop-types */


const Course = ({course}) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map(part =>{
        return (
        <p key={part.id}>{part.name} {part.exercises}</p>
        )
      })}
      <h3>total {summation(course)} exercises</h3>
    </div>
  ) 
}

/*
const summation = (course) => {
  let sum = 0
  course.parts.map(part => {
    sum += part.exercises 
  })
  return sum
}
*/

const summation = (course) => ( 
  course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
)

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}
export default App
