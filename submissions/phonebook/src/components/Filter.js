import React from 'react'


const Filter = ( {searchTerm, onChange} ) => {
  return(
      <div>
      <p>Filter shown with
      <input
        value={searchTerm}
        onChange = {onChange}
        /></p>
      </div>
    )
}


export default Filter