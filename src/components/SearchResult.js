import React from 'react'
import  FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder'
import './SearchResult.css'

const SearchResult = ({img, location, title, description, star, price, total}) => {
  return (
    <div className='searchResult'>
        <img src={img} 
             alt=''
        />
        <FavoriteBorderIcon className='searchResult_heart' />
        <div  className='searchResult_info' >
            <div  className='searchResult_infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>====</p>
                <p>{description}</p>
            </div>
            <div className='searchResult_infoBottom'>
                <div className='searchResult_stars'>
                    <p>
                        <strong>{star}</strong>
                    </p>
                </div>
                <div className='searchResult_price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default SearchResult
