import React, { Component } from 'react'
import { Button, Input, Search } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Home.scss'


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: '', //where we will get input movie
			moviesFull: {},
			moviesResultsList: []
		};
		this.basesearchurl = "https://api.themoviedb.org/3/search/multi?api_key=c0522a712dcd61c2c833d1ecb940e06c&query=";
		this.inputChangeHandler = this.inputChangeHandler.bind(this);
		this.clickHandler = this.clickHandler.bind(this);
		this.getMovies = this.getMovies.bind(this)
		this.createResults = this.createResults.bind(this)
	}


    createResults(){

  

    }

    getMovies(){ //gets movies of currect url in the search bar
	   let url = this.basesearchurl + this.state.value//this.state.search;
        console.log(url);
        axios.get(url)
        .then((response) => {
         console.log(response.data);
         this.setState({
         	moviesFull: response.data
          });

        for(let i = 0; i < this.state.moviesFull.results.length; i++){
    	let movieResult = {
    		"title": this.state.moviesFull.results[i].title,
    		"description": this.state.moviesFull.results[i].overview,
    		"image": "https://image.tmdb.org/t/p/w500" + this.state.moviesFull.results[i].poster_path,
    		"price": this.state.moviesFull.results[i].vote_average,
 	
    	}
    	console.log("RESULT");
    	console.log(movieResult);
    	this.state.moviesResultsList.push(movieResult);
        }





        })
        .catch((error) => {
           console.log(error);
       })
    

	}

	inputChangeHandler(evt){
       this.setState({value: evt.target.value});
       if(this.state.value != ''){
       	   this.getMovies();
       }
 
	}

	clickHandler(){
        window.location.href = "/search";
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
                <h1>Movie Search</h1>
                 <Search
                   placeholder="Type here to search..."
                   type = "text"
                   size = "big"
                   value= {this.state.value}
                   results = {this.state.moviesResultsList}
                   onSearchChange={evt => this.inputChangeHandler(evt)}
                 />
                <Button onClick = {this.clickHandler}>
                   SEARCH
                </Button>
                <ComponentExample/>
            </div>

        )
    }
}

export default Home
