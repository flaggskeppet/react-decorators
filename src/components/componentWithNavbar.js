import React, {Component} from 'react';
import navbar from './decorators/navbar';

@navbar()
export default class ComponentWithNavbar extends Component {
    render() {
        return(
            <div>Hello World {this.props.url}</div>
        );
    }
}