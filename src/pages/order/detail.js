import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
@withRouter
class OrderDetail extends Component{

  constructor(props){
    super(props)
    console.log(this.props)
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return (
      <div>
        OrderDetail
        <h3></h3>
      </div>
    )
  }
}
export default OrderDetail