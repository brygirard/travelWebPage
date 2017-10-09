import React, { Component } from 'react'
import { Button, Icon, Grid, Input, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Search.scss'

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

               <h1>Welcome to the Search Results Page!</h1>
               
        </div>

        )
    }
}

export default Search