import React, { Component } from 'react';
import Gif from './gif.jsx'

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
    });
  }
}

export default GifList
