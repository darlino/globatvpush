import React , {useState,useEffect} from 'react'
import {Box , Heading , Text} from '@chakra-ui/react'
import play from '../../../assets/play.svg'
import fresc from '../../../assets/fresc.jpg'
import axios from 'axios'
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import {Link} from 'react-router-dom'
export function ArticlesElements() {
    const [data,setData] = useState([{}])
    const BASE_URL = "http://127.0.0.1:8000/api/"

    useEffect(() =>{
        axios.get(`${BASE_URL}articles`)
        .then(res => {
            setData(res.data)
        })
        .catch(error =>{
          
        })
    
    } , [data])
  

   

    return (
    <>
        <Heading textAlign="right" py = "4" my="5" color="black" fontFamily="Alata" mr="90px"> Les videos les plus récentes</Heading>

        
            <div className = "row  d-flex justify-content-center position-relative"  >
            {
                
                data.map(d =>(
                    <Link to={`/articles/${d.id}`}>
                    <div className="col-sm-3 col-sm-2 text-center m-2 cursor-pointer" style={{ cursor : "pointer" , border:"none" }} >
                        <div className="card shadow" style={{width: "25rem" , border:"none"}}>
                                <img src={play} alt="Card image cap" width="50px"  className="mx-auto play-btn" style={{ position : "relative" , top : "150px"}}/>
                                <div style = {{ width : "100%" , height : "250px"}}>
                                    <img src={d.image} alt="Card image cap" style = {{ background : "cover" , objectFit : "cover" , width :"100%" , height : "100%"}}/>
                                </div>
                               

                            <div className="card-body d-flex flex-column" style={{ marginBottom : "30px"}}>
                                <Text size = "md" textAlign="left" color="black" isTruncated margin={4} fontWeight = "bold">{d.title}</Text>
                                <div style={{ background : "#1D3F72" , padding : "15px" , color : "#fff" , fontFamily : "Alata"}}>View</div>
                            </div>
                        </div>
                    </div>
                </Link>   
                ))
            }
                 
            </div>
    
        
        </>
    
            
        
    )
}
