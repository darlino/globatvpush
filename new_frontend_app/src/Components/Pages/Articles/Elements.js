import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'

export const Elements = (props) => {

    const currentLink = window.location.href
    return (
        <div className = "container position-sticky" >
            <div className="row justify-content-md-center">
                <div className="col">
                    <div className =" embed-responsive embed-responsive-16by9 shadow" style={{ marginBottom : "30px"}} >
                        <iframe  src={props.video_url} className="embed-responsive-item iframe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-10 d-flex flex-column justify-content-between">
                      <Heading className="h2 text-left font-weight-bold " fontFamily='Alata' fontSize="50px" color="black"> {props.title}</Heading> 
                      <a href={`https://web.whatsapp.com/send?text=cette video est simplement trop cool /n ${props.title} ${currentLink}`}> 
                        <FaWhatsapp color=" green " fontSize="30px"/>
                      </a>
                      <div className="col py-4">
                        <p> {props.desc}</p>
                      </div>
                    </div>
                   
                    
                </div>
                
            </div>
        </div>
    )
}
