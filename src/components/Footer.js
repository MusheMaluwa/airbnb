import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    
    <div className='footer'>
      <div className='footer_one'>
        <div  className='footer_column'>  
          <h3>Support</h3>
          <h4>Help Center</h4>
          <h4>Safety Information</h4>
          <h4>Cancellation options</h4>
          <h4>Our COVID-19 Response</h4>
          <h4>Supporting people with disabilities</h4>
          <h4>Report a neighborhoood concern</h4>
        </div>

        <div  className='footer_column'>  
          <h3>Community</h3>
          <h4>Airbnb.org: disaster relief housing</h4>
          <h4>Support: Afghan refugees</h4>
          <h4>Celebrating diversity & belonging</h4>
          <h4>Combating discriminatino</h4>
        </div>

        <div  className='footer_column'>  
          <h3>Hosting</h3>
          <h4>Try hosting</h4>
          <h4>AirCover: protection for Hosts</h4>
          <h4>Explore hosting resources</h4>
          <h4>Visit our community forum</h4>
          <h4>How to host responsibly</h4>
        </div>

        <div  className='footer_column'>  
          <h3>About</h3>
          <h4>Newsroom</h4>
          <h4>Learn about new features</h4>
          <h4>Letter from our founders</h4>
          <h4>Careers</h4>
          <h4>Investors</h4>
          <h4>Airbnb Luxe</h4>
        </div>

      </div>
      <div className='footer_two'>
        <p>&copy; 2022 AirBnB clone! No rights reserved - this is a demo </p>
        <p>Privacy . Terms . Sitemap . Company Details</p>
      </div>
        
    </div>
  )
}

export default Footer
