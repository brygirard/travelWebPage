import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Home.scss'


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: '', //where we will get input movie
			movies: {}
		};
		this.basesearchurl = "https://api.themoviedb.org/3/search/multi?api_key=c0522a712dcd61c2c833d1ecb940e06c&query=";
		this.inputChangeHandler = this.inputChangeHandler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
	}

	inputChangeHandler(){


	}

	clickHandler(){

		let url = this.basesearchurl + "Ace"//this.state.search;
        console.log(url);
        axios.get(url)
        .then((response) => {
         console.log(response.data);
         this.setState({
         	movies: response.data
          })
        })
        .catch((error) => {
           console.log(error);
       })
	}

    render() {
        return(
            <div className="Home">
                <h1>Movie Search</h1>
                 <Input
                   placeholder="Type here to search..."
                   value={this.state.value}
                   onChangeText={(value) => this.setState({value})}
                 />
                <Button onClick = {this.clickHandler}>
                   SEARCH
                </Button>
            </div>

        )
    }
}

export default Home
