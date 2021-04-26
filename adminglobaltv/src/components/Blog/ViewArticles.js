import React , {useEffect , useState} from 'react'
import {Table} from 'react-bootstrap'
import { BiEdit ,BiTrash } from 'react-icons/bi'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../assets/css/link.css'
import DOMPurify from 'dompurify';
import swal from '@sweetalert/with-react'
import Swal from 'sweetalert2'

const BASE_URL = "http://127.0.0.1:8000/api/blog_post"


export const ViewArticles = (props) => {

    const [data, setData] = React.useState(null)
    const [idFordelete, setIdForDelete] = useState(null)
    let imgUrl = ''
    let date
    let fill
    useEffect(() => {
        axios.get(BASE_URL)
        .then(req => {
            console.log(req.data)
            setData(req.data)
        })
    }
    , [data])

    
    const createMarkup = (html) => {
        return  {
          __html: DOMPurify.sanitize(html)
        }
      }
      
      const deleteArticle = (id) =>{
        
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(BASE_URL + '/' + id) 
                    .then(res => {
                        console.log(res.data)
                        window.location.reload()
                })

              swalWithBootstrapButtons.fire(
                 
                'Deleted!',
                'Your file has been deleted.',
                'success',
               
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
                
              )
            }
          })
      
      }

    return (
        <div className="col-10 view_port px-2 mx-3  ">
            <h1 className="text-white p-4" style={{ fontFamily:"Lato" ,fontWeight : "bold" , color:"#fff"}}> Tout les articles </h1>
            <div className="row d-flex">
            <div className="col-8 bg-primary float-right m-4 d-flex justify-content-end align-items-end p-2">
                    <input className="col-8 form-control p-2 ²" placeholder="search by title" type="text"/>
                    <input className="col-3 form-control p-2 ml-4" placeholder="search by title" type="date"/>
            </div>
            <div className="col-lg-12 col-md-10 col-sm-12 p-4 m-4 " > 
                    <Table striped  size="sm" className="text-white p-4" variant="blue">
                    <thead className="text-center">
                        <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>image</th>
                        <th>Date</th>
                        <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                      {data === null ? <code> yo </code> : 
                      data.map(e =>{
                        const imageUrlStr = e.file_path
                        imgUrl = imageUrlStr.split('/')
                        date = e.updated_at
                        fill = date.split('T')
                          return(
                            <tr>
                            <td>{e.id}</td>
                            <td style={{ width : "300px"}} > <h6 className="text-white" >{e.title}  </h6></td>
                            <td style={{ width : "600px"}} className="pl-4 p--2"><div noOfLines="5" fontSize="14px" color="#fff"  className="preview" dangerouslySetInnerHTML={createMarkup(e.description)}></div></td>
                            <td style={{ width : "200px" , height:"200px"}} className="p-2">
                                <img alt="image" src={`http://localhost:8000/storage/${imgUrl[1]}`} />
                            </td>
                            <td className="p-4"> <date> {fill[0]}</date></td>
                            <td className="p-4"> 
                                <div className="row d-flex justify-content-around">
                                    <Link to = {`/articles/edit_articles/${e.id}`}>
                                        <div className="bg-primary p-2 rounded text-white  font-weight-bold "> 
                                            <BiEdit style= {{ fontSize : "20px"}} />
                                        </div>
                                    </Link>
                                    <Link to = {`/articles/view_single_article/${e.id}`}>
                                        <div className="bg-success p-2 rounded text-white font-weight-bold  "> 
                                            <AiFillEye style= {{ fontSize : "20px"}} />
                                        </div>
                                    </Link>
                                    <div style = {{ cursor : "pointer"}} onClick = {() => deleteArticle(e.id)}>
                                        <div className="bg-danger p-2 rounded text-white font-weight-bold "> 
                                            <BiTrash style= {{ fontSize : "20px"}} />
                                        </div>
                                    </div>
                                </div>

                            </td>

                        </tr>
                          )
                      })}
                        
                    
                  
                    </tbody>
                </Table>
                </div>
            </div>
        </div>
    )
}
