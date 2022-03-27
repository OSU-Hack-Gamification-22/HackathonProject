// import '../styles/searchBar.css';
import React, { useState, } from 'react';

const SearchBar = ({placeholder, data}) => {

  // Set to array to empty. Stores results.
  const [filterData, setFilterData ] = useState([]);

  // Filter
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    });
    // Check if user enters search values
    if (searchWord === '') {
      setFilterData([])
    } else {
      setFilterData(newFilter);
    }
  };
  
  return (
    <div className="search">
      <div className="searchInputs">
        <input type='text' placeholder={placeholder} onChange={handleFilter}/>
        <div className="Icon"></div>
      </div>
      {filterData.length !== 0 && (
        <div className="dataResult">

          {/* Filters data for restraunt search*/}
          {filterData.map((value, key) => {
            return (
              <a href={'google.com'} target="_blank" rel="noreferrer">
                {" "}
              <p>{value.title}</p>
              </a>
              
            );
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar