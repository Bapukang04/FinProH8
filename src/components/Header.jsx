import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import Search  from './Search';

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" >
          <h1>FinProH8 - Stanislaus Sili Labamaking</h1>
        </Link>
      
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
