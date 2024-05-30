import React, { useState } from "react";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <Header setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;