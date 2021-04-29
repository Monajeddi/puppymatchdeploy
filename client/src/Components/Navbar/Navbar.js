import React from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'antd';
import { Input } from 'antd'
import couple2 from '../../Assets/couple2.jpeg';
import couple3 from '../../Assets/couple3.jpeg'
import couple from '../../Assets/couple.jpeg';
import './navbar.css'

const Navbar = ({setSearchTerm}) => {
    return (
        <div>
           <Carousel autoplay>
    <div>
      <img className="contentStyle" src={couple}/>
      
    </div>
    <div>
    <img className="contentStyle" src={couple2}/>
    </div>
    <div>
    <img className="contentStyle" src="https://i2.wp.com/wittyvows.com/wp-content/uploads/2017/03/dog-wedding.jpg?fit=900%2C600"/>
    </div>
    
  </Carousel>

  

        </div>
    )
}

export default Navbar
