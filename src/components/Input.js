import React from 'react'

export default function Input() {
 return (

  <React.Fragment>
   <div className="container__div">
    <label htmlFor="search-input" className="search-label">
     <input type="text"
      name="query"
      id="search-input"
      placeholder="Search..."
     />
     <i className="fa fa-search" aria-hidden="true" />
    </label>
   </div>
  </React.Fragment>

 )
}
