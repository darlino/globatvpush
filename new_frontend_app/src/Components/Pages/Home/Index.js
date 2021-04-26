import React from 'react'
import {Navigation} from '../../../Components/UI/Navigation/Navigation'
import {BigPlayer} from '../Home/BigPlayer'
import {Index} from '../Home/ArticlesHome/Index'


export const Home = (props) => {
    return (
        <div>
            <BigPlayer/>
            <Index/>
            
        </div>
    )
}
