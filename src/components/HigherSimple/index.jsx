import React from 'react'
import './style'

export default class Higher extends React.Component {
    constructor(props) {
        super(props)
        this.j4e = window.___json4fe
    }


    render() {

        return (
            <ul className="filter-locale-con" />
        )
    }
}


function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}