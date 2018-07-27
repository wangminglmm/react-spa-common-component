import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import PrivateRouter from '@/components/private-router';
import asyncComponentFunc from '@/components/async-component';
import Login from '@/pages/login/login';
const OrderList = asyncComponentFunc(()=>(import('@/pages/order/list')));
const OrderDetail = asyncComponentFunc(()=>import('@/pages/order/detail'));
export default class WRouter extends Component{
  constructor(){
    super()
  }
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <PrivateRouter path="/">
            <Route path="/order/list" render={()=>(<OrderList />)}></Route>
            <Route path='/order/detail/:id' render={()=>(<OrderDetail />)}></Route>
          </PrivateRouter>
        </Switch>
      </Router>
    )
  }
}