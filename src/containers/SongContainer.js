import React, { Component } from 'react';
import SongList from '../components/SongList'

class SongContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(chart => this.setState({ songs: chart.feed.entry }))
      .catch(err => console.error(err));
  }

  render() {
    return(
      // <p>this is container</p>
      <SongList songs={ this.state.songs } />
    );
  }
}

export default SongContainer;
