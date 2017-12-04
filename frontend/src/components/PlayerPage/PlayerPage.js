import React, { Component } from 'react';
import { Embed } from 'semantic-ui-react'

import './PlayerPage.css';

const EmbedExampleIframe = () => (
  <Embed
    active
    url='https://open.spotify.com/embed?uri=spotify:track:5JunxkcjfCYcY7xJ29tLai'
  />
)

class PlayerPage extends Component {
  render() {
    return (
      <EmbedExampleIframe/>
    );
  }
}

export default PlayerPage;
