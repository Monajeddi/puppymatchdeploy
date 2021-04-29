import React from 'react';
import {Card, Button} from 'react-bootstrap';

import { Link } from "react-router-dom";
import './cards.css'

const AnnonceCard = ({annonce}) => {
  
    return (
        <div className="annonce-card">
             {/* <section id="gallery">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{annonce.nom}</h5>
            <p className="card-text">{annonce.race}</p>
            <a href className="btn btn-outline-success btn-sm">Read More</a>
            <a href className="btn btn-outline-danger btn-sm"><i className="far fa-heart" /></a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section> */}


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.eleveurs-online.com/data/race/331.300.webp" />
  <Card.Body>
    <Card.Title>{annonce.nom}</Card.Title>
    <Card.Text>
    {annonce.race}
    </Card.Text>
    <Link to={`/description/${annonce._id}`}>
        <a href className="btn btn-outline-success btn-sm">Description</a>
    </Link>
        {/* <a href className="btn btn-outline-danger btn-sm"><i className="far fa-heart" /></a>
    */}
    
  </Card.Body>
</Card>

        </div>
    )
}

export default AnnonceCard
