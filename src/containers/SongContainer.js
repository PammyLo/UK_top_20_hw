import React, { Component } from 'react';
import SongList from '../components/SongList'

class SongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_20_chart: [],
      currentSong: null
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(chart => this.setState({ top_20_chart: chart }))
      .catch(err => console.error(err));
  }


  render() {
    return(
      <SongList />
    );
  }
}

export default SongContainer;
