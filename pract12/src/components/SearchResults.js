import React from 'react';
import SongCard from './SongCard';

function SearchResults({ results }) {
  return (
    <div className="search-results">
      {results.length > 0 ? (
        results.map((song) => <SongCard key={song.id} song={song} />)
      ) : (
        <p className='p1'>No results found</p>
      )}
    </div>
  );
}

export default SearchResults;