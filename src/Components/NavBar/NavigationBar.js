import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useProfile } from '../../Pages/Account/Context.Provider';

import './NavigationBar.css';

function NavigationBar({path}) {
  const History = useHistory();
  const BrowserPath = History.location.pathname;

  const {profile} = useProfile();

  const LINKS = [
    { key: 0, to: '/', text: 'Home' },
    { key: 1, to: '/about', text: 'About' },
    { key: 2, to: '/symptomschecker', text: 'Symptoms Checker' },
    { key: 3, to: '/diseases', text: 'Diseases' },
    { key: 4, to: '/contact', text: 'Contact' },
    { key: 5, to: !profile ? '/signup' : '', text: !profile ? 'SignUp' : '' },
    { key: 6, to: !profile ?'/login' : '', text: !profile ? 'LogIn' : '' },
  ]
  const DROPDOWN = [
    { key : 0, to: profile ? '/profile' : '', text: 'Profile' },
    { key : 1, to: '/logout', text: 'LogOut' }
  ]
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg">
            <Container>
              <Link className="navbar-brand " to="/"><i className="fas fa-laptop-medical"></i> <span> E </span> Health Care</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                  {LINKS.map(item =>(
                    <Link key={item.key} className={item.to===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={item.to}>{item.text}</Link>
                   ))
                  }
                </Nav>
                {
                  profile 
                  ?
                  <NavDropdown title={`Welcome ${profile.name}`} id="basic-nav-dropdown">
                    {
                      DROPDOWN.map(menu =>(
                          <Link key={menu.key} className={menu.to===BrowserPath ? 'nav-active nav-link' : 'nav-link'} to={menu.to}>{menu.text}</Link>
                      ))
                    }
                  </NavDropdown>
                  :
                  ''
                }
                
              </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default NavigationBar
