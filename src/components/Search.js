import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from 'react-date-range'
import  PeopleIcon  from '@mui/icons-material/People';
import { Button } from '@mui/material';
import './Search.css'

const Search = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endtDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endtDate: endtDate,
        key : "selection"
    }

    const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.setStartDate);
        setEndDate(ranges.selection.endtDate)
    }
  return (
    <div className='search'>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        
        Number of guests <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type='number' />
      <Button>Search AirBnB</Button>
    </div>
  )
}

export default Search
