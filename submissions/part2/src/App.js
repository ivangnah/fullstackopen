import React from 'react'

const Header = (props) => {
  console.log("header props", props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log("content props", props)
  console.log("content props parts", props.parts)
  return (
    <div>
    {props.parts.map(parts =>
      <p>{parts.name} {parts.exercises}</p>
    )}
    
    </div>
  )
}


const Course = (props) => {
  console.log("course props", props)
  return (
    <div>
      <Header name={props.course.name} /> 
      <Content parts={props.course.parts} /> 
    </div>
  )
}



const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [{
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
      }
    ]
  }

  return <Course course={course} />
}

export default App
