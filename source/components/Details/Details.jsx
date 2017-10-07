import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './Details.scss'

class Details extends Component {

    render() {
        return(
            <div className="Details">
                <h1>Welcome to the Details!</h1>
            </div>
        )
    }
}

export default Details