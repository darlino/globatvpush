import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export const Navigation = (props) => {
    return (
        <Navbar sticky = "top" collapseOnSelect expand="lg" style={{ background:"#ffg" , maxHeight : "9vh", zIndex : "10000"}} variant="dark" color="white">
        <Navbar.Brand href="/" >
        <img
        style = {{ marginTop:"30px"}}
            src={logo}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt="Global Tv logo"
            marginTop="10px"
      />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background:"#013b8c"}}/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{ color:"black"}}>
          <Nav className="mr-auto">
            <Link to="/vod" style={{ color:"white" , fontFamily : "Alata" , marginLeft:"30px" ,marginTop:"2px"}}>VOD</Link>
            <Link to="/live" style={{ color:"white", fontFamily : "Alata" , marginLeft:"30px" ,marginTop:"2px"}}>Direct</Link>
            <Link to="/blog" style={{ color:"white", fontFamily : "Alata" , marginLeft:"30px" ,marginTop:"2px"}}>Blog</Link>
            
          </Nav>
          <Nav>
            <Link onClick={props.showLogin}  style={{ color:"white" , fontFamily : "Alata" ,marginTop:"20px", textDecoration:"none", paddingRight : "100px"}}>
                Connexion
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
