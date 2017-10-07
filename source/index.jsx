import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

// Include your new Components here
import Home from './components/Home/Home.jsx';
import Search from './components/Search/Search.jsx';
import Details from './components/Details/Details.jsx';

// Include any new stylesheets here
// Note that components' stylesheets should NOT be included here.
// They should be 'require'd in their component class file.
require('./styles/main.scss');

render(
   <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Search">Search</Link></li>
          <li><Link to="/Details">Details</Link></li>
        </ul>

      <Route exact path="/" component={Home}/>
      <Route path="/Search" component={Search}/>
      <Route path="/Details" component={Details}/>
     </div>
   </Router>,
    // Define your router and replace <Home /> with it!\
    document.getElementById('app')
);
