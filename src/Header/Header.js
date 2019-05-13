import React from 'react';

const Header = ({ product, title }) => {
  return (
    <header>
      <h1 className='logo'>ELF Computing</h1>
      <h3>{product}</h3>
      <h5>{title}</h5>
    </header>
  );
};

export default Header;
