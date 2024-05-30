import React from 'react';

function kartochkaTrek({ song }) {
  return (
    <div className="song-card">
      <img src={song.album.images[0].url} alt={`${song.name} cover`} />
      {song.preview_url && (
        <audio controls src={song.preview_url}></audio>
      )}
      <a href={song.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="song-link">
        <h3>{song.name}</h3>
      </a>
      <p>{song.artists[0].name}</p>
    </div>
  );
}

export default kartochkaTrek;