import React from 'react'
import classNames from 'classnames'
import './style'
import List4 from './List4'
import { HOCFactoryFactory, ListName } from './HOCFactory'

export default class List3 extends React.Component {
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
            ListComponents : List4
        }
        return (
            <div className="county-li">
                {HOCFactoryFactory(obj)(ListName)}
            </div>
        )
    }
}
