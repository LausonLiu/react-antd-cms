import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import { commonRoutes } from "./routers"

import { Provider } from "react-redux"

import store from './store'

ReactDOM.render(

    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <Router>
                <Switch>

                    <Route path="/admin" render={
                        (rootProps) => {
                            return <App {...rootProps} />
                        }
                    } ></Route>

                    {commonRoutes.map((ele, index) => {
                        return <Route key={index}
                            path={ele.pathname}
                            component={ele.components}></Route>
                    })
                    }

                    <Redirect from="/" to="/admin" exact></Redirect>
                    <Redirect to="/404"></Redirect>


                </Switch>
            </Router>

        </ConfigProvider>
    </Provider>,

    document.getElementById('root')

);

