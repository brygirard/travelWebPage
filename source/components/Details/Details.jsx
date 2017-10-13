import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Details.scss'

class Details extends Component {
  constructor() {
    super();
    this.state = {
      searchResults: undefined,
      genres : [],
      currentIDs : []
    };
    //this.basesearchurl = "https://api.themoviedb.org/3/search/movie?&api_key=c0522a712dcd61c2c833d1ecb940e06c&language=en-US&query="
  }
    render() {
    	console.log("Details!")
    	console.log(this.state.searchReults)
        return(
            <div className="Details">
                <h1>Welce to the Details!</h1>
            </div>
        )
    }
}

export default Details