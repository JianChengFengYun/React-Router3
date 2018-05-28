import React from 'react'
import classNames from 'classnames'
import './style'

export default class List4 extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        let { info, getListFn, parentId } = this.props
        if (info.localName === '全部') {
            getListFn(parentId)
        } else {
            getListFn(info.localId)
        }
    }

    render() {
        let { info } = this.props
        return (
            <div className="town-li">
                <p onClick={this.handleClick.bind(this)}>{info.localName}</p>
            </div>
        )
    }
}
