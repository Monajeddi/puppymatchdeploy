import {Route, Switch} from 'react-router';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/SignUp/Signup';
import Errors from './Pages/Errors';
import Footer from './Components/Footer/Footer';

import Nav from './Components/Nav/Nav';
import PrivateRoute from './router/PrivateRoute';
import PrivateRouteAdmin from './router/PrivateRouteAdmin';

import {currentUser} from './JS/actions/user'

import './App.css';
import Contact from './Pages/Contact/Contact';
import Profil from './Pages/Profil/Profil';
import Annonces from './Pages/Annonces/Annonces';
import Description from './Pages/Description/Description'
import AddAnnonce from './Pages/Add/AddAnnonce';
import Admin from './Pages/admin/Admin';
import ListeAnnonce from './Pages/admin/ListeAnnonce';
import ListeUtilisateurs from './Pages/admin/ListeUtilisateurs';
import Actualités from "./Components/Actualités/Actualités"
import Article1 from './Components/Article1/Article1';
import Article2 from './Components/Article2/Article2';
import Article3 from './Components/Article3/Article3';


function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <div className="App">
      
      <Nav/>

      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/annonces" component={Annonces}/>
        <Route path="/actualités" component={Actualités}/>
        <Route path="/article1" component={Article1}/>
        <Route path="/article2" component={Article2}/>
        <Route path="/article3" component={Article3}/>

        <PrivateRoute path="/description/:id" component={Description}/>
        <PrivateRoute path="/profil" component={Profil}/>
        <PrivateRoute path="/(add_annonce|edit_annonce)" component={AddAnnonce}/>
        
        <PrivateRouteAdmin exact path="/admin" component={Admin}/>
        <PrivateRouteAdmin path="/listeannonce" component={ListeAnnonce}/>
        
        {/* <PrivateRoute path="/admin" component={Admin}/> */}
        <Route path="/*" component={Errors}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
