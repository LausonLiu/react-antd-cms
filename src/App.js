import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes } from "./routers"
import Layout from "./components/Layout"
import "./assets/styles/base.less"

export default class App extends Component {

  constructor(props) {
    super(props);
this.props.history.listen( location => {
  var NowRoute = privateRoutes.find( item => {
    return item.pathname === location.pathname
  })
  // console.log(NowRoute);
  window.document.title = NowRoute? NowRoute.title : "CMS管理系统";
})
  }

  render() {
    return (
      <Layout>
        <Switch>
          {
            privateRoutes.map((item, index) => {
              return (
                <Route exact={item.isExact} key={index} path={item.pathname} render={
                  (rootProps) => {
                    return <item.components {...rootProps} />
                  }
                } />
              )
            })
          }

          <Redirect from="/admin" to={privateRoutes[0].pathname} exact />
          <Redirect to="/404" />
        </Switch>
      </Layout>
    )
  }
}
