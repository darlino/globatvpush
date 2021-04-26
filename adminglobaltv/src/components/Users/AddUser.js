import React , {useState , useEffect} from 'react'
import { AiFillSave } from 'react-icons/ai'
import {EditorConvertToHTML} from '../../layouts/Editor'
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import axios from 'axios'


export const AddUser = () => {

    const [editorState , setEditorState] = useState( EditorState.createEmpty())
    const [title ,setTitle] = useState(" ")
    const [image ,setImage] = useState(" ")

    const desc = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    

    
    console.log(image[0].name)
    const onEditorStateChange = (editorState) => {
      setEditorState(editorState)
    };

    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post('http://127.0.0.1:8000/api/blog_post' , {
            title : title,
            description : desc,
            image : image
        })
        .then(req => {
            console.log(req.data)
        })
        .catch(error =>{
            console.log("ERRR :",error.response.data)
        })
    }
  
    return (
        
        <div className="col-10 view_port px-2 mx-3  ">
            <h1 className="text-white p-4" style={{ fontFamily:"Lato" ,fontWeight : "bold" , color:"#fff"}}> Ajouter un utilisateur </h1>
            <div className="col-12 d-flex align-items-center justify-content-center">
                <form onSubmit={handleSubmit} className="col-7 form-group mx-auto align-items-center justify-content-center">
                    <label for="title" name="title" className="form-label p-1 mt-2 text-white">
                        Title
                    </label>
                    <input className="form-control" onChange={
                        (e) =>{
                            e.preventDefault()
                            setTitle(e.target.value)
                        }
                    } placeholder="Entrer le titre de l'article" id="title" name = "description" ></input>
                    <label for="title" name="title" className="form-label p-1 mt-2 text-white">
                        Description
                    </label>
                    <div className="bg-light text-dark" style={{ height : "600px" }}>
                        <Editor
                            editorState={editorState}
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            onEditorStateChange={onEditorStateChange}
                            placeholder="Enter the description"
                            className="p-2"
                            
                        />
                 
                    </div>
                    <label for="title" name="title" className="form-label pr-4 mt-4 text-white">
                        Image
                    </label>
                    <input type="file" className="form-control  p-1" onChange={
                        (e) =>{
                            e.preventDefault()
                            setImage(e.target.files)
                        }
                    } placeholder="Entrer le titre de l'article" id="image" name="image" ></input>
                    <br/>
                    <button className="form-control" type="submit" className="col-4 p-2 mt-4 btn btn-primary float-right" > Enregistrer <AiFillSave/></button> 
                </form>
            </div>
        </div>
        
    )
}
