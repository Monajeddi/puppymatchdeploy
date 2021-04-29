import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture} from "../../JS/actions/user";
import { toggleFalse} from "../../JS/actions/annonce";
import{Modal, Button}from 'react-bootstrap';
import {getAnnonces} from '../../JS/actions/annonce';
import AnnonceCard from '../AnnonceCards/AnnonceCard';
import AnnonceCard1 from '../AnnonceCards/AnnonceCard1';
import { Link } from 'react-router-dom';
import './profil.css'

const Profil = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
    const user = useSelector((state) => state.userReducer.user);
    const annonces = useSelector(state => state.annonceReducer.annonces)
    const [annonceData, setAnnonceData] = useState([])
    const [file, setFile] = useState();
    const dispatch = useDispatch();
console.log(annonces)
useEffect(() => {
  dispatch(getAnnonces())
}, [dispatch]);

    useEffect(() => {
      setAnnonceData(annonces)
      
    }, [annonces])
  
  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", user.email);
    data.append("userId", user._id);
    data.append("file", file);
    dispatch(uploadPicture(data, user._id));
  };
    return (
        <div>
            <>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  {/*---- Include the above in your HEAD tag --------*/}
  {/*
User Profile Sidebar by @keenthemes
A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme
Licensed under MIT
*/}
  <div className="container">
    <div className="row profile">
      <div className="col-md-3">
        <div className="profile-sidebar">
          {/* SIDEBAR USERPIC */}
          {console.log(user)}
          <div className="profile-userpic">
          <img src={user && user.picture} alt="..." width={250} className="rounded mb-2 img-thumbnail"
                //   onClick={()=>handleUpdateImg()}
                  />
         {/* add picture */}
         <Modal.Body>
            <form action="" onSubmit={handlePicture} className="upload-pic">
                {/* <label htmlFor="file">Changer d'image</label> */}
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input type="submit" value="Envoyer" />
            </form>
        </Modal.Body>

         
        
         
         
          </div>
          {/* END SIDEBAR USERPIC */}
          {/* SIDEBAR USER TITLE */}
          <div className="profile-usertitle">
            <div className="profile-usertitle-name">
            {(user && user.name) || ""}
            </div>
            <div className="profile-usertitle-job">
            {(user && user.email) || ""}
            </div>
            <div className="profile-usertitle-job">
            {(user && user.phone) || ""}
            </div>
          </div>
          {/* END SIDEBAR USER TITLE */}
          {/* SIDEBAR BUTTONS */}
          
          {/* END SIDEBAR BUTTONS */}
          {/* SIDEBAR MENU */}
          <div className="profile-usermenu">
            <ul className="nav">
              <li className="active">
                <a href="#">
                  <i className="glyphicon glyphicon-home" />
                  Overview </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-user" />
                  Account Settings </a>
              </li>
               
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-flag" />
                  Help </a>
              </li>
            </ul>
          </div>
          {/* END MENU */}
        </div>
      </div>
      {isAuth && !(user && user.role===0)?
            <Link to="/admin">
              <Button gradient="purple">Admindashboard</Button>
            </Link>
            : 

      <div className="col-md-9">
        <div className="profile-content">
        <h2>
        Mes Annonces 
          </h2>

          <div className="annonce-list">

                    {annonceData.length &&
                    annonceData
                    .filter(annonce => annonce.user._id === user?._id)
                        .map(annonce =><AnnonceCard1 annonce={annonce} key={annonce._id} />)}
            </div>
          
          <Link to="/add_annonce">
          <Button variant="light"
          onClick={() => { dispatch(toggleFalse()) }}
          >Ajouter une annonce</Button>
          </Link>
        </div>
      </div>
        }


    </div>
  </div>
  
  <br />
  <br />
</>

        </div>
    )
}

export default Profil
