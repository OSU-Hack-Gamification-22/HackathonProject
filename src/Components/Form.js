import '../styles/form.css'
import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from './Searchbar';
let search = 'Lookup a restaurant..';

// sample data to use to make sure search function is working.
var options = {
  method: 'GET',
   url: 'https://jsonplaceholder.typicode.com/todos'
}

const Form = () => {

  const [restaurantData, setData] = useState(null);

  // Get call to get restraurant data
  const getRestraurants = async () => { 
    try {
      axios.request(options)
      .then((res) => {
          console.log(res.data);
          // Set response to variable
          setData(res.data);
        });
    } catch (error) {
      console.log(error)
      };
  };
  
  // Run get call on load
  useEffect(() =>{
    getRestraurants();
    console.log('This');
  }, []);

  return (
<>

<form id="addRestaurant" action="" method="POST">
  Date Visited:
  <input id='visit_date' type='date' name='TBD' required></input>
  Rating:
  <input id='visit_rating' name='TBD' type='number' min='1' max='10' required></input>
  <p>Data in this will be replaced with restaurant api data</p>
  <SearchBar placeholder={search} data={restaurantData}/>
  <input type="submit" value="Submit" className='submit-button'></input>   
</form>

</>
  )
}

export default Form
