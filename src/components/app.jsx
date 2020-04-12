import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search-bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "v6aOjy0Qo1fIA"
    }
  }

  search = (query) => {
    giphy('RFsKwqGmBBAj8rbPYmLLQ2t64eHBbycD').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
        this.setState({gifs: result.data});
    });
  }

  selectGif = (id) => {
    this.setState({selectedGifId: id});
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
      </div>
    )
  }
}

export default App

