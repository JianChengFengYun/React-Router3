import React from 'react'
import './style'
import { HOCFactoryFactory } from './HOCFactory'

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


const List3 = HOCFactoryFactory(List4)()


const List2 = HOCFactoryFactory(List3)()


// function province() {
//     return (
//         <p>省</p>
//     )
// }
const List1 = HOCFactoryFactory(List2)()