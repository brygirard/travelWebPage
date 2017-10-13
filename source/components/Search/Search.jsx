import React, { Component } from 'react'
import { Button, Icon, Input, Item, Image, Card, Grid, Menu, Checkbox, Dropdown, List, Rating} from 'semantic-ui-react'
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
    <List animated divided relaxed = 'very' celled size = "tiny" key = {props.key} onItemClick = {props.onClick}>
    	<List.Item>
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
	let activeItem = "home";
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
      numberResults: 0,
      redirect: false,
      viewList: true,
      genres : [],
      currentIDs : []
    };
    this.basesearchurl = "https://api.themoviedb.org/3/search/movie?&api_key=c0522a712dcd61c2c833d1ecb940e06c&language=en-US&query="
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
  	this.setState({ redirect: true})
  	console.log("going to deails")
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
  genresMatch(movieGenresId, idArray){
  	 for(let i = 0; i < movieGenresId.length; i++){
  	 	 if(!idArray.includes(movieGenresId)){
  	 	 	return false;
  	 	 }
  	 }
     return true;
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
    )
  }

  render() {
  
  	 if (this.state.redirect) {
       return <Redirect push to="/Details" />;
     }
    //const winner = calculateWinner(this.state.squares);
    return (
      <div>  
         {this.renderNavbar()}
      <div> 
          {this.renderResult()}
      </div>
      </div>
    );
  }
}


/*
class SearchPage extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <ResultsList/>
        </div>
      </div>
    );
  }
}


// ========================================

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
*/



/*
class Search extends Component {

		constructor(props){
		super(props);
		this.state = {
			value: '', //where we will get input movie
			movies: {},
			sort: React.PropTypes.oneOf(['Rating','Title']),
		};
		//this.basesearchurl = "https://api.themoviedb.org/3/search/multi?api_key=c0522a712dcd61c2c833d1ecb940e06c&query=";
		//this.inputChangeHandler = this.inputChangeHandler.bind(this);
		//this.clickHandler = this.clickHandler.bind(this);
		//this.getMovies = this.getMovies.bind(this)
	}





    render() {
        return(

            <div className="Search">
           <Menu>
              <Menu.Item
               name='By Ranking'
               />
               <Menu.Item
               name='By Title'
                />
               <Menu.Item
                name='By Something'
               />
                <Menu.Menu position='right'>
                   <div className='ui right aligned category search item'>
                   <div className='ui transparent icon input'>


                   <Input
                     placeholder="Type here to search..."
                     type = "text"
                     size = "big"
                     //value={this.state.value}
                     //results = {this.state.movies}
                     //onSearchChange={evt => this.inputChangeHandler(evt)}
                    />

                     <i className='search link icon' />
                     </div>
                    <div className='results' />
                  </div>
                </Menu.Menu>
        </Menu>

               <h1>{Home.state.basesearchurl}</h1>
               
        </div>

        )
    }
}
*/

export default Search