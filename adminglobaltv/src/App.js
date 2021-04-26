import {Login} from '../src/views/login'
import {Dashboard} from '../src/views/dashboard'
import {BrowserRouter as Router , Link , Route ,Switch} from 'react-router-dom'
import {PrivateRoute} from '../src/variables/PrivateRoutes'
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path = "/login" component={Login}></Route>
            <Route  path = "/" component={Dashboard}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
