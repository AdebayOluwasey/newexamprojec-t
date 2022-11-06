import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import rocket from "../../images/rocket.png";
import { UserAuthContext, theUsers} from '../../context/UserAuthContext';
import Button from '../../components/Button';




const Navbar = () => {
  const [mNavBtn, setMNavBtn] = useState(false)

 
  const { value,setValue } = useContext(UserAuthContext);
  const navigate = useNavigate();

  function handleLogout() {
   setValue(theUsers)
    navigate('/');
    console.log('Signed out successfully')
  }

  return (
    <div className='desktop-links-container' >
      <div className='logo'><h1>Delish Models</h1></div>
      <div className='desktop-links'>
        <Link to="/">
          <div><h3>
            Home
          </h3></div>
        </Link>
        <Link to="/models">


          <div>
            <h3>
              Models
            </h3>
          </div>
        </Link>
        {value.isAuthenticated ? <Button styleClass="blue-button" value="Logout" onClick={handleLogout} />
          :
          <Link to="/login">
            <div className='desktop-applynow-div' >
              <button>
                Login
              </button>
              <div id='desktop-rocket-div'>
                <img src={rocket} alt="" />
              </div>
            </div>
          </Link>}
      </div>
    </div>


  );
}

export default Navbar;