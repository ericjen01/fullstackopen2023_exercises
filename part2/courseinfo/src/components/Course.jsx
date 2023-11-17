const summation = (items) => (
    items.reduce((accumulator, currentVal)=> accumulator + currentVal.exercises,0)
  )
  
  const ShowParts = ({prts}) => {
    return(
      prts.map(part=>{
        return(
          <div key={part.id}>
            <p>{part.name} {part.exercises}</p>
          </div>
        )
      })
    )
  }
  
  const ShowCourses = ({courses}) =>{
    return(
      courses.map(crs=>{
        return (
          <div key={crs.id}>
            <h1>{crs.name}</h1>
            <ShowParts prts={crs.parts}/>
            <h3>Total of {summation(crs.parts)} credits</h3>
          </div>
        )
      })
    )
  } 

  export default ShowCourses