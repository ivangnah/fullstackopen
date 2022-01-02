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
      <p key={parts.id}>{parts.name} {parts.exercises}</p>
    )}
    
    </div>
  )
}

const Sum = (props) => {
  console.log("sum props", props)
  const total = props.parts.reduce((sum, parts) => {
    return sum + parts.exercises
  }, 0)
  return (
    <div>total of {total} exercises</div>
  )
}

const Course = (props) => {
  console.log("course props", props)
  return (
    <div>
      <Header name={props.course.name} /> 
      <Content parts={props.course.parts} /> 
      <Sum parts={props.course.parts} />
    </div>
  )
}

const Catalog = (props) => {
  console.log("Catalog props", props)
  console.log("Catalog props parts", props.courses)
  return (
    <div>
    {props.courses.map(courses =>
      <Course course={courses} />
    )}
    
    </div>
  )
}



const App = () => {
  const courses = [{
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [{
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
        <Header name="Web development curriculum" />
        <Catalog courses={courses} />
      </div>
  )
}

export default App
