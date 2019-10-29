import React from 'react';
import Song from './Song';

const SongList = ({songs}) => {
  const songNodes = songs.map((song, index) => {
    return (
      <Song
      key={ song.id.attributes['im:id'] }
      value={ index }
      artist={ song['im:artist'].label }>
      { song['im:name'].label }
      </Song>
    );
  });

  return (
    <main>
      <h1>UK Top 20 Songs</h1>
      <ol>
        { songNodes }
      </ol>
    </main>
  );
}

export default SongList;
