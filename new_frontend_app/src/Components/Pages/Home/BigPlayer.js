import {Heading ,  Image,  Text} from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import './player.css'
import bg from '../../assets/bgimg.png'
import elle from '../../assets/elle.png'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import paypal from '../../assets/pp.png'
import limo from '../../assets/limo.png'
import btc from '../../assets/btc.svg'
import styled from 'styled-components'
import {Navigation} from '../../UI/Navigation/Navigation'
import { Formik } from 'formik';
import * as Yup from 'yup';
import {Modal} from 'react-bootstrap'
import './effect.css'
import { BiShareAlt } from 'react-icons/bi'
import axios from 'axios'
import payment from '../../assets/payment.png'
import letter from '../../assets/letter.png'

const ButtonUI = styled(Link)`
    background-color:#013B8C;
    padding:8px;
    color:#fff;
    font-weight:bold;
    display:flex;
    
    &:hover{
        background-color : #1D3F72;
        color:white;
        text-decoration:none
    }
`
const ModalC = (props) =>{
    return(
        <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        
        >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{
            background:"#063164"
        }}>
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
        <div className="row d-flex justify-content-center align-items-center mx-auto flex-column">
         <form onSubmit={formik.handleSubmit}>
           <div className = "col-16 d-flex flex-column py-4 ">
            <label htmlFor="email" className = "form-label font-weight-bold text-white">Email Address</label>
            <input id="email" type="email" {...formik.getFieldProps('email')} style = {{
                padding:"10px",
                border: "none",
                borderRadius: "4px",
                outline: "none"
            }}/>
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            </div>
            <div className = "col-24 d-flex flex-column py-4 ">
            <label htmlFor="password" className = "form-label font-weight-bold text-white">Password</label>
            <input id="password" type="password" {...formik.getFieldProps('password')} style = {{
                padding:"10px",
                border: "none",
                borderRadius: "4px",
                outline: "none",
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
                backgroundColor:"white",
                padding:"10px",
                borderRadius:"5px",
                color:"#063164",
                fontWeight:"bold",
                textAlign:"center"
            }} >Submit</button>
            </div>
           
         </form>
     </div>

       )}
     </Formik>
        </Modal.Body>
        </Modal>    
    )
}

export const BigPlayer = () => {

    const [show,setShow] = useState(false)
    const [data,setData] = useState([{}])

    const BASE_URL = "http://127.0.0.1:8000/api/home_blog_post"

    useEffect(() =>{
        axios.get(BASE_URL)
        .then(res =>{
            setData(res.data)
        })
    }, [data])

    const showLogin = () =>{
        setShow(true)
    }
    
    const COLORS = ["#fc8c03","#b50b0b","#0eb50b","#0bb5b5","#0b66b5","#620cf5","#f50ce5","#f50c2f"]

    const picKRandomColor = () =>{
        let index = Math.floor(Math.random() * 8)
        return COLORS[index]
    }
    const link = window.location.href
    return (
        <>
        <div  style = {{ background : "contain" ,backgroundImage : `url(${bg})` , height:"100vh" , width : "100%" , overflowX : "none" , backgroundSize : "cover" , backgroundRepeat : "no-repeat" }}>
            <Navigation showLogin = {showLogin} />
            <ModalC show = {show} setShow = {setShow}/>
            <div className="row mx-auto text-center my-auto d-flex flex-column justify-content-center align-items-center mt-4" style={{ paddingTop : "300px"}}>
                <Heading fontSize={["30px" , "60px" , "100px"]} color="#fff" fontFamily = "Alata" pb="10px"> GLOBAL TV</Heading>
                <Text fontSize={["15px" , "20px"]} color="#fff" fontFamily = "Alata" textAlign = "left" color = "red"> L'information c'est le pouvoir</Text>
                <ButtonUI className = "btn col-4 col-md-1  mt-4"> Get Started <FaLongArrowAltRight style={{ marginTop : "6px", marginLeft : "4px"}} /> </ButtonUI>
            </div>
           
        </div>

        <div>
        <Heading py = "40px" textAlign="left" color="#000" fontFamily="Alata" ml="10px"> Methodes de paiement</Heading>
        <div className="row d-flex justify-content-center mx-auto text-center p-4 m-4 " style= {{ backgroundImage : `url(${payment})`, objectFit : "contain" , backgroundSize : "cover" , backgroundRepeat : "no-repeat",backgroundPosition:"center" , backgroundAttachment:"fixed" }}>
        
                <div className="col-6 col-md-3 col m-2 align-center d-flex flex-column shadow bg-light">
                    <img src = {limo} className="img-fluid mx-auto" style={{ width : "100px" , height : "80px"}}/>
                    <Heading pt={4}> Limo </Heading>
                    <Text pt={4} pb={4} color="#000" fontFamily = "Alata" fontSize = "20px"> Payer votre abonnement en limo</Text>
                </div>
                <div className="col-6 col-md-3 col m-2 align-center d-flex flex-column shadow bg-light">
                    <img src = {btc} className="img-fluid mx-auto" style={{ width : "100px" , height : "100px"}}/>
                    <Heading pt={4}> Bitcoin </Heading>
                    <Text pt={4} pb={4} color="#000" fontFamily = "Alata" fontSize = "20px"> Payer votre abonnement en BITCOIN</Text>
                </div>
                <div className="col-6 col-md-3 col m-2 align-center d-flex flex-column shadow bg-light">
                <img src = {paypal} className="img-fluid mx-auto" style={{ width : "200px" , height : "100px"}}/>
                    <Heading pt={4}> Paypal </Heading>
                    <Text pt={4} pb={4} color="#000" fontFamily = "Alata" fontSize = "20px"> Payer votre abonnement avec paypal</Text>
                </div>
                <ButtonUI  to = "/premium" className="col-6 col-md-4 justify-content-center mt-4"> <p className="text-center"> Voir les plans </p></ButtonUI>
            </div>
            
            </div>
            <Heading py = "40px" textAlign="right" color="#000" fontFamily="Alata" mr = "100px"> Actus </Heading>
            <div>
                <div className="row d-flex justify-content-center mx-auto p-4 m-4">
                <div className="col-12 col-md-8 col-sm-12 d-flex flex-wrap justify-content-center">
                    {data.map(d =>{
                        return(
                            <Link to = {`/blog_post/${d.id}`} className="card  m-4 box-grow cursor-pointer" style={{width: "20rem" , boxShadow : `-5px 5px ${picKRandomColor()}`}}>
                                <img src={d.file_path} className="card-img "></img>
                                <Heading className="card-title m-4" style={{ fontSize : "25px" , fontFamily : "Alata" ,color : "black"}}> {d.title} </Heading>
                                <div className="card-body d-flex flex-column" >
                                    <Text noOfLines={5} className = "card-text p-2 d-flex  flex-column"  style={{ maxHeight:"90px", fontSize : "14px" , fontFamily : "Alata" ,color : `black`  }}> {d.description}  </Text>
                                    <BiShareAlt style={{ marginTop : "20px", fontSize : "25px" , color : "#4B3E9B"}} />
                                </div>
                                
                            </Link>
                        )
                    })}
                    
                </div>
                    

                <div className="position-sticky col-12 col-md-3 justify-content-center mx-auto pl-4 my-4 " style={{height: 'auto', backgroundColor: '#FFFFFF', overflowY: 'auto', boxSizing: 'border-box', border: '1px solid #56667F', borderRadius: '4px', textAlign: 'right', lineHeight: '14px', fontSize: '12px', fontFeatureSettings: 'normal', textSizeAdjust: '100%', boxShadow: 'inset 0 -20px 0 0 #56667F', padding: '0px', margin: '0px', width: '100%'}}><div style={{height: '100%', padding: '0px', margin: '0px', width: '100%'}}><iframe src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=50&pref_coin_id=1505&graph=yes" width="100%" height="100%" scrolling="auto" marginWidth={0} marginHeight={0} frameBorder={0} border={0} style={{border: 0, margin: 0, padding: 0}} /></div></div>
            </div>
            </div>
            <Heading py = "40px" textAlign="left" color="#000" fontFamily="Alata" p={4} > Abonnez vous a notre newsletter </Heading>
            <div className="row d-flex justify-content-center mx-auto text-center p-4 m-4 " style= {{ backgroundImage : `url(${letter})`, objectFit : "contain" , backgroundSize : "cover" , backgroundRepeat : "no-repeat",backgroundPosition:"center" , backgroundAttachment:"fixed"}} >
                <div>
                <div class="input-group mb-3 col-12 d-flex input-group-lg  ">
                    <span class="input-group-text text-center" id="email" style={{ backgroundColor:"#1D3F72", color:"white",fontSize:"15px",fontWeight:"bold",outline:"none",border:"none",paddingLeft:"30px",fontFamily : "Nunito Sans" }} >Email</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" style = {{ width : "500px" , border:"none",outline:"none"}}/>
                    <button className="col-8  mx-auto m-4" style ={{ backgroundColor : "red" , color : "white" , fontSize : "20px" , padding:"10px" , fontWeight : "bold" , fontFamily:"Nunito Sans"}} > Souscrire </button>
                </div>

                </div>
                
            </div>
       </>
    )
}
