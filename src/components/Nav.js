import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { returnToStocks } from '../redux/stocks/actions';

const NavBar = () => {
  const dispatch = useDispatch();
  const handleRedirect = () => {
    dispatch(returnToStocks());
  };
  return (
    <Navbar className="nav-bar">
      <Container>
        <Navbar.Brand href="/" className="nav-brand">fc</Navbar.Brand>
        <Nav className="align-items-left nav-links">
          <Link className="nav-link" to="/" onClick={handleRedirect}>Stocks</Link>
          <Link className="nav-link" to="/about">About</Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
