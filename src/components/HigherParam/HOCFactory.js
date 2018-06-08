import React, { PureComponent } from 'react'
import classNames from 'classnames'

// 高阶工厂
export function HOCFactoryFactory(ListComponents) {

    return function HOCFactory(WrappedComponent) {

        class ListName extends React.PureComponent {
            constructor(props) {
                super(props)
                this.state = {
                    showChild: false
                }
                this.handleClick = this.handleClick.bind(this)
            }
        
            handleClick() {
                let { showChild } = this.state
                let { info, getListFn, parentId } = this.props
                console.log('info.localName',info.localName)
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
                console.log(nodeList)
                
                
                return <li>
                        {
                            WrappedComponent && <WrappedComponent />
                        }
                        <p className={classNames({ 'on': this.state.showChild })}
                            onClick={this.handleClick}
                        >
                            { info.localName }{info.localName !== '全部' && <span />} 
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
                                                    parentId={info.localId}
                                               />
                                    })
                                }
                            </ul>
                        }
                    </li>
                
            }
        }

        return ListName

    }
}

