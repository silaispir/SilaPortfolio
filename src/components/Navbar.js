import React from 'react';
import SilaLogo from './SilaLogo';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <SilaLogo size={48} />
      </div>
      {/* ...diğer navbar içerikleri... */}
    </nav>
  );
};

export default Navbar;