import React from 'react';
import './Nav.css';

import bg from '../../assets/favicon.png';

const Nav = () => {
  return (
    <div className="nav__container">
      <div className="avatar">
        <img src={bg} alt="logo" />
      </div>

      <div>
        <h2>Memories</h2>
      </div>
    </div>
  );
};

export default Nav;
