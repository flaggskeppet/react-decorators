import React, {Component} from 'react';
import fetchResources from './decorators/fetchResources';
var axios = require('axios');


@fetchResources(({props}) => ({
        data: axios.get(`https://api.github.com/users/flaggskeppet`)
     }
))
export default class ComponentWithFetchResourses2 extends Component {
    render() {
        return(
            <div>ComponentWithFetchResources 2: {this.props.data.data.url}</div>
        );
    }
}