import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../../assets/css/editor.css'
import DOMPurify from 'dompurify';

const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
}

const BASE_URL = "http://127.0.0.1:8000/api/blog_post/"

export const ViewSingleArticle = (props) => {
    const id = props.match.params.id
    const [data,setData] = useState(null)

    useEffect(() =>{
        axios.get(BASE_URL + id)
        .then(res =>{
            setData(res.data)
        })
    }, [data])
    let imgUrl = ''
    let date
    let fill

    return (
        
            <div className=" justify-content-center view_port d-flex col-10 p-4 ml-4">
            {
                data === null ? <code> you </code> : 
                data.map(e =>{
                        const imageUrlStr = e.file_path
                        imgUrl = imageUrlStr.split('/')
                        date = e.updated_at
                        fill = date.split('T')

                        return(
                            <>
                            <div className="col-4 p-4 float-left ml-4">
                                <img src={`http://localhost:8000/storage/${imgUrl[1]}`} className="img-thumbnail"/>
                            </div>
                            <div className="col-7 p-4  float-left ml-4">
                                <div className="row d-flex text-center mx-auto flex-column">
                                    <h4 className="text-center text-white"> Title </h4>
                                    <textarea type="text" disabled="true" value = {e.title} />
                                </div>
                                <div className="row d-flex text-center mx-auto flex-column pt-4" style={{ height : "400px"}}>
                                    <h4 className="text-center text-white"> Description </h4>
                                    <textarea type="text" disabled="true" value = {e.description} style={{ height : "90%"}}/>
                                </div>
                                <div className="row d-flex text-center mx-auto flex-column pt-4" >
                                    <h5 className="text-center text-white"> Publie le  </h5>
                                    <input type="text" disabled="true" value = {fill[0]}/>
                                </div>
                            </div>
                            </>
                        )
                
                })
            }
                
            </div>
       
    )
}
