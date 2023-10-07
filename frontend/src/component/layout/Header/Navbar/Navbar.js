import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import menuItems from "./MenuItems/MenuItems";
import { useSelector } from 'react-redux';
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const cartItems = useSelector(state => state.cart.cartItems)
  const { categories } = useSelector((state) => state.categories);
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        {
          sidebar ? <div className='backdrop' onClick={showSidebar}></div> : null
        }
        <div className='navbar'>
          <div className='navbar'>
            <Link to='#' className='menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <Link to='/'>
              <img src="/favicon.png" width={65} alt={"the henrys forge"} />
            </Link>
          </div>

          <div className='navbar'>
            {menuItems.map((item, index) => {
              return (
                <li key={index} className={`${item.cName} h-navbar`}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='sidebar-icon'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="icons-sec">
            {/* <i className="icon">
              <Link to="/search"><BiSearchAlt2 /> </Link>
            </i> */}
            <i className="icon">
              <Link to="/cart" style={{ position: 'relative' }}>
                {menuItems.length === 0 ? null : <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <p className="cart-number">{cartItems.length}</p>
                </div>}

                <AiOutlineShoppingCart />
              </Link>
            </i>
            <i className="icon pro-icon">
              <Link to="/account"><FaUserCircle /></Link>
            </i>

          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {menuItems.map((item, index) => {
              return (
                <li key={index} className={`${item.cName} side-navbartext`}>
                  <Link to={item.path}>
                    <span className='sidebar-tex'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <hr style={{width:'170px'}}/>
            <li className={`nav-text side-navbartext`} >
                    <span style={{textTransform:'capitalize'}}>Categories</span>
                </li>
            <hr style={{width:'170px'}}/>
            {categories.map((item, index) => {
              return (
                <li key={index} className={`nav-text-sidebar side-navbartext`}>
                  <a href={`/products/${item.name}`}>
                    <span style={{textTransform:'capitalize'}}>{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;