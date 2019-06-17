import React, { Component } from "react";
import { connect } from "react-redux";
import { CustomerForm } from "./Customer";
import {
  getCustomerList,saveCustomer,deleteCustomer,updateCustomer
} from "./modules/customerActions";

export class CustomerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { customer: {} };
    
}
  componentDidMount() {
    this.props.fetchCustomerList();
}

 deleteCustomer=(firstName)=>{
  this.props.deleteCustomerDetails(firstName);
 }
saveCustomer(postData) {
  this.setState({customer:postData});
   this.state.customer.firstName ?this.props.updateCustomer(postData):this.props.saveCustomerDetails(postData);
}

editCustomer(customer) {
  console.log('in edit',customer)
  this.setState({customer:customer})
  
}

updateCustomer(customer) {
  this.props.updateCustomer(customer);
}
  
  render() {
    return (
      <div >
        {this.props.response && (
        <CustomerForm customerList={this.props.response} handlePostData={this.saveCustomer.bind(this)} deleteCustomer={this.deleteCustomer.bind(this)} customer ={this.state.customer} editCustomer = {this.editCustomer.bind(this)} updateCustomer={this.updateCustomer.bind(this)}/> 
        )}
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    response: state.customers.customerList ? state.customers.customerList.data : null
  };
};
const mapDispatchToProps = dispatch => ({
    fetchCustomerList: () => dispatch(getCustomerList()),
    saveCustomerDetails: (data) => dispatch(saveCustomer(data)),
    deleteCustomerDetails:(name) => dispatch(deleteCustomer(name)),
    updateCustomer:(customer) => dispatch(updateCustomer(customer))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerComponent);