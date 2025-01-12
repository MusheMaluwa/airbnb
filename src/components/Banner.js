import React, { useState } from 'react';
import  Button  from '@mui/material/Button';
import './Banner.css';
import Search from './Search';

const Banner = () => {

    const [showSearch, setShowSearch] = useState(false)


  return (
    <div className='banner'>
      <div className='banner_search'>
        {showSearch && <Search />}
        <Button 
            onClick={() => setShowSearch(!showSearch)}
            className="banner_searchButton"
            variant="outlined"
        >
            {showSearch? 'Hide':"Search Dates"}
        </Button>
        <div className='banner_info'>
            <h1>
                Get out and streth your imagination
            </h1>
            <h5>
                plan a different kind of gate to uncover the hidden gems near you.
            </h5>
            <Button  variant="outlined">Explore Nearby</Button>
        </div>

      </div>
    </div>
  )
}

export default Banner
