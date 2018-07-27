import React, { Component } from 'react';
export default function(importComponent){
  class AsyncComponent extends Component{
    constructor(props){
      super(props)
      this.state = {
        component: null
      }
    }
    async componentDidMount(){
      let { default: component } = await importComponent();
      this.setState({
        component
      })
    }
    render(){
      let C = this.state.component;
      return C ? <C {...this.props }/> : null;
    }
  }
  return AsyncComponent
}
