import React, {Component} from 'react';
import setTitleSimplified from './decorators/setTitleSimplified';

@setTitleSimplified('My title')
export default class ComponentWithSetTitleSimplified extends Component {
    render() {
        return(
            <div>ComponentWithSetTitleSimplified</div>
        );
    }
}