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

export default Course
