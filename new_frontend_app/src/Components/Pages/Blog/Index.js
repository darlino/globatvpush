import React, {useState,useEffect} from 'react'
import {Elements} from './Elements'
import {MiscNav} from '../../UI/Navigation/MiscNav'
import axios from 'axios'

export const Blog = (props) => {

    const [data,setData] = useState(null)
    const id = props.match.params.id

    let imgUrl = ''
    let date
    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/api/blog_post/${id}`)
        .then(req =>{
            setData(req.data)
            console.log(req.data)
        })
    }, [data, id])

    let fill
    if (data != null){
        const imageUrlStr = data[0].file_path
        imgUrl = imageUrlStr.split('/')
        date = data[0].created_at
        fill = date.split('T')

    }
   

    return (
        <div>
            <MiscNav/>
            {data === null? <code> yo </code> : 
            <Elements title = {data[0].title} desc = {data[0].description} img ={`http://localhost:8000/storage/${imgUrl[1]}`} time={fill[0]} />
            }
        </div>
    )
}
