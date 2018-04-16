import React, {Component} from "react";

export default function navBar() {
    return function (Child) {
        return class extends Component {
            constructor(props) {
                super(props);
            }
            
            render() {
                return (
                    <div>
                        <div>Hello this is the navigation bar</div>
                        <Child />
                    </div>
                )
            }
        }
    }
}