import React,{useState, useEffect} from 'react'
import {Heading} from '@chakra-ui/react'
import axios from 'axios'
import play from '../../assets/play.svg'
import './index.css'
import { Link } from 'react-router-dom'
export const Elements = () => {

    const [data,setData] = useState([{}])
    const BASE_URL = "http://127.0.0.1:8000/api/"

    useEffect(() =>{
        axios.get(`${BASE_URL}articles`)
        .then(res => {
            setData(res.data)
        })
        .catch(error =>{
          
        })
    
    })

    
    return (
        <div>
            <div className="row d-flex justify-content-center flex-column bp p-4 position-sticky" index = "bp" >
            {
                data.map(d =>{
                    return (
                        <Link to={`/articles/${d.id}`}>
                        <div class="card p-2 " style={{width: "24rem",border:"none",outline:"none"}}>
                                <img src={play}  width="50px"  className="mx-auto play-btn" style={{ position : "relative" , top : "150px"}}/>
                                <div style = {{ width : "100%" , height : "250px"}}>
                                    <img src={d.image} alt="Card image cap" style = {{ background : "cover" , objectFit : "cover" , width :"100%" , height : "100%"}}/>
                                </div>
                            <div class="card-body">
                                <Heading class="card-title text-truncated" style={{ fontSize : "32px" , fontFamily:"Alata" , color:"black"}}>{d.title}</Heading>
                                
                            </div>
                        </div>
                        </Link>
                    )
                })
            }
               
                
            </div>
        </div>
    )
}
