import React, { useEffect, useState } from 'react';
import { FormControl , Form} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {getAnnonces} from '../../JS/actions/annonce';
import AnnonceCard from '../AnnonceCards/AnnonceCard';
import Search from '../../Components/Search';

import './list.css'

const AnnonceList = ({SearchTerm, setSearchTerm}) => {
    const annonces = useSelector(state => state.annonceReducer.annonces)
    const dispatch = useDispatch()
    const [filterName, setFilterName] = useState("");
console.log(annonces)
    useEffect(() => {
        dispatch(getAnnonces())
    }, [dispatch]);

    //const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>

            <div className="search">
            {/* <Search searchTerm={searchTerm} 
            onChange={(e)=>setFilterNom(e.target.value)}
            value={filterNom}
            setSearchTerm={setSearchTerm}/> */}
                
                
            </div>
            <div className="annonce-content" >
            {/* <Form inline>
                    <FormControl
                    onChange={(e)=>setFilterNom(e.target.value)}
                    value={filterNom}
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" />
                </Form> */}
                <div className="card-headerr">
            <Form inline >
                    <FormControl
                    onChange={(e) => setFilterName(e.target.value)}
                    value={filterName}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    />
            </Form>
            </div>
                <div className="annonce-list">
                    {annonces
                    .filter((annonce) => annonce.nom.toLowerCase().includes(filterName.toLowerCase()))
                        .map(annonce =><AnnonceCard annonce={annonce} key={annonce._id} />)}
            </div>
                </div>
        </div>
    )
}

export default AnnonceList
