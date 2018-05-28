import React from 'react'
import './style'
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


function creatComponent ( params, com, style ){
    const { info, getListFn, addAll, parentId } = params
    const obj = {
        info,
        getListFn,
        addAll,
        parentId,
        ListComponents: com
    }
    const EnhancedComponent = HOCFactoryFactory(obj)(ListName)
    return (
        <li className={style}>
            {EnhancedComponent}
        </li>
        )
}


const List1 = (params) => {
    return creatComponent( params, List2, 'province-li' )
    
}

const List2 = (params) => {
    return creatComponent( params, List3, 'city-li' )
    
}

const List3 = (params) => {
    return creatComponent( params, List4, 'county-li' )
    
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