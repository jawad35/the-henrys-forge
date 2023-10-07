import React, { useState } from "react";
import menuItems from "./MenuItems/MenuItems";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  // const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={handleClick}>
        {
          active ? <FaTimes className='fa-icon' /> : <FaBars className='fa-icon' />
        }
      </div >
      <h1 className="navbar-logo">
        <Link to='/'>
          <img src="/favicon.png" width={65} alt={"the henrys forge"} />
        </Link>
      </h1>

      <div style={{ overflow: 'hidden' }}>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index} onClick={()=>setActive(false)}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
         
        </ul>
      </div>
      <div className="icons-sec">
        <i className="icon">
          <Link to="/search"><BiSearchAlt2 /> </Link>
        </i>
        <i className="icon">
          <Link to="/cart" style={{ position: 'relative' }}>
            {cartItems.length === 0 ? null : <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
              <p className="cart-number">{cartItems.length}</p>
            </div>}

            <AiOutlineShoppingCart />
          </Link>
        </i>
        <i className="icon">
          <Link to="/account"><FaUserCircle /></Link>
        </i>

      </div>
    </nav>
  );
};

export default Navbar;
