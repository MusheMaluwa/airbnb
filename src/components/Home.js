import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import Banner from './Banner'
import './Home.css'
import Card from './Card'
import {listListing} from '../action/ListingAction'

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector (state => state.listingList)
  const {loading, error, listings} = listingList;

  useEffect(()=>{
    dispatch(listListing())
  }, [dispatch])

  return (
    <div className='home'>
      <Banner />

      {loading? (
        <h2>Loading...</h2>
        ) : error? (
        <h3>{error}</h3>
        ) :  ( 
          <div className='home_section'>
            {listings.map((listing) => (
                 <Card 
                    src={listing.img}
                    title={listing.title}
                    description={listing.description}
                    price={listing.price}
                  />
            ))}        
          </div>
        )}
      <div className='home_section'>
        <Card 
          src="https://tinybeans.com/wp-content/uploads/2024/04/airbnb-arcade-house.jpeg?w=640"
          title="The Arcade House | Bloomington, IL"
          description="game room featuring all the classics, a tiki-themed backyard complete with hot tub, and cinema-themed bedrooms"
          price="$499/nigth"
        />
        <Card 
          src="https://tinybeans.com/wp-content/uploads/2023/02/Airbnb-Private-Game-Room.webp?w=640"
          title="The Playhouse Retreat | Scottsdale, AZ"
          description="Unique activities we can do together, led by a world of hosts."
          price="$476/nigth"
        />
        <Card 
          src="https://tinybeans.com/wp-content/uploads/2023/02/Airbnb-Private-Game-Room.webp?w=640"
          title="The Playhouse Retreat | Scottsdale, AZ"
          description="Unique activities we can do together, led by a world of hosts."
          price="$476/nigth"
        />
        <Card 
          src="https://tinybeans.com/wp-content/uploads/2023/10/AZ-playhouse-house-e1712273294319.jpeg?w=640"
          title="The Playhouse Retreat | Scottsdale, AZ"
          description="An 8-person spa, resort-style lounge chairs, a kids' splash pad, playhouse town, and commercial-grade playground"
          price="$899/nigth"
        />
      </div>
      <div className='home_section_two'>
        <Card 
          src="https://www.checkers.co.za/medias/10521786EA-checkers515Wx515H.webp?context=bWFzdGVyfGltYWdlc3w1NDY1NHxpbWFnZS93ZWJwfGltYWdlcy9oZWIvaDhlLzk4NzQxMjY2MDIyNzAud2VicHwwNTA3MmFkNjMyZjg2NmVkMjcwM2UzYzhiNGYzYjMxMjY2NGY2MzYxYmZiN2NiNDBhMzhmNGFlZTQ0YzQxN2U5"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          price="$569/night"
        />
        <Card 
          src="https://www.checkers.co.za/medias/10521786EA-checkers515Wx515H.webp?context=bWFzdGVyfGltYWdlc3w1NDY1NHxpbWFnZS93ZWJwfGltYWdlcy9oZWIvaDhlLzk4NzQxMjY2MDIyNzAud2VicHwwNTA3MmFkNjMyZjg2NmVkMjcwM2UzYzhiNGYzYjMxMjY2NGY2MzYxYmZiN2NiNDBhMzhmNGFlZTQ0YzQxN2U5"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          price="$469/night"
        />
      </div>
    </div>
  )
}

export default Home
