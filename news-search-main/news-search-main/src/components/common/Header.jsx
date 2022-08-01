import React from 'react';
import { Link } from 'react-router-dom';
import HeaderWrapper from '../../styles/HeaderStyle';

const Header = () => {
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <Link to="/">News</Link>
        </li>
        <li>
          <Link to="/clip">Clip</Link>
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
