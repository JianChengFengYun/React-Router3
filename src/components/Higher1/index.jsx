import React from 'react'
import './style'
import List1 from './List1'

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
            <div className="filter-locale-con">
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
            </div>
        )
    }
}
