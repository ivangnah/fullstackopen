import React from 'react'

const Header = (props) => {
  console.log("headers props", props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
    
    )
}


const Content = (props) => {
    console.log("content props", props)
    return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
    )
}

const Total = (props) => {
  console.log("total props", props)
  return(
    <div>
      <p>Number of exercises {props.exercises}</p>
    </div>
    )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }


  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content part={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total  exercises={course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises} />
    </div>
  )
}

export default App