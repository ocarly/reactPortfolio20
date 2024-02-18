import {Link, Outlet}from "react-router-dom"
import "./nav.css"
const Root = () => {
  return (
    <div className = "navWrapper">
<ul className="nav">
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/contact">Contact</Link>
    </li>
    <li>
        <Link to="/resume">Resume</Link>
    </li>
    <li>
        <Link to="/projects">Projects</Link>
    </li>

</ul>
<Outlet/>

    </div>
  )
}

export default Root

