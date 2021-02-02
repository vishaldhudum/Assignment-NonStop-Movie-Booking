import { Switch, Route, Redirect, HashRouter } from "react-router-dom";

import Login from './login/Login'
import NavBar from '../container/navBar/NavBar'
import Home from './home/Home'
import Confirmation from './confirmation/Confirmation'
import {isLogin} from '../utils/index'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => {

    return <Route {...rest} render={props => (
      isLogin()
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login' }} />
    )} />
  }

  return (
    <div className="app">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <NavBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/confirmation" component={Confirmation} />
          <Redirect to='/' />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
