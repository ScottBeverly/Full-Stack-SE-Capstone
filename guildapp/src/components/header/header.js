import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='Head'>
      <Link to='/'>
          <h2>Home</h2>
      </Link>
      <Link to ='/players'>
          <h2>Raid Team</h2>
      </Link>
      <Link to ='/bosses'>
          <h2>Ny'alotha</h2>
      </Link>
      <Link to ='/classes'>
          <h2>Classes</h2>
      </Link>
    </div>
  );
}

export default Header;