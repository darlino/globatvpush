import React , {useState , useEffect} from 'react'
import { AiFillSave } from 'react-icons/ai'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from 'axios'
import swal from '@sweetalert/with-react'
import '../../assets/css/editor.css'

export const EditArticle = (props) => {
    const id = props.match.params.id
    const [editorState , setEditorState] = useState( EditorState.createEmpty())
    const [title ,setTitle] = useState(" ")
    const [image ,setImage] = useState()

    const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    
    console.log(id)
    
    const onEditorStateChange = (editorState) => {
      setEditorState(editorState)
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        //let fData = new FormData()

        var formData = new FormData();
        formData.append("title", title);
        formData.append("description", `<div> ${desc}</div>`);
        formData.append("image", image);

        axios.post(`http://127.0.0.1:8000/api/blog_post/${id}`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data'
                }
        })
        .then(req => {
            console.log(req.data)
            if (req.data.status_code === "200"){
                swal("The articles has been succesfully update!", ` ${req.data.message}`, "success")
                
                setTitle('')
                setImage('')
            
            setTimeout(() =>{
                // eslint-disable-next-line no-restricted-globals
                window.location.href = location.pathname
            }, 2000)
            
            }
            else {
                swal("There is an error!", `${req.data.message}`, "error")
            }
        })
        .catch(error =>{
            
        })
        
    }
    
    const handleImageChange = (e) =>{
        let files = e.target.files
        setImage(files[0])
    }

  
    return (
        
        <div className="col-10 view_port px-2 mx-3  ">
            <h1 className="text-white p-4" style={{ fontFamily:"Lato" ,fontWeight : "bold" , color:"#fff"}}> Modifier un article </h1>
            <div className="col-12 d-flex align-items-center justify-content-center">
                <form onSubmit={handleSubmit} className="col-7 form-group mx-auto align-items-center justify-content-center">
                    <label for="title" name="title" className="form-label p-1 mt-2 text-white">
                        Title
                    </label>
                    <textarea className="form-control" onChange={
                        (e) =>{
                            e.preventDefault()
                            setTitle(e.target.value)
                        }
                    } placeholder="Entrer le nouveau titre titre de l'article" id="title" name = "title" ></textarea>
                    <label for="title" name="title" className="form-label p-1 mt-2 text-white">
                        Description
                    </label>
                    <div className="bg-light text-dark" style={{ height : "600px"}}>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={onEditorStateChange}
                            placeholder="Enter the description"
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class"
                            toolbarClassName="toolbar-class"
                            className="p-2"
                        />
                 
                    </div>
                    <label for="title" name="image" className="form-label pr-4 mt-4 text-white">
                        Image
                    </label>
                    <input type="file" id="image" name="image" className="form-control  p-1" onChange={handleImageChange} placeholder="Entrer le titre de l'article"  ></input>
                    <br/>
                    <button className="form-control" type="submit" className="col-4 p-2 mt-4 btn btn-primary float-right" > Enregistrer <AiFillSave/></button> 
                </form>
            </div>
        </div>
        
    )
}
