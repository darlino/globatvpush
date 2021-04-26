import React,{useState , useEffect} from 'react'
import axios from 'axios'
import {MiscNav} from '../../UI/Navigation/MiscNav'
import {Elements} from './Elements'
import {SidebarVideo} from '../../UI/SidebarVideo/Index'


export const ArticleVideo = (props) => {

    const [article,setArticle] = useState([{}])
    const id = props.match.params.id

    useEffect(() =>{
        axios.get(`http://127.0.0.1:8000/api/articles/${id}`)
        .then(req => {
            setArticle(req.data)
        })
    
    })

  
    console.log(article[0])
    return (
        <div>
            <MiscNav/>
            <div className="row d-flex justify-content-center mx-auto p-4">
                <Elements video_url={article[0].video_path} title={article[0].title} desc={article[0].description}/>
                <SidebarVideo/>
            </div>
            
        </div>
    )
}
