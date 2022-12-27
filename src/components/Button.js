import React from 'react'

const Button = ({addShowTask,showTask}) => {
  return (
    <div>
      <button className="btn" onClick={addShowTask} style={showTask? {backgroundColor:'red'}:{backgroundColor: 'blue'}}>{showTask? `Close`:`Add`}</button>
    </div>
  )
}

export default Button
