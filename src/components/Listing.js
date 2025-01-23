import React from 'react';
import './Listing.css';
// import { Avatar } from '@mui/material';


const Listing = () => {
  return (
    <div className='listing-container'>
      <div className='header-one'>
        <p>Bordeaux Getaway</p>
        
      </div>
      <div className='header-details'>
        <p>5.0 ⋅ 7 reviews ⋅ superhost ⋅ Bordeaux,france</p>    
      </div>

      <div className="container">
        <div className="left">
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-41147137/original/8b693f45-5c15-4487-8936-52d165d28794.jpeg?im_w=960&im_format=avif" alt="" />
        </div>
        
        <div className="right">
          <div className="grid">
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-41147137/original/f18c039b-7f9b-410f-8009-2cf989e0079a.jpeg?im_w=1200&im_format=avif" alt="" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-41147137/original/f18c039b-7f9b-410f-8009-2cf989e0079a.jpeg?im_w=1200&im_format=avif" alt="" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-41147137/original/f18c039b-7f9b-410f-8009-2cf989e0079a.jpeg?im_w=1200&im_format=avif" alt="" />
            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-41147137/original/f18c039b-7f9b-410f-8009-2cf989e0079a.jpeg?im_w=1200&im_format=avif" alt="" />
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='left-content'>
              <div>
                <p className='header-one'>Entire rental unit hosted by Ghazal </p>             
                <p className='header-details'>2 guests ⋅ 1 bedroom ⋅ 1 bed ⋅ 1 bath</p> 
              <div>                
                </div>
               </div>              
        </div>
        <div className='right-content'>
        </div>
      </div>
    </div>
  );
};

export default Listing;
