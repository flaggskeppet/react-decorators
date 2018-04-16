import React, {Component} from "react";

const setTitleSimplified = (title) => (WrappedComponent) => {
    return class extends React.Component {
       componentDidMount() {
           document.title = title
       }
       render() {
          return <WrappedComponent {...this.props} />
       }
    }
 }

export default setTitleSimplified

