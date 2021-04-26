import React from 'react'
import {Sidebar} from '../components/Sidebar'
import {Navigation} from '../components/Navigation'
import {ViewPort} from '../components/ViewPort'
import {Settings} from '../components/Setting'
import { Subscribtions} from '../components/Subscribtions'
import { AddUser } from '../components/Users/AddUser'
import {ViewUsers} from '../components/Users/ViewUsers'
import {AddArticle} from '../components/Blog/AddArticle'
import {ViewArticles} from '../components/Blog/ViewArticles'
import {AddVideo} from '../components/Videos/AddVideo'
import {ViewVideos} from '../components/Videos/ViewVideos'
import {EditorConvertToHTML} from '../layouts/Editor'
import { EditArticle} from '../components/Blog/EditArticle'
import {ViewSingleArticle} from '../components/Blog/ViewSingleArticle' 
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'



export const Dashboard = () => {
    return (
        <Router >
            <Navigation/>
            <div className = "d-flex px-1 mx-2" style={{ width : "100%"}}>
                <Sidebar/>
                
                    <Switch>
                        <Route exact path="/" component={ViewPort}/>
                        <Route path="/suscribtions" component={Subscribtions}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/users/add_user" component={AddUser}/>
                        <Route path="/users/view_users" component={ViewUsers}/>
                        <Route path="/users/view_users" component={ViewUsers}/>
                        <Route path="/videos/add_video" component={AddVideo}/>
                        <Route path="/videos/view_videos" component={ViewVideos}/>
                        <Route path="/articles/add_article" component={AddArticle}/>
                        <Route path="/articles/view_articles" component={ViewArticles}/>
                        <Route path="/articles/edit_articles/:id" component={EditArticle}/>
                        <Route path="/articles/view_single_article/:id" component={ViewSingleArticle}/>
                    </Switch>
                
                
               </div>
        </Router>
         
    )
}
