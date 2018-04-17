import React from 'react'
import classNames from 'classnames'
import './style'
import List4 from './List4'

export default class List3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showChild: false,
        }
    }

    handleClick() {
        let { showChild } = this.state
        let { info, getListFn, parentId } = this.props
        if (info.localName === '全部') {
            getListFn(parentId)
        } else {
            this.setState({
                showChild: !showChild,
            })
        }
    }

    render() {
        let { info, getListFn, addAll } = this.props
        let { showChild } = this.state
        let nodeList = addAll(info.nodeList)
        return (
            <div className="county-li">
                <p className={classNames({ 'on': showChild })}
                    onClick={this.handleClick.bind(this)}
                >
                    {info.localName}
                    {info.localName !== '全部' && <span />}
                </p>
                {
                    showChild &&
                    <div className="town-ul">
                        {
                            nodeList.map((item, i) => {
                                return <List4 addAll={addAll}
                                    getListFn={getListFn}
                                    info={item}
                                    key={i}
                                    parentId={info.localId}
                                       />
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}
