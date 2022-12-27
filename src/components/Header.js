import React from 'react'
import Button from './Button.js'

const Header = ({addShowTask, showTask}) => {
  return (
    <header className='header'>
        <h1 className="title">Todo list</h1>
        <Button addShowTask= {addShowTask} showTask={showTask} />
    </header>
  )
}


export default Header

