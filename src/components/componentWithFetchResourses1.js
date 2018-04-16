import React, {Component} from 'react';
import fetchResources from './decorators/fetchResources';
var axios = require('axios');


@fetchResources(({ props }) => ({
    url: 'something'
  }))
export default class ComponentWithFetchResourses1 extends Component {
    render() {
        return(
            <div>ComponentWithFetchResources 1: {this.props.url}</div>
        );
    }
}