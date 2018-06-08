import React, { PureComponent } from 'react'
import classNames from 'classnames'

export default function HOCFactory(WrappedComponent) {

    class TheHOC extends PureComponent {
        constructor(props) {
            super(props)
        }

        componentDidMount() {
            // 其它相同的操作
        }

        render() {
            return (<div className="wrap" >
                <h1> 加载中... </h1>
                <p> componentWillMount: 在渲染前调用, 在客户端也在服务端。 </p>
                {
                    WrappedComponent && 
                    <WrappedComponent {...this.props} />
                }
                
            </div >
            )
        }
    }

    return TheHOC
}