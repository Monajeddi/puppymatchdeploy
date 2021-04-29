import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './admin.css'

const Admin = () => {
  const user = useSelector((state) => state.userReducer.user);
    return (
        <div>
           <div className="contaiiner mt-4">
  <div className="row">
    <div className="col-lg-3 my-lg-0 my-md-1">
      <div id="sidebar" className="bg-purple">
        <div className="h4 text-white">Dashboard</div>
        <ul>
          <li className="active"> <a href="#" className="text-decoration-none d-flex align-items-start">
              <div className="far fa-user pt-2 me-3" />
              <div className="d-flex flex-column">
                <div className="link"> Profil</div>
                <div className="link-desc">Modifier les informations du profil</div>
              </div>
            </a> </li>
            <Link to="/listeannonce">
            <li> <a href="#" className="text-decoration-none d-flex align-items-start">
              <div className="fas fa-paw pt-2 me-3" />
              <div className="d-flex flex-column">
                <div className="link">Liste des annonces</div>
                <div className="link-desc">Voir &amp; Contrôler les annonces</div>
              </div>
            </a> </li>
            </Link>
          
          {/* <Link to="/listeutilisateurs">
          <li> <a href="#" className="text-decoration-none d-flex align-items-start">
              <div className="fas fa-users pt-2 me-3" />
              <div className="d-flex flex-column">
                <div className="link">Liste des utilisateurs</div>
                <div className="link-desc">Voir la liste des utilisateurs</div>
              </div>
            </a> </li>
          </Link> */}
          
          
          
        </ul>
      </div>
    </div>

    <div className="col-lg-9 my-lg-0 my-1">
      <div id="main-content" className="bg-white border">
        <div className="d-flex flex-column">
          <div className="h7">Hello {(user && user.name) || ""}</div>
          <div>Logged in as: {(user && user.email) || ""}</div>
          <img src={user && user.picture} alt="..." width={250} style={{marginLeft:'370px'}}/>
        </div>

        <div className="d-flex my-4 flex-wrap">
          

          

          
        </div>

        
        <div className="order my-3 bg-light">
          <div className="row">
            <div className="col-lg-4">
              <div className="d-flex flex-column justify-content-between order-summary">
                <div className="d-flex align-items-center">
                  
                  
                </div>
                
                
              </div>
            </div>
            
             
                
                
            
          </div>
        </div>



       
        
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Admin
