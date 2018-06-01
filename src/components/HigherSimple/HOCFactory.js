import React, { PureComponent } from 'react'
import classNames from 'classnames'

export function HOCFactory(WrappedComponent) {

    class TheHOC extends PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                showChild: false,
            }
        }

        handleClick() {
            let { showChild } = this.state
            this.setState({
                showChild: !showChild,
            })
        }

        render() {
            return <WrappedComponent {...this.props }
            />
        }

    }

    return TheHOC
}