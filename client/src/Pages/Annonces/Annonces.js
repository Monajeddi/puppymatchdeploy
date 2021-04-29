import React, { useState } from 'react';

import Navbar from '../../Components/Navbar/Navbar';

import AnnonceList from '../AnnonceList/AnnonceList';

const Annonces = () => {
  const [SearchTerm, setSearchTerm] = useState("")


    return (
        <div>
         
          <Navbar SearchTerm={SearchTerm} setSearchTerm={setSearchTerm}/>
          
           <AnnonceList />
        </div>
    )
}

export default Annonces
