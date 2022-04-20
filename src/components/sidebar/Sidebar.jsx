import { Button } from 'reactstrap'
import React from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div >
    <div className="sidebar">
      <div>
      <Link to="/">
          <Button className="buttons">Home</Button>
        </Link>
      </div>
      <div>
      <Link to="/about">
          <Button className="buttons">Information</Button>
        </Link>
      </div>
      
      
    </div>

</div>
  )
}

export default Sidebar