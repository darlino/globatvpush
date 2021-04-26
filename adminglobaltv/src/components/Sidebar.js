/*
 Sidebar de la page admin 

 @author : Noula Darlin
 github : github.com/darlino
 

*/

import logo from '../assets/img/logo.png'
import React , {useState} from 'react'
import { FaUsers , FaMoneyCheckAlt } from 'react-icons/fa'
import { IoPieChartSharp } from 'react-icons/io5'
import { BsCameraVideo } from 'react-icons/bs'
import { BsTextLeft , BsFillChatDotsFill} from 'react-icons/bs'
import { FiSettings} from 'react-icons/fi'
import { MdDonutLarge } from 'react-icons/md'
import { BiDownArrow } from 'react-icons/bi'
import { CgMediaLive } from 'react-icons/cg'
import { AiFillEdit } from 'react-icons/ai'

import '../assets/css/sidebar.css'
import { motion } from "framer-motion"
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Sidebar = () => {

    const [openB,setOpenB] = useState(false)
    const [openV,setOpenV] = useState(false)
    const [openU,setOpenU] = useState(false)
    const [openT,setOpenT] = useState(false)
    const [isActive, setIsActive] = React.useState(false);
    let displayB , displayV , displayU , displayT  = "none"
    const toogleOpenB = () =>{
        setOpenB(!openB)
    }
    const toogleOpenU = () =>{
        setOpenU(!openU)
    }
    const toogleOpenT = () =>{
        setOpenT(!openT)
    }
    const toogleOpenV = () =>{
        setOpenV(!openV)
    }
    if (openB === true){
        displayB = "flex"
    }
    else {
        displayB = "none"
    }
    if (openU === true){
        displayU = "flex"
    }
    else {
        displayU = "none"
    }

    if (openV === true){
        displayV = "flex"
    }
    else {
        displayV = "none"
    }

    if (openT === true){
        displayT = "flex"
    }
    else {
        displayT = "none"
    }




    
        


    return (
        <div className="col-2 px-2 side rounded tope position-sticky">
            <div className="col-8 mx-auto" style={{ width : "200px" , height : "100px" }}>
                <img src={logo} alt="logo" className="rounded-circle" style={{ width:"100%" , height : "100%" ,background:"cover"}}></img>
            </div>

            <div className = "col-12  " >
                <Link to = "/" className="d-flex flex-row justify-content-around p-2 hover ">
                    <IoPieChartSharp style={{ color :"#fff" , fontSize : "18px" , marginTop : "4px"}}/>
                    <div className="col-8">
                        <p style={{ color :"#fff", fontSize : "18px"}}> Dashboard</p>
                    </div>
                </Link>


                <div className="d-flex flex-column justify-content-around p-2 hover ">
                    <div className="d-flex flex-row justify-content-around" onClick={ () => toogleOpenU()}>
                        <FaUsers style={{ color :"#fff" , fontSize : "18px" , marginTop : "4px"}}/>
                        <div className="col-8 ">
                            <p style={{ color :"#fff", fontSize : "18px"}}> Users</p>
                        </div>
                    </div>
                    <div className=" ml-3 flex-column" style={{ display : displayU}}>
                        <Link to="/users/view_users" className="d-flex flex-row justify-content-around yoi py-2">
                            <MdDonutLarge style={{ color :"#fff" , fontSize : "12px" , marginTop : "4px"}}/>
                            <div className="col-8">
                                <p style={{ color :"#fff", fontSize : "12px"}}> All users</p>
                            </div>
                        </Link>
                        <Link to="/users/add_user" className="d-flex flex-row justify-content-around yoi py-2">
                            <MdDonutLarge style={{ color :"#fff" , fontSize : "12px" , marginTop : "4px"}}/>
                            <div className="col-8">
                                <p style={{ color :"#fff", fontSize : "12px"}}> Add a user</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-around p-2 hover ">
                    <div className="d-flex flex-row justify-content-around" onClick={ () => toogleOpenV()}>
                        <BsCameraVideo style={{ color :"#fff" , fontSize : "18px" , marginTop : "4px"}}/>
                        <div className="col-8 ">
                            <p style={{ color :"#fff", fontSize : "18px"}}> Videos</p>
                        </div>
                    </div>
                    
                    <div className=" ml-3 flex-column" style={{ display : displayV}}>
                        <Link to="/videos/view_videos" className="d-flex flex-row justify-content-around yoi py-2">
                            <MdDonutLarge style={{ color :"#fff" , fontSize : "12px" , marginTop : "4px"}}/>
                            <div className="col-8">
                                <p style={{ color :"#fff", fontSize : "12px"}}> All videos</p>
                            </div>
                        </Link>
                        <Link to="/videos/add_video" className="d-flex flex-row justify-content-around yoi py-2">
                            <MdDonutLarge style={{ color :"#fff" , fontSize : "12px" , marginTop : "4px"}}/>
                            <div className="col-8">
                                <p style={{ color :"#fff", fontSize : "12px"}}> Add a video</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-around p-2 hover ">
                    <div className="d-flex flex-row justify-content-around" onClick={ () => toogleOpenB()}>
                        <BsTextLeft style={{ color :"#fff" , fontSize : "18px" , marginTop : "4px"}}/>
                        <div className="col-8">
                            <p style={{ color :"#fff", fontSize : "18px"}}> Blog</p>
                        </div>
                    </div>
                    
                    <div className=" ml-3 flex-column" style={{ display : displayB}}>
                        <Link to="/articles/view_articles" className="d-flex flex-row justify-content-around yoi py-2">
                            <MdDonutLarge style={{ color :"#fff" , fontSize : "12px" , marginTop : "4px"}}/>
                            <div className="col-8">
                                <p style={{ color :"#fff", fontSize : "12px"}}> All articles</p>
                            </div>
                        </Link>
                        <Link to="/articles/add_article" className="d-flex flex-row justify-content-around yoi py-2">
                            <MdDonutLarge style={{ color :"#fff" , fontSize : "12px" , marginTop : "4px"}}/>
                            <div className="col-8">
                                <p style={{ color :"#fff", fontSize : "12px"}}> Add an article</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around p-2 hover ">
                    <CgMediaLive style={{ color :"red" , fontSize : "18px" , marginTop : "4px"}}/>
                    <div className="col-8">
                        <p style={{ color :"#fff", fontSize : "18px"}}> Live</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-around p-2 hover ">
                    <BsFillChatDotsFill style={{ color :"#fff" , fontSize : "18px" , marginTop : "4px"}}/>
                    <div className="col-8">
                        <p style={{ color :"#fff", fontSize : "18px"}}> Chat Center</p>
                    </div>
                </div>
                <Link to="/suscribtions" className="d-flex flex-row justify-content-around p-2 hover ">
                    <FaMoneyCheckAlt style={{ color :"#fff" , fontSize : "18px" , marginTop : "4px"}}/>
                    <div className="col-8">
                        <p style={{ color :"#fff", fontSize : "18px"}}> Subscribtions</p>
                    </div>
                </Link>
                <Link to="/settings" className="d-flex flex-row justify-content-around p-2 hover ">
                    <FiSettings style={{ color :"#fff" , fontSize : "18px" , marginTop : "4px"}}/>
                    <div className="col-8">
                        <p style={{ color :"#fff", fontSize : "18px"}}> Settings</p>
                    </div>
                </Link>
            </div>

      
            
        </div>
            
        
    )
}

