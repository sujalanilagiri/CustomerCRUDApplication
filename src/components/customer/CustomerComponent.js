import React, { Component } from "react";
import { connect } from "react-redux";
import { CustomerForm } from "./Customer";
import {
  getCustomerList,
} from "./modules/customerActions";

export class CustomerComponent extends Component {
  constructor(props) {
    super(props);
    
}
  componentDidMount() {
    this.props.fetchCustomerList()
}
  
  render() {
    return (
      <div >
        {this.props.response && (
        <CustomerForm/> 
        )}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    response: state.customers.response ? state.customers.response.status : null
  };
};
const matchDispatchToProps = dispatch => ({
  fetchCustomerList: () => dispatch(getCustomerList()),
});
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CustomerComponent);