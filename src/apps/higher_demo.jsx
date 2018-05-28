
/**
 * 程序的入口
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link, Redirect } from 'react-router'

import App from '@/components/Higher'
import Simple from '@/components/HigherSimple'
import HasParams from '@/components/HigherParam'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={App} />
            <Route component={Simple}
                path="simple"
            />
            <Route component={HasParams}
                path="param"
            />
        </Route>
    </Router >
), document.getElementById('app'))

//页面
// import Higheee from '@/components/Higher'

// ReactDOM.render(<Higheee />, document.getElementById('app'))
