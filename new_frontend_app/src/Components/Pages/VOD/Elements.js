import React , {useState,useEffect} from 'react'
import {Box , Circle, Flex, Heading , Text} from '@chakra-ui/react'
import play from '../../assets/play.svg'
import axios from 'axios'
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import Caroussel from 'react-elastic-carousel'
export function Elements() {
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
  
    if (data === {}){
        
    }
   
    const myArrow = ({ type, onClick, isEdge })  =>{
        
        return (
          <>
          </>
        )
        }

        const myPagination = ( {pages , activePage , onClick }) =>{
            console.log(pages);
            return(
                <Flex direction="row">
                    {pages.map(
                        page =>{
                            const isActivePage = activePage === page
                            return(
                                <Circle
                                w="10px"
                                bg = "#013b8c"
                                h="10px"
                                m="10px"
                                key={page}
                                onClick = { () => onClick(page)}
                                active = {isActivePage}/>
                            )
                        }
                    )}
                </Flex>
            )
        }
    return (
    <>
        <Heading textAlign="center" py = "4" my="5" color="black" fontFamily="Alata"> Regarder des videos a la demande</Heading>

        <Caroussel  itemsToShow={4} outerSpacing={1} renderArrow={myArrow} renderPagination={myPagination}>
        
            {
                
                data.map(d =>(
                    <Link to={`/articles/${d.id}`}>
                    
                        <div className="col-md-12 col-8 card shadow-lg text-center" style={{width: "25rem" , border:"none"}}>
                                <img src={play} alt="Card image cap" width="50px"  className="mx-auto play-btn" style={{ position : "relative" , top : "150px"}}/>
                                <div style = {{ width : "100%" , height : "250px"}}>
                                    <img src={d.image} alt="Card image cap" style = {{ background : "cover" , objectFit : "cover" , width :"100%" , height : "100%"}}/>
                                </div>
                               

                            <div className="card-body d-flex flex-column" style={{ marginBottom : "30px"}}>
                                <Text size = "md" textAlign="left" color="black" isTruncated margin={4} fontWeight = "bold">{d.title}</Text>
                                <div style={{ background : "#1D3F72" , padding : "15px" , color : "#fff" , fontFamily : "Alata"}}>View</div>
                            </div>
                        </div>
                    
                </Link>   
                ))
            }
                 
            
        </Caroussel>
          
    
        
        </>
    
            
        
    )
}
