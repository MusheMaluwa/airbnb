import React from 'react'
import { Button } from '@mui/material'
import  './AdminAddHotel.css'
import SearchResult from './SearchResult'

const AdminAddHotel = () => {
  return (
    <div className='searchPage'>
      <div className='searchPage_info'>
        <Button variant='outlined'>View Reservations</Button>
        <Button variant='outlined'>View Listngs</Button>
        <Button variant='outlined'>Create Listng</Button>
        <h1>Stays nearby</h1>
      </div>
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/d3538d27-138c-4a4c-9b0e-884fed927969.jpeg?im_w=720"
        location='Paris, France'
        title='exclusive garden terrace of Musée d’Orsay—mere meters'
        description='2 guests1 bedroom1 bed1 bath'
        star={5.0}
        price='$450 / night'
        total='$1770 total'
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/4ac2fa8a-7fe5-47e5-beb3-3df2823f2734.jpg"
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='2 guests1 bedroom1 bed1 bath'
        star={4.73}
        price='$30 / night'
        total='$117 total'
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/hosting/Hosting-1070164950500009998/original/61b96fc3-98a5-403a-9232-c16ed57f5276.jpeg?im_w=720"
        location='Sandton, South Africa'
        title='Entire place'
        description='7 guests3 bedrooms3 beds4 baths'
        star={5.00}
        price='$301 / night'
        total='$2000 total'
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/prohost-api/Hosting-654426080206240807/original/587f79e8-bf48-4fa5-92f4-0e1d03b84639.jpeg?im_w=960"
        location='Thohoyandou, Limpopo, South Africa'
        title='Dam view Rooms'
        description='2 bedsDedicated bathroom'
        star={4.00}
        price='$30 / night'
        total='$117 total'
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/4ac2fa8a-7fe5-47e5-beb3-3df2823f2734.jpg"
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='2 guests1 bedroom1 bed1 bath'
        star={4.73}
        price='$30 / night'
        total='$117 total'
      />
      <SearchResult 
        img="https://a0.muscache.com/im/pictures/4ac2fa8a-7fe5-47e5-beb3-3df2823f2734.jpg"
        location='Private room in center of London'
        title='Stay at this spacious Edwardian House'
        description='2 guests1 bedroom1 bed1 bath'
        star={4.73}
        price='$30 / night'
        total='$117 total'
        
      />
    </div>
  )
}

export default AdminAddHotel
