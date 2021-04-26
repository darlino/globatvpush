import { Heading , Text} from '@chakra-ui/layout'
import React from 'react'
import DOMPurify from 'dompurify';


const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }

export const Elements = (props) => {
    return (
        <div className = "container pt-4">
            <div classNme="row justify-content-center"> 
           
                <div class="card">
                    <div class="card-body">
                        <Heading class="card-title" style={{ fontSize:"50px" , color:"#000" , fontFamily:"Nunito Sans" , fontWeight:"bold"}}>{props.title}</Heading>
                        <Text noOfLines="5"  className="preview" dangerouslySetInnerHTML={createMarkup(props.desc)}></Text>
                    </div>
                    <img src={props.img} class="card-img-bottom" alt="..."/>
                    <div className="card-body">
                        <p class="card-text"><small class="text-muted">Publiée le {props.time}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
