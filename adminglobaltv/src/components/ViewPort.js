import React from 'react'
import '../assets/css/viewport.css'
import { FaUserAlt ,FaUsers ,FaMoneyBillAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {Chart} from '../variables/chart'
import {Piechartdevices} from '../variables/piechartdevices'
import { GrCheckbox } from 'react-icons/gr'
import { FiSettings} from 'react-icons/fi'
import { AiFillEdit } from 'react-icons/ai'
import { Dropdown ,Table } from 'react-bootstrap'

export const ViewPort = () => {
    return (
        <div className="col-10 view_port px-2 mx-3">
            <div className="row d-flex justify-content-around mx-auto py-2 mt-4">
                <div className="col-md-3 col-10 bg-primary rounded p-4 text-white">
                    <div className="row">
                        <div className="col-4">
                            <h1 className ="text-center font-weight-bold"> 300 </h1>
                            <h6 className="text-white text-left ml-3" > users </h6>
                        </div>
                        <div className="col-8">
                            <FaUserAlt style={{ color : "white", opacity : ".7" , fontSize:"100px" ,float:"right"}} className="icon"/>
                        </div>
                    </div>
                    <hr style={{ color : "#fff"}}/>
                    <div className="row text-center align-items-center d-flex pt-2 justify-content-center mx-auto text-white mt-4 footer-card" style = {{ backgroundColor : "#094483"}}> 
                            <Link to="/" className = "text-center footer-card"> <h6 className="text-white pt-1 text-center"> More infos <AiOutlineArrowRight/> </h6></Link>
                    </div>
                </div>
                <div className="col-md-3 col-10  bg-danger rounded p-4 text-white">
                    <div className="row">
                        <div className="col-4">
                            <h1 className ="text-center font-weight-bold"> 100 </h1>
                            <h6 className="text-white text-left ml-3" > suscribtions </h6>
                        </div>
                        <div className="col-8">
                            <FaUsers style={{ color : "white", opacity : ".7" , fontSize:"100px" ,float:"right"}} className="icon"/>
                        </div>
                    </div>
                    <hr style={{ color : "#fff"}}/>
                    <div className="row text-center align-items-center d-flex pt-2 justify-content-center mx-auto text-white mt-4 footer-card" style = {{ backgroundColor : "#5e0a12"}} > 
                            <Link to="/" className = "text-center footer-card"> <h6 className="text-white pt-1 text-center"> More infos <AiOutlineArrowRight/> </h6></Link>
                    </div>
                </div>
                <div className="col-md-3 col-10  bg-success rounded p-4 text-white">
                    <div className="row">
                        <div className="col-6">
                            <h1 className ="text-center font-weight-bold"> 300 $ </h1>
                            <h6 className="text-white text-left ml-4" > per month </h6>
                        </div>
                        <div className="col-6">
                            <FaMoneyBillAlt style={{ color : "white", opacity : ".7" , fontSize:"100px" ,float:"right"}} className="icon"/>
                        </div>
                    </div>
                    <hr style={{ color : "#fff"}}/>
                    <div className="row text-center align-items-center d-flex pt-2 justify-content-center mx-auto text-white mt-4 footer-card" style = {{ backgroundColor : "#0d5e20"}}> 
                            <Link to="/" className = "text-center footer-card"> <h6 className="text-white pt-1 text-center"> More infos <AiOutlineArrowRight/> </h6></Link>
                    </div>
                </div>

            </div>
            <div className="row d-flex flex-row p-4 m-4">
                <div className="col-md-6 col-12" style={{height:"500px"}}>
                    <Chart/>
                </div>
                <div className="col-md-6 col-12" style={{height:"500px"}}>
                    <Chart/>
                </div>
            </div>

            <div className="row d-flex p-4 mx-auto align-items-center">
                <div className="col-lg-4 col-md-8 col-sm-12 bg-light">
                <div className = "row d-flex justify-content-between px-4 py-2">
                    <h3 style={{ fontFamily : "Alata",fontWeight : "bold"}}> Tasks </h3>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="bg-light rounded-0 border-none text-dark border border-light">
                            <FiSettings style={{fontSize:"25px",marginTop:"8px" }}/>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={""}>Add new task</Dropdown.Item>
                            <Dropdown.Item onClick={""}>Mark all as done</Dropdown.Item>
                            <Dropdown.Item onClick={""}>Delete all</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </div>
                    <ul className = "list-group" style={{ fontFamily : "Alata",fontWeight : "bold"}}>
                        <li className="list-group-item d-flex justify-content-start">
            
                        <div className = "col-12 d-flex pl-3 justify-content-between">
                            <h6 className="pt-2"> Aller faire bootstrap</h6>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" className="bg-light rounded-0 border-none text-dark border border-light">
                                    <AiFillEdit style={{fontSize:"20px",marginBottom:"12px" }}/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Mark as done</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        
                        </li>
                        
                        
                    </ul>
                </div>
                <div className="col-lg-7 col-md-10 col-sm-12 p-4 m-4 " style={{ background : "#1A1A2C"}}> 
                    <h3 className="text-center pb-4" style={{ fontFamily:"Lato" ,fontWeight : "bold" , color:"#fff"}}> Recents Subcribers</h3>
                    <Table striped  size="sm" className="text-white p-4" variant="blue">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>phone number</th>
                        <th>plans</th>
                        <th>expiration date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>markotto@gmail.com</td>
                            <td> +237 658 78 95 65</td>
                            <td> Monthly </td>
                            <td> <date> 12 / 21/23</date> </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>markotto@gmail.com</td>
                            <td> +237 658 78 95 65</td>
                            <td> Annually </td>
                            <td> <date> 12 / 21/43</date> </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>markotto@gmail.com</td>
                            <td> +237 658 78 95 65</td>
                            <td> Monthly </td>
                            <td> <date> 12 / 21/23</date> </td>
                        </tr>
                        
                    </tbody>
</Table>
                </div>
            </div>

        
            
                
            
            

        </div>
    )
}
