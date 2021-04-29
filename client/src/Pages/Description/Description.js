import React, {useState , useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import {getAnnonce} from '../../JS/actions/annonce';
import bobby from '../../Assets/bobby.jpeg'
import './description.css'


const Description = ({match}) => {
    // const [annonce, setAnnonce] = useState({});
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAnnonce(id));
    }, [id, dispatch]);

    const annoncee = useSelector(state => state.annonceReducer.annonce.annonceToFind)


    // useEffect(() => {
    //     dispatch(getAnnonces.find(annonce => annonce._id === Number(match.params._id)))
    // }, [dispatch,match.params._id]);

    return (
        <div>
            <h2 className="title">Descriptions</h2>
               
            
            <br/>
            <div className="demo">
  <div className="containeer">
    <div className="row">
      <div className="col-md-12">
        <div id="testimonial-slider" className="owl-carousel">
          <div className="testimonial">
            <div className="pic">
              <img src={bobby} alt />
            </div>
            <div className="testimonial-content">
              <h3 className="title">{annoncee?.nom}</h3>
              <p className="post">{annoncee?.race}</p>
              <p className="post">{annoncee?.age}  ans</p>
              <p className="post">{annoncee?.sexe}</p>
              <p className="post">{annoncee?.poil}</p>
              <p className="description">
              {annoncee?.description}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dolor nibh, semper at pretium vitae, tincidunt non risus. Aenean mattis sit amet ex nec venenatis. Pellentesque tempus pellentesque efficitur. Nulla commodo bibendum quam, at imperdiet orci congue non. Maecenas interdum.
              </p>
              <p className="post">{annoncee?.localisation}</p>
              <p className="post">{annoncee?.contact}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
<br/>

            <Link to="/annonces">
            <Button variant="secondary" style={{marginBottom:'20px'}}>Go back</Button>
            </Link>
            
        </div>
    )
}

export default Description
