import React, {Component} from 'react';
import setTitle from './decorators/setTitle';

@setTitle(()=>'My title')
export default class ComponentWithSetTitle extends Component {
    render() {
        return(
            <div>ComponentWithSetTitle</div>
        );
    }
}