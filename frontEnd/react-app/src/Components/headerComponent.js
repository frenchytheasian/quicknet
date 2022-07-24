import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

function Header(args) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='shadow-sm'>
      <Navbar {...args}>
        <NavbarBrand href="/">QuickNet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to={'/upcomingevents'} className="text-decoration-none text-secondary">Upcoming Events</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={'/explore'} className="text-decoration-none text-secondary">Explore Events</Link></NavLink>
            </NavItem >
            <NavItem>
              <NavLink>
                <Link to={'/profile'} className="text-decoration-none text-secondary">Profile</Link></NavLink>
            </NavItem >
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;