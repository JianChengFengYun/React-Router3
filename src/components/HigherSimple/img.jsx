import React from 'react'
import classNames from 'classnames'
import './style'
import HOCFactory from './HOCFactory'

// export default class Img extends React.Component {
//     constructor(props) {
//         super(props)

//     }

//     componentWillMount(){
//         // 其它相同的操作
//     }

//     render() {
//         return (
//             <div className="wrap">
//                 <h1>加载中...</h1>
//                 <p>componentWillMount: 在渲染前调用,在客户端也在服务端。</p>
//                 <img alt=""
// src="http://pic1.58cdn.com.cn/images/xq_img/n_v2bd13decce31a47b29d1260a5d23b2baf.png"
//                 />
//             </div>
//         )
//     }
// }


// class Img extends React.Component {
//     render() {
//         return (
//             <img alt=""
//                 src="http://pic1.58cdn.com.cn/images/xq_img/n_v2bd13decce31a47b29d1260a5d23b2baf.png"
//             />
//         )
//     }
// }

function Img() {
    return (
        <img alt=""
            src="http://pic1.58cdn.com.cn/images/xq_img/n_v2bd13decce31a47b29d1260a5d23b2baf.png"
        />
    )
}


export default HOCFactory(Img)


