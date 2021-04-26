/*  
    Connexion au dashboard admin
*/

import React , {useState , useEffect} from 'react'
import axios from 'axios'
import logo from '../assets/img/logo.png'
import '../assets/css/login.css'
export const Login = () => {

    const BASE_URL = "http://127.0.0.1:8000/api/admin_login"
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [login,setLogin] = useState(false)
    const [token,setToken] = useState(null)
    let isTrue = false
    let display = "none"
    let isLogged = false


    const tokenDom = document.querySelector("meta[name=csrf-token]")
    if (tokenDom) {
       const csrfToken = tokenDom.content
       axios.defaults.headers.common['X-CSRF-Token'] = csrfToken
    }

    const handleSubmit = (e) =>{
            e.preventDefault();
            
                axios.post(BASE_URL, {
                    email: email,
                    password : password
                })
                .then(res =>{
                    console.log(res.data.status_code)
                    if (res.data.status_code === "200"){
                        setToken(res.data.token)
                        window.location.href = '/dashboard'
                        localStorage.setItem("isLogged",true)
                    }
                    else{
                        alert("faux")
                        console.log(isTrue)
                        isTrue = true
                        if(isTrue){
                            display = "flex"
                        }
                        
                    }
                })
            }


    const errorMessage = () =>{
        return(
                <div className="col-md-12 col-12 p-4" display="none" style={{ display:{display}}}>
                    <p color="text-danger bg-danger" color="red"> Les informations fournies sont incorrectes</p>
                </div>
            )
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    } 
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }   
    console.log(localStorage.getItem("isLogged"))
    return (
        <div className="row d-flex justify-content-center mx-auto login-box">
            <div className="col-8 ml-4 d-flex login-img">
                <img src={logo} alt="logo"/>
            </div>
            <form onSubmit={handleSubmit} className="row-12 d-flex flex-column">
                
                    <div className="col-md-12 col-12 d-flex flex-column mb-3">
                        <label for="email" className="form-label font-weight-bold ml-2 "  > email</label>
                        <input type="email" id="email" required name="email" className="form-control" onChange={handleEmailChange} placeholder="Entrer votre adresse email" value={email} />
                    </div>
                    <div className="col-md-12 col-12 d-flex flex-column mb-3">
                        <label for="password" className="form-label font-weight-bold ml-2 " > password</label>
                        <input type="password" id="password" name="password" required onChange={handlePasswordChange} value={password} className="form-control" placeholder="Entrer votre mot de passe" />
                    </div>
                    
                    <button className="mx-auto col-4 btn btn-primary"  typr="submit" > Submit </button>
                    {errorMessage()}
                
            </form>
        </div>
    )
}
