import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/Header/Header';
import ProfilePage from './components/ProfilePage/ProfilePage';
import PlayerPage from './components/PlayerPage/PlayerPage';
import BrowsePage from './components/BrowsePage/BrowsePage';
import LoginPage from './components/LoginPage/LoginPage';


import {BrowserRouter as Router, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return(
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={ProfilePage}></Route>
            <Route path="/browse" component={BrowsePage}></Route>
            <Route path="/player" component={PlayerPage}></Route>
            <Route path="/Login" component={LoginPage}></Route>
        </div>
    </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
