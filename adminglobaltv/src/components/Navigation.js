import React from 'react'
import {Navbar ,NavLink ,NavDropdown ,Nav} from 'react-bootstrap'
import {AiFillDashboard} from 'react-icons/ai'
const logout = () =>{
    localStorage.setItem("isLogged",false)
    
    window.location.href = "/"
}

export const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="p-4">
        <Navbar.Brand href="/"> <AiFillDashboard/> Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
          <Nav className="pr-4 mr-4">
          <NavDropdown title="Noula Darlin" id="collasible-nav-dropdown" >
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3" onClick = {logout}>Logout</NavDropdown.Item>
        </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
