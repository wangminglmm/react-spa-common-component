import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
@connect(state=>({user:state.user}),{})
class PrivateRoute extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let isLogin = this.props.user.userName;
    return (
      <div>
         {isLogin ? this.props.children : <Redirect to = {{
          pathname: '/login',
          state: { from: this.props.location}
        }} />}
      </div>
    )
  }
}
export default PrivateRoute