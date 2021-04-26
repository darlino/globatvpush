import React from 'react'
import './index.css'
import {MiscNav} from '../../UI/Navigation/MiscNav'

export const Live = () => {
    return (
        <>
        <MiscNav/>
        <div className="row d-flex justify-content-center " style={{ padding : "40px"}}>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
            </div>
        </div>
        </>
    )
}
