import React from 'react'


const Person  = (props) => {
  console.log("person  props", props)
  return(
    <div>
      <p>{props.person.name} {props.person.number}</p>
    </div>
    
    )
}


export default Person