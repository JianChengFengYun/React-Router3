import React from 'react'
import classNames from 'classnames'
import './style'
import Img from './img'
import Text from './text'


export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toastText: false,
            toastImg: false,
        }
    }

    showText() {
        let { toastText } = this.state

        this.setState({
            toastText: !toastText,
        })
    }

    showImg() {
        let { toastImg } = this.state

        this.setState({
            toastImg: !toastImg,
        })
    }

    hideToast() {
        this.setState({
            toastImg: false,
            toastText: false
        })
    }

    render() {
        let { toastText, toastImg } = this.state
        return (
            <div className="main">
                <p onClick={this.showText.bind(this)}>文字提示</p>

                <p onClick={this.showImg.bind(this)}>带图弹窗</p>
                {
                    toastText &&
                    <div className="bg"
                        onClick={this.hideToast.bind(this)}
                    >
                        < Text />
                    </div>
                }
                {
                    toastImg &&
                    <div className="bg"
                        onClick={this.hideToast.bind(this)}
                    >
                        < Img />
                    </div>

                }
            </div>
        )
    }
}


