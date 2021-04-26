import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Heading } from '@chakra-ui/react'


export const MiscNav = (props) => {
    return (
        <Navbar sticky = "top" collapseOnSelect expand="lg" style={{ background:"#1D3F72" , maxHeight : "9vh", zIndex : "10000"}} variant="dark" color="white">
        <Navbar.Brand href="/" >
        <Heading fontFamily = "Alata" fontSize="30px"> GlobalTV</Heading>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ background:"#013b8c"}}/>
        <Navbar.Collapse id="responsive-navbar-nav" style={{background:"#1D3F72"}}>
          <Nav className="mr-auto">
            <Link to="/vod" style={{ color:"white" , fontFamily : "Alata" , marginLeft:"30px" ,marginTop:"2px"}}>VOD</Link>
            <Link to="/live" style={{ color:"white", fontFamily : "Alata" , marginLeft:"30px" ,marginTop:"2px"}}>Direct</Link>
            <Link to="/blog" style={{ color:"white", fontFamily : "Alata" , marginLeft:"30px" ,marginTop:"2px"}}>Blog</Link>
            
          </Nav>
          <Nav>
            <Link to="/login"  style={{ color:"white" , fontFamily : "Alata" ,marginTop:"10px", textDecoration:"none", paddingRight : "100px"}}>
                Connexion
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
