import React from 'react'
import './style'
// import List1 from './List1'
import { HOCFactoryFactory, ListName } from './HOCFactory'

export default class Higher extends React.Component {
    constructor(props) {
        super(props)
        this.j4e = window.___json4fe
    }

    addAll(list) {
        let all = [{
            'localId': '',
            'pid': '',
            'localName': '全部',
        }]
        return all.concat(list)
    }

    getListFn(localId) {
        console.log(localId)
    }

    render() {
        let nodeList = JSON.parse(this.j4e.localConf)
        nodeList = this.addAll(nodeList)
        return (
            <ul className="filter-locale-con">
                {
                    nodeList.map((item, i) => {
                        return <List1 addAll={this.addAll}
                            getListFn={this.getListFn}
                            info={item}
                            key={i}
                            parentId=""
                               />
                    })
                }
            </ul>
        )
    }
}


const List1 = ({ info, getListFn, addAll, parentId }) => {
    const obj = {
        info,
        getListFn,
        addAll,
        parentId,
        ListComponents: List2
    }
    const EnhancedComponent = HOCFactoryFactory(obj)(ListName)
    return (
        <li className="province-li">
            {EnhancedComponent}
        </li>
    )
}


const List2 = ({ info, getListFn, addAll, parentId }) => {
    const obj = {
        info,
        getListFn,
        addAll,
        parentId,
        ListComponents: List3
    }
    const EnhancedComponent = HOCFactoryFactory(obj)(ListName)
    return (
        <li className="city-li">
            {EnhancedComponent}
        </li>
    )
}


const List3 = ({ info, getListFn, addAll, parentId }) => {
    const obj = {
        info,
        getListFn,
        addAll,
        parentId,
        ListComponents: List4
    }
    const EnhancedComponent = HOCFactoryFactory(obj)(ListName)
    return (
        <li className="county-li">
            {EnhancedComponent}
        </li>
    )
}


function handleClick(info, getListFn, parentId) {
    if (info.localName === '全部') {
        getListFn(parentId)
    } else {
        getListFn(info.localId)
    }
}

const List4 = ({ info, getListFn, parentId }) => {
    return (
        <li className="town-li">
            <p onClick={handleClick.bind(this, info, getListFn, parentId)}>{info.localName}</p>
        </li>
    )
}