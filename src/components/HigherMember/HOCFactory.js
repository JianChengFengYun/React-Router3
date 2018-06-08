import React, { PureComponent } from 'react'
import classNames from 'classnames'

// 高阶工厂
export function HOCFactoryFactory(...params) {
    // do something with params
    let itemname =  params[0].info
    let getListFn =  params[0].getListFn
    let addAll =  params[0].addAll
    let parentId =  params[0].parentId
    let ListComponents =  params[0].ListComponents

    return function HOCFactory(WrappedComponent) {
        const newProps = {
            itemname,
            getListFn,
            addAll,
            parentId,
            ListComponents
        }
        // HOCFactory.handleClick = WrappedComponent.handleClick
        return <WrappedComponent {...newProps}
                    key={itemname}
               />
    }
}

export class ListName extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showChild: false
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        let { showChild } = this.state
        let { itemname, getListFn, parentId } = this.props
        if (itemname.localName === '全部') {
            getListFn(parentId)
        } else {
            this.setState({
                showChild: !showChild,
            })
        }
    }

    render() {
        let { itemname, getListFn, addAll, ListComponents } = this.props
        let { showChild } = this.state
        let nodeList = addAll(itemname.nodeList)
        // console.log('itemname',itemname)
        return <div>
                <p className={classNames({ 'on': this.state.showChild })}
                    onClick={this.handleClick}
                >
                    { itemname.localName }{itemname.localName !== '全部' && <span />} 
                </p>
                {
                    showChild &&
                    <ul>
                        {
                            nodeList.map((item, i) => {
                                return <ListComponents addAll={addAll}
                                            getListFn={getListFn}
                                            info={item}
                                            key={i}
                                            parentId={itemname.localId}
                                       />
                            })
                        }
                    </ul>
                }
            </div>
        
    }
}