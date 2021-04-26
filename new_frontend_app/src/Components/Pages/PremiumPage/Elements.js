import { Center, Heading } from '@chakra-ui/layout'
import React from 'react'
import premimg from '../../assets/premiumimg.png'

export const Elements = () => {
    return (
        <div className="row justify-content-center flex-column">
        <div className="p-8 row mx-auto d-flex justify-content-center flex-column" style = {{ background : "contain" ,backgroundImage : `url(${premimg})` , height:"80vh" , width : "100%" , overflowX : "none" , backgroundSize : "cover" , backgroundRepeat : "no-repeat" ,backgroundAttachment : "fixed"}}>
            <h2 style={{ fontSize : "50px" , marginTop : "20px" , fontFamily:"Alata" ,textAlign : "center", color:"#fff"}}> Plans </h2>
            <p style={{ fontSize : "20px" , marginTop : "20px" , fontFamily:"Tahoma" ,textAlign : "center", color:"#fff"}}> Selectionner un plan qui corresponds a vos attentes</p>
        </div> 
            <div className = "col-8 col-md-6 col mx-auto" style = {{ marginTop : '50px'}}>

            <div class="card-deck">
                <div class="card shadow">
                    <Center w="100%" h="100px" bg="#1D3F72" color="white">
                        <Heading fontFamily="Nunito Sans"> Mensuel </Heading> 
                    </Center>
                    <div class="card-body">
                    <h4 class="card-title text-center font-weight-bold" style = {{ fontFamily : "Montserrat" , fontSize : "80px"}}> 15 $L</h4>
                    <p class="card-text text-center">Grace a cette formule, vous aurez access a toutes les videos premium pendant un mois, a tout les posts et vous serez notifier a chaque fois qu'une nouvelle video sera mise en ligne </p>
                    </div>
                    <div class="card-footer mx-auto" style={{ width:"100%"}}>
                    <button class=" mx-auto" style={{ background : "#1D3F72" , color : "white", padding : "10px" ,width : "100%"}}>S'abonner</button>
                    </div>
                </div>
                <div class="card shadow">
                    <Center w="100%" h="100px" bg="#1D3F72" color="white">
                        <Heading fontFamily="Nunito Sans"> Annuel </Heading> 
                    </Center>   
                    <div class="card-body">
                    <h4 class="card-title text-center font-weight-bold" style = {{ fontFamily : "Montserrat" , fontSize : "80px"}}> 100 $L</h4>
                    <p class="card-text text-center">Grace a cette formule, vous aurez access a toutes les videos premium pendant un mois, a tout les posts et vous serez notifier a chaque fois qu'une nouvelle video sera mise en ligne </p>
                    </div>
                    <div class="card-footer mx-auto" style={{ width:"100%"}}>
                    <button class=" mx-auto" style={{ background : " #1D3F72" , color : "white", padding : "10px" ,width : "100%"}}>S'abonner</button>
                    </div>
                </div>
                </div>
            </div>
        
        </div>
    )
}
