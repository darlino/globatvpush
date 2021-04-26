import {Route ,Redirect} from 'react-router-dom'

const isLoggedIn = localStorage.getItem("isLogged")
export const PrivateRoute = ({ component: Component, ...rest }) => (
    
<Route {...rest} render={(props) => (
    isLoggedIn === "true"
    ? <Component {...props} />
    : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
        }} />
        
)} />
)
