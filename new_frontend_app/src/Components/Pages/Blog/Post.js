import React,{useState,useEffect}  from 'react'
import { Link } from 'react-router-dom'
import { BiShareAlt } from 'react-icons/bi'
import axios from 'axios'
import { Heading , Text } from '@chakra-ui/react'
import {MiscNav} from '../../UI/Navigation/MiscNav'
import DOMPurify from 'dompurify';

const COLORS = ["#fc8c03","#b50b0b","#0eb50b","#0bb5b5","#0b66b5","#620cf5","#f50ce5","#f50c2f"]

const picKRandomColor = () =>{
    let index = Math.floor(Math.random() * 8)
    return COLORS[index]
}

export const Post = () => {

    const [data,setData] = useState(null)

    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/api/blog_post")
        .then(req =>{
            setData(req.data)
            console.log(req.data)
        })
    }, [data])

    let imgUrl
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
    return (
        <>
        <MiscNav/>
        <div className="row d-flex justify-content-center mx-auto p-4 m-4">
        <div className="col-12 col-md-12 col-sm-12 d-flex flex-wrap justify-content-center">
            {data === null ? " yo " : data.map(d =>{
                const imageUrlStr = d.file_path
                imgUrl = imageUrlStr.split('/')
                return(
                    <Link to = {`/blog_post/${d.id}`} className="card  m-4 box-grow cursor-pointer" style={{width: "20rem" , boxShadow : `-5px 5px ${picKRandomColor()}`}}>
                        <img src={`http://localhost:8000/storage/${imgUrl[1]}`} className="card-img "></img>
                        <Heading className="card-title m-4" style={{ fontSize : "25px" , fontFamily : "Alata" ,color : "black"}}> {d.title} </Heading>
                        <div className="card-body d-flex flex-column" >
                            <BiShareAlt style={{ marginTop : "20px", fontSize : "25px" , color : "#4B3E9B"}} />
                        </div>
                        
                    </Link>
                )
            })}
        </div>
        </div>
        </>
    )
}
