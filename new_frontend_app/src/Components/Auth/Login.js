import { Heading } from '@chakra-ui/layout'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'
import loginimg from '../assets/loginimg.png'
import {MiscNav} from '../UI/Navigation/MiscNav'
export const Login = () => {
    return (
        <>
        <MiscNav/>
        <div >
     
        <div className="row text-center mx-auto d-flex justify-content-center p-4 " style = {{ objectFit:"cover",backgroundImage : `url(${loginimg})` , height:"50vh" , width : "100%" , overflowX : "none" ,backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"100%" }}>
            <Heading textAlign="center" py="170px" color="black" fontFamily="Nunito Sans"> Connexion </Heading>
        </div>
      
        
        <div className="row " style={{ marginTop : "200px"}}>
        <Formik
       initialValues={{ email: '' , password : ''}}
       validationSchema={Yup.object({
         
         email: Yup.string().email('Invalid email address').required('Required'),
         password : Yup.string().required('Required')
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {formik => (
        <div className="row d-flex justify-content-center align-items-center mx-auto flex-column" style={{ fontFamily : "Nunito Sans"}}>
         <form onSubmit={formik.handleSubmit}>
           <div className = "col-16 d-flex flex-column py-4 ">
            <label htmlFor="email" className = "form-label font-weight-bold text-dark">Email Address</label>
            <input id="email" type="email" {...formik.getFieldProps('email')} style = {{
                padding:"10px",
                border: "1px solid #1D3F72",
                borderRadius: "4px",
                outline: "none"
            }}/>
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            </div>
            <div className = "col-24 d-flex flex-column py-4 ">
            <label htmlFor="password" className = "form-label font-weight-bold text-dark">Password</label>
            <input id="password" type="password" {...formik.getFieldProps('password')} style = {{
                padding:"10px",
                border: "1px solid #1D3F72",
                borderRadius: "4px",
                width:"400px"
            }}/>
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            </div>
            <Link to='/fpwd' style = {{ textAlign : "right" , color:"#fff"}}> forgot password ?</Link>
            <div className=" mx-auto d-flex p-4">
                <button type="submit" className=  "col-5 text-center text-black" style= {{
                margin:"3px auto",
                backgroundColor:"#1D3F72",
                padding:"10px",
                borderRadius:"5px",
                color:"#fff",
                fontWeight:"bold",
                textAlign:"center"
            }} >Submit</button>
            </div>
           
         </form>
     </div>

       )}
     </Formik>
        </div>
        
        </div>
        </>
    )
}
