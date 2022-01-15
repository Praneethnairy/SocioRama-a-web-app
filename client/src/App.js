import SignIn from './MainCompo/SignIn';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Signup from './MainCompo/Signup';
import HomePage from './MainCompo/HomePage';
import {useState} from 'react';
import PrivateRoute from './MainCompo/PrivateRoute';
import Cookies from 'universal-cookie';
import GamesPage from './MainCompo/GamesPage';
import AboutUs from './MainCompo/AboutUs';
import Profile from './MainCompo/Profile';
import Settings from './MainCompo/Settings';

function App() {
  const [user,setUser] = useState({})
  const token = new Cookies();
  token.get('token');
  const [tok,setTok] = useState(token);
  console.log(tok)
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/">  
          <SignIn setUser = {setUser}/>
        </Route>
        <Route exact path = "/signin">
          
          <SignIn setUser = {setUser}/>
        </Route>
        <Route exact path ="/signup">
          <Signup/>
        </Route>
        <PrivateRoute token = {tok} page = {HomePage} path = "/home"/>
        <PrivateRoute page = {GamesPage} token = {tok} path = "/games"/>
        <PrivateRoute page = {AboutUs} token = {tok} path = "/about1"/>
        <PrivateRoute page = {Profile} token = {tok} path = "/profile"/>
        <PrivateRoute page = {Settings} token = {tok} path = "/settings"/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
