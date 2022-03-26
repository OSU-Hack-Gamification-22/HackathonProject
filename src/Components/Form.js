
import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from './Searchbar';
let search = 'Lookup a restaurant..';
// API INSTRUCTIONS
// Limited number of request... Find better api.
// If using, update data in search bar file to match get request
// var options = {
//   method: 'GET',
//   url: 'https://restaurants-near-me-usa.p.rapidapi.com/restaurants/location/state/IL/city/Chicago/0',
//   headers: {
//     'X-RapidAPI-Host': 'restaurants-near-me-usa.p.rapidapi.com',
//     'X-RapidAPI-Key': '9e50179b74mshfc91874f9e89f1dp15b1b2jsn438149918a3b'
//   }
// };

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
  });

  return (
<>
<fieldset>
<form id="addRestaurant" action="" method="POST">
  Date Visited:
  <input id='visit_date' type='date' name='TBD' required></input>
  Rating:
  <input id='visit_rating' name='TBD' type='number' min='1' max='10' required></input>
  <p>Data in this will be replaced with restaurant api data</p>
  <SearchBar placeholder={search} data={restaurantData}/>
  <input type="submit" value="Submit"></input>   
</form>
</fieldset>
</>
  )
}

export default Form
