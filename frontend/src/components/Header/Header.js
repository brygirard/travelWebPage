import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import './Header.css';

const Logo = () => (
    <div>
        Colloborative Playlist
    </div>
)

class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item header><Logo/></Menu.Item>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} href="/" />
        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick} href="/browse"/>
        <Menu.Item name='player' active={activeItem === 'player'} onClick={this.handleItemClick} href="/player" />
        <Menu.Menu position='right'>
            <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                    <input className='prompt' type='text' placeholder='Enter Room Code...'/>
                    <i className='search link icon' />
                 </div>
                <div className='results' />
            </div>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Header;
