import React from 'react'
import classNames from 'classnames'
import './style'
import List3 from './List3'
import { HOCFactoryFactory, ListName } from './HOCFactory'

export default class List2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { info, getListFn, addAll, parentId } = this.props
        const obj = {
            info,
            getListFn,
            addAll,
            parentId,
            ListComponents : List3
        }
        return (
            <div className="city-li">
                {HOCFactoryFactory(obj)(ListName)}
            </div>
        )
    }
}