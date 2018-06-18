import React, {Component} from "react";

export default function navBar() {
    return function (WrappedComponent) {
        return class extends Component {
            render() {
                return (
                    <div>
                        <div>Hello this is the navigation bar</div>
                        <WrappedComponent />
                    </div>
                )
            }
        }
    }
}