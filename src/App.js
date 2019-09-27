import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes } from "./routers"
import Layout from "./components/Layout"
import "./assets/styles/base.less"

export default class App extends Component {
  render() {
    return (
      <Layout>
              <Switch>
        {
          privateRoutes.map((item, index) => {
            return (
              <Route key={index} path={item.pathname} render={
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
