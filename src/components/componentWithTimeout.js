import React, {Component} from 'react';
import timeout from './decorators/timeout'

export default class ComponentWithTimeout extends Component {

    @timeout(10000) // Delay this method 10 seconds
    demoMethod() {
      console.log("this is delayed")
    }
    render() {
        this.demoMethod();
        return(
            <div>ComponentWithTimeout</div>
        );
    }
}