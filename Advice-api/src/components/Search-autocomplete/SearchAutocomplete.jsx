import React, { useState } from 'react'
import Suggession from './suggession';

function searchAutocomplete() {

    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParams] = useState("");
    const [showDropDown, setShowDropDown] = useState(false)
    const [filteredUsers, setFilteredUsers] = useState([])
     
    function handleChange(e) {
        const query = e.target.value.toLowerCase();
        setSearchParams(query);
        if(query.length > 1) {
            const filteredData = 
            users && users.length
            ? users.filter((item) => item.toLowerCase().indexOf(query) > - 1)
            : [];
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }

    }

    function handleClick(e) {
        setShowDropDown(false);
        setSearchParams(e.target.innerText);
        setFilteredUsers([]);
    }

    async function fetchListOfUsers() {
        try {
          setLoading(true);
          const response = await fetch("https://dummyjson.com/users");
          const data = await response.json();
    
          if (data && data.users && data.users.length) {
            setUsers(data.users.map((userItem) => userItem.firstName));
            setLoading(false);
            setError(null);
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
          setError(error);
        }
      }
    
      useEffect(() => {
        fetchListOfUsers();
      }, []);

  return (
    <div className='search-autocomplete-container'>
      {loading ? (
        <h1>Loading Data! PLease wait</h1>
      ): (
        <input
        value={searchParam}
        name='search-users'
        placeholder='Search Users here...'
        onChange={handleChange}
        />
      )}

      {showDropDown && <Suggession handleClick={handleClick} data={filteredUsers} />}
    </div>
  )
}

export default searchAutocomplete
