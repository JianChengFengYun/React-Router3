
/**
 * 程序的入口
 */
// import 'babel-polyfill' //es6
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link, Redirect } from 'react-router'

//页面
import DemoRoute from '@/routes/Demo'

class App extends React.Component {
  render() {
    return (<div>
      <h1>App</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
      {this.props.children}
    </div>)
  }
}

class About extends React.Component {
  render() {
    return (<h3>About</h3>)
  }
}

class Inbox extends React.Component {
  render() {
    return (<div>
      <h2>Inbox</h2>
      {this.props.children || 'Welcome to your Inbox'}
    </div>)
  }
}

class Message extends React.Component {
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}

class Dashboard extends React.Component {
  render() {
    return <div>Welcome to the app!</div>
  }
}

// 路由表
// const routes = (
//   <Router history={hashHistory}>
//     <Route component={App}
//       path="/"
//     >
//       <Route component={About}
//         path="about"
//       />
//       <Route component={Inbox}
//         path="inbox"
//       >
//         <Route component={Message}
//           path="/messages/:id"
//         />
//         <Route component={Message}
//           path="messages/:id"
//         />
//         {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
//         <Redirect from="messages/:id"
//           to="/messages/:id"
//         />
//       </Route>
//     </Route>
//   </Router>
// )
// ReactDOM.render(routes, document.getElementById('root'))

const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'about', component: About },
      {
        path: 'inbox',
        component: Inbox,
        childRoutes: [
          { path: '/messages/:id', component: Message },
          {
            path: 'messages/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]

ReactDOM.render(<Router history={hashHistory}
  routes={routeConfig}
                />, document.getElementById('root'))






