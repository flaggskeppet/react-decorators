import React, {Component} from 'react';
import logRender from './decorators/logRender';

@logRender
export default class ComponentWithLogRender extends Component {
    render() {
        return(
            <div>ComponentWithLogRender</div>
        );
    }
}