
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import axios from "axios";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.location = {
      longitude: null,
      latitude: null,
      city: null,
      state: null
    };
  };

  componentDidMount() {
    // Get location and set variables
      Geolocation.getCurrentPosition(
          (position) => {
            // Sets longitude/latitude
            this.longitude = position.coords.longitude;
            this.latidude = position.coords.latitude;
            console.log(this.longitude, this.latidude);
            // build url for api call
            var options = {
              method: 'GET',
              url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
              params: {location: `${this.latidude},${this.longitude}`, language: 'en'},
              headers: {
                'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com',
                // put in .env and call
                'X-RapidAPI-Key': `${process.env.REACT_APP_rapidAPI_Key}`
              }
            };
            // make api call
            axios.request(options)
            .then((res) => {
              // set city and state. Use this when building api for restraunts.
              this.city = res.data.results[0].locality;
              this.state = res.data.results[0].region;
              // Test
              console.log(process.env);
              alert(`Your location is ${this.city}, ${this.state}`);
              });
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }

  render(){
    return(
    <div className="outer-container">
      <Navbar/>
      <h1 id='AddTitle'>Add a restaurant...</h1>
      <Form/>
    </div>
    )
  }
}
 export default Main