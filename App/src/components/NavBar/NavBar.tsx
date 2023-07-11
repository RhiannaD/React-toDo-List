import './NavBar.css'
import {BsListStars} from 'react-icons/bs'

const NavBar = () => {
  return (
    <>
 <nav className="navbarbg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      < BsListStars size="50"  alt="Logo" width="70" height="60" className="d-inline-block align-text-top"/><br></br>
     <div className='toDoText'> To Do List</div> 
    </a>
  </div>
</nav>
    </>
  )
}

export default NavBar