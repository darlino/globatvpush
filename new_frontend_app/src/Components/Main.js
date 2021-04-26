import React from 'react'
import {Home} from '../Components/Pages/Home/Index'
import {BrowserRouter as Router ,
        Switch,
        Route,
} from 'react-router-dom'
import './Main.css'
import {PremiumPage} from '../Components/Pages/PremiumPage/Index'
import {ArticleVideo} from '../Components/Pages/Articles/Index'
import {VOD} from '../Components/Pages/VOD/Index'
import {Blog} from '../Components/Pages/Blog/Index'
import {Login} from '../Components/Auth/Login'
import {Post} from '../Components/Pages/Blog/Post'
import {Live} from '../Components/Pages/Live/Index'
const Main = () => {
    return (
        <Router>
            <Switch>
                <Route  exact path="/" component={Home} />
                <Route   path="/articles/:id" component={ArticleVideo} />
                <Route   path="/premium" component={PremiumPage} />
                <Route   path="/vod" component={VOD} />
                <Route   path="/blog_post/:id" component={Blog} />
                <Route   path="/login" component={Login} />
                <Route   path="/blog" component={Post} />
                <Route   path="/live" component={Live} />
            </Switch>
        </Router>
    )
}

export default Main
