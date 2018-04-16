import React, {Component} from "react";
var axios = require('axios');

const fetchResources = (mapResourcesToProps) => (ComposedComponent) => {
    return class extends React.Component {
        static displayName = `Fetch(${ComposedComponent.displayName || ComposedComponent.name})`
        state = {}

        componentDidMount() {
            const mapResult = mapResourcesToProps(this.props)
            const resourceProps = Object.keys(mapResult)
            const resourcePromises = Object.values(mapResult)
            
            Promise.all(resourcePromises).then(resources => {
                this.setState(resources.reduce((newState, resource, i) => {
                    newState[resourceProps[i]] = resource;
                    return newState
                }, {}))
            })
        }

        render() {
            if (Object.keys(this.state).length === 0) {
                return null;
            }

            return <ComposedComponent {...this.props} {...this.state} />
        }
    }
}

export default fetchResources;