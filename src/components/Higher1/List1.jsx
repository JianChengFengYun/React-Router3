import React from 'react'
import classNames from 'classnames'
import './style'
import List2 from './List2'
import { HOCFactoryFactory, ListName } from './HOCFactory'
let EnhancedComponent = null
export default class List1 extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount(){
        let { info, getListFn, addAll, parentId } = this.props
        const obj = {
            info,
            getListFn,
            addAll,
            parentId,
            ListComponents : List2
        }
        EnhancedComponent = HOCFactoryFactory(obj)(ListName)

    }

    render() {
        let { info, getListFn, addAll, parentId } = this.props
        const obj = {
            info,
            getListFn,
            addAll,
            parentId,
            ListComponents : List2
        }
        return (
            <div className="province-li">
                {EnhancedComponent}
            </div>
        )
    }
}

