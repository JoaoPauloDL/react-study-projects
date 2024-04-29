import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SearchAutocomplete = () => {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState('')
 
  const fetchListOfUsers = async () => {
    try {
        setLoading(true)
       const response = await fetch('https://dummyjson.com/users');
       const data = await response.json();
       
       if(data && data.users && data.users.length){
        // Usando map para extrair os primeiros nomes dos usuários
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null)
       }
    
       

    }catch(error) {
        setLoading(false)
        console.log(error);
        setError(error)
    }
  }



  useEffect(() => {
    fetchListOfUsers();
  }, [])

  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search-users"
        placeholder="Search Users here..."
      />
    </div>
  );
};

export default SearchAutocomplete;
