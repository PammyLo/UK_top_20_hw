import React from 'react';

const Song = ({children, artist, index}) => {
  return (
    <li className="song">
      <h4>{ children }</h4>
      <p>{ artist }</p>

    </li>
  )
}

export default Song;
