import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import {deleteAnnonce , getAnnonce , toggleTrue} from '../../JS/actions/annonce';

import { Link } from "react-router-dom";
import './cards.css'

const AnnonceCard1 = ({annonce}) => {
    const dispatch = useDispatch()
    const isEdit = useSelector(state => state.annonceReducer.isEdit)

    
    return (
        
            
            <div className="annonce-card">
             


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.eleveurs-online.com/data/race/331.300.webp" />
  <Card.Body>
    <Card.Title>{annonce.nom}</Card.Title>
    <Card.Text>
    {annonce.race}
    </Card.Text>
    <Link to="/edit_annonce">
        <a href className="btn btn-outline-danger btn-sm"><i class="far fa-edit"
        onClick={() => { dispatch(toggleTrue()); dispatch(getAnnonce(annonce._id)) }}></i></a>
    </Link>

        <a href className="btn btn-outline-danger btn-sm"><i class="far fa-trash-alt"
        onClick={() => dispatch(deleteAnnonce(annonce._id))}></i></a>
   
    
  </Card.Body>
</Card>

        </div>
    )
}

export default AnnonceCard1
