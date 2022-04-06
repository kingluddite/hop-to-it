import React from "react"

function Footer(props) {
  console.log(props)
  return (
    <div>
      <p>&copy; {props.year}</p>
      <p>{props.usStates.map((usState) => usState)}</p>
    </div>
  )
}

export default Footer
