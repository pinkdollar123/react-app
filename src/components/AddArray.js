import { useState } from 'react';

let nextId = 0;

export default function AddArray() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />

      {/* Button for Adding */}
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);

        // Put old items at the end
        // setArtists([
        //     { id: nextId++, name: name },
        //     ...artists 
        //   ]);

      }}>Add</button>

      {/* Display for mapping the array of artist name */}
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
