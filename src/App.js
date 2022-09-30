import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState([]);

  //runs for the first time always
  useEffect(() => {
    if (searchValue) {
      doFetch(searchValue);
    }
  }, [searchValue]); //not set, value itself

  async function doFetch(searchValue) {
    const resp = await fetch(
      `https://api.github.com/search/users?q=${searchValue}&per_page=5`
    );
    if (!resp.ok) throw new Error(resp.statusText);
    let data = await resp.json();
    setUser(data.items);
    console.log(data);
  }

  function handleSubmit(ev) {
    ev.preventDefault(); //important
    console.log(ev);
    setSearchValue(ev.target[0].value); //grabbing input[0]. NOT button[1] (from below in form)
  }

  return (
    <div className="App">
      <Header />
      <form className="inputForm" onSubmit={handleSubmit}>
        <input className="searchBox" type="text" />
        <button className="custom-btn btn-1" type="submit">
          Search
        </button>
      </form>
      <Main user={user} />
    </div>
  );
}

export default App;
