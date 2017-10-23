import React, { Component } from 'react'
import { Button, Input, Search } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Home.scss'


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {

		};

	}

    render() {
     var ComponentExample = React.createClass({
        render: function() {
         return (
          <niner>This is a niner element</niner>
        )
        }
      });



        return(
            <div className="Home">
                <h1>Travel Database - CS 411</h1>
                 <Search
                   placeholder="Type here to search..."
                   type = "text"
                   size = "big"
                 />
                <Button onClick = {this.clickHandler}>
                   SEARCH
                </Button>
            </div>

        )
    }
}

export default Home
