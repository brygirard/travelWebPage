import React, { Component } from 'react'
import { Button, Icon, Input, Item, Image, Card, Grid, Menu, Checkbox, Dropdown, List, Rating, Modal, Header} from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import styles from './Search.scss'


function Result(props) { 
  if(props.movie === undefined || props.empty){
  	return(<div> Nothing Found </div>);
  }

  let source = 'http://image.tmdb.org/t/p/w300/' + props.movie.poster_path; //TODO: set to ? if no poster if found
  if(!props.viewList){
  return (   //need to change so onClick goes to details
  	   <Grid.Column className = "posters" key = {props.key} onClick = {props.onClick}>
          <Image  alt = 'No Image Found' shape='rounded' src={source} />
       </Grid.Column>
  );
  }else{
  return (   //need to change so onClick goes to details
    <List animated divided relaxed = 'very' celled size = "tiny" key = {props.key} >
    	<List.Item onClick = {props.onClick}>
     	<List.Content>
        	<Image size = "tiny" src= {source} floated = "left"/>
      	</List.Content>
      	<List.Content verticalAlign = 'top'>
        	<List.Header className = "title" as = 'h2'>{props.movie.title}</List.Header>
      	</List.Content>
      	<List.Content verticalAlign = 'middle'>
        	<List.Description>{props.movie.overview}</List.Description>
      	</List.Content>
      	<List.Content className = "rate" verticalAlign = 'bottom' >
        	 <Rating defaultRating={props.movie.vote_average / 2} maxRating={5} disabled />
      	</List.Content>
    	</List.Item>
	</List>
  );
  }
}

function Navbar(props) {
  return ( 
    
       <Menu>
       <Menu.Item>
           <Checkbox slider label = "Gallery View" onChange = {props.switchView}/> 
       </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input className="topInput" value = {props.value} onClick={props.onClick} placeholder = "Seach for Movies...." onChange = {props.onChange} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

  );
}


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      searchResults: undefined,
      redirect: false,
      viewList: true,
      showing: false,
      currentMovie: 0,
      genres : [],
      currentIDs : [],
      movieData: undefined

    };
    this.basesearchurl = "https://api.themoviedb.org/3/search/movie?&api_key=c0522a712dcd61c2c833d1ecb940e06c&language=en-US&query="
    this.closeModal = this.closeModal.bind(this)
  }
   componentDidMount() {
     let genres = undefined;
  	 let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=c0522a712dcd61c2c833d1ecb940e06c&language=en-US'
        console.log("Getting " + url);
        axios.get(url)
        .then((response) => {
         console.log(response.data);
          let options = [];
          let ids = [];
          for(let i = 0; i < response.data.genres.length; i++){
          	console.log("adding " + response.data.genres[i].name + " with id "  + response.data.genres[i].id);
       		 options.push({
       			key: response.data.genres[i].name,
       			text: response.data.genres[i].name,
       			value: response.data.genres[i].name
       		});
       		ids.push(response.data.genres[i].id)
       	} 
        console.log(options);
          this.setState({
         	genres: options,
         	currentIDs: ids
          });
        })
        .catch((error) => {
           console.log(error);
       })
  }

  gotoDetails(i){

  	this.setState({ 
  		currentMovie: i,
  		showing: true
  	})
  	let movie = this.state.searchResults.results[this.state.currentMovie]


  	  	let url = "https://api.themoviedb.org/3/movie/" + movie.id + "?api_key=c0522a712dcd61c2c833d1ecb940e06c&language=en-US";
        console.log("Getting " + url);
        axios.get(url)
        .then((response) => {
         console.log(response.data);
          this.setState({
         	movieData: response.data,
          });
        })
        .catch((error) => {
           console.log(error);
       })


  }

   switchView(i) {  //nothing done here
     console.log("Switching!")
     this.setState({
     	viewList: !this.state.viewList
     })
     console.log(this.state.viewList)
   }

 handleInput(evt){  //nothing done here
      this.setState({
        search: evt.target.value
      });
        let url = this.basesearchurl + evt.target.value;
        console.log("Getting " + url);
        axios.get(url)
        .then((response) => {
         console.log(response.data);
         this.setState({
          searchResults: response.data
          });
        })
        .catch((error) => {
           console.log(error);
       })
  }

  genresMatch(movieIds, idArray){
  	return true;
  	console.log(idArray);
  	console.log(movieIds);
  	 for(let i = 0; i < movieId.length; i++){
  	 	return true;
  	 }
     return false;
  }

  closeModal(){
  	 this.setState({
          showing: false
     });
  }

 renderResult() {
    if(this.state.searchResults != undefined && this.state.search != ''){
      let allResults = [];
      for(let i = 0; i < this.state.searchResults.results.length; i++){  //to make all results
      	if( this.genresMatch(this.state.searchResults.results[i].genre_ids, this.state.currentIDs) )
           allResults.push(
           <Result
            movie= {this.state.searchResults.results[i]}
            onClick={() => this.gotoDetails(i)}
            key = {i}
            empty = {this.state.search === ''}
            viewList = {this.state.viewList}
           />
        );
  }

       if(!this.state.viewList){
          console.log(this.state.genres);
          console.log(this.state.currentIDs);
         return (
         	<div>
              <Dropdown className ="drop" placeholder='Select Genres' fluid multiple selection options={this.state.genres} />
              <Grid className = "resultsGrid" columns = 'five'> {allResults} </Grid>
           </div>
         )
        }else{
         return (
           <Grid columns = 'five'> {allResults} </Grid> //add options for list (acending/ decending)
         )
     }
   }
    return (
      <div className = "noResults">
         <h3> No Results! </h3>
      </div>
    )
  }


   renderNavbar() {
     return(

      <Navbar
        onChange={evt => this.handleInput(evt)}
        value = {this.state.search}
        switchView = {() => this.switchView()}
      />
    );
  }

   renderModal(i) {
     return(
      <myModal
        movie ={this.state.searchReults}
        currentMovie = {i}
        open ={this.state.showing}
        onClose = {() => this.closeModal()}
      />
    )
   }


  render() {
    //const winner = calculateWinner(this.state.squares);

    if(this.state.showing){
    	let movie = this.state.movieData;
    	let source = 'http://image.tmdb.org/t/p/w300/' + movie.poster_path;
    	console.log("Rendering Details")
    	return(
    	 <div>  
    	      <Modal closeIcon open = "true"  onClose = {this.closeModal}>
                <Modal.Header>{movie.title}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={source} />
               <Modal.Description>
                     <p>{movie.overview}</p>
                     <p>Reveenue: {movie.revenue}</p>
                     <p>Budget: {movie.budget}</p>
                     <p>Original Languge: {movie.original_language}</p>
                     <p>Rating: {movie.vote_average}</p>
                 </Modal.Description>
             </Modal.Content>
           </Modal>
    	</div>  
    	)
    }
    return (
      <div>  
          {this.renderNavbar()}
      <div> 
          
          {this.renderResult()}
      </div>
      </div>
     )
   }
 }

export default Search