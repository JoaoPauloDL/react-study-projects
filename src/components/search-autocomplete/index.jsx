import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Suggestions from "./suggestions";

const SearchAutocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteresUsers] = useState([]);

  const handleChange = (event) => {
    // Obtém o valor digitado no campo de input e converte para minúsculas
    const query = event.target.value.toLowerCase();

    // Atualiza o estado 'searchParam' com o valor digitado
    setSearchParam(query);
    if (query.length > 1) {
      // Filtra os usuários com base na entrada do usuário
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteresUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleClick = (event) =>{
    setShowDropdown(false)
    setSearchParam(event.target.innerText);
    setFilteresUsers([])
  }

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        // Usando map para extrair os primeiros nomes dos usuários
        setUsers(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  return (
    <div style={{ height: '50vh' }}>
      {loading ? (
        <h1>Loading Data! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          type="text"
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}

      {showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
  );
};

export default SearchAutocomplete;
