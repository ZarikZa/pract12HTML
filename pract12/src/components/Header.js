import React, { useState } from 'react';
import { getToken, poiskTrek } from '../spotify';

function Header({ setResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const poisk = async () => {
    if (searchTerm.trim() === '') return;

    const token = await getToken();
    const results = await poiskTrek(searchTerm, token);
    setResults(results);
  };


  return (
    <header className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="flex-grow-1 d-flex justify-content-center mx-3">
            <input
              className="input-search"
              maxLength={800}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              placeholder="What do you want to play?"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn-search" onClick={poisk}>
              Поиск
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;