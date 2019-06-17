import React, { Fragment } from "react";
import {CustomerList} from './CustomerList';
import { withFormik } from 'formik';
import { Title, Input, Button, Form, Label, Field,Error } from './Styled.Customer';

const Customer = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleSubmit,
        customerList,
        deleteCustomer,
    } = props;
    console.log('values',props)
    return (
        <Fragment>
            <Title>Customer Details</Title>
            <Form onSubmit={handleSubmit } onChange={handleChange}>
                <Field>
                    <Label>First Name </Label>
                    <Input type="text" name="firstName" placeholder="First Name"  value={values.firstName}/>
                    
                </Field>
                {errors.firstname && touched.firstname && <Error> {errors.firstname} </Error>}
                <Field>
                    <Label>Last Name </Label>
                    <Input type="text" name="lastName" placeholder="Last Name" value={values.lastName}/>
                </Field>
                <Field>
                    <Label>Age </Label>
                    <Input type="text" name="age" placeholder="Age" value={values.age}/>
                </Field>
                <Field>
                    <Label>Email </Label>
                    <Input type="text" name="email" placeholder="Email" value={values.email}/>
                </Field>
                <Button type="submit">Save</Button>
            </Form>
            <CustomerList customerList={customerList} deleteCustomer={deleteCustomer} editCustomer={props.editCustomer}/>
        </Fragment>
        
    );

}

export const CustomerForm = withFormik({
    mapPropsToValues: (props) => ( { firstName: props.customer.firstName,
                                    lastName:props.customer.lastName,
                                    age:props.customer.age,
                                    email:props.customer.email }),
    handleSubmit:(values,bag)=>{
      
     setTimeout(()=>{
         bag.setSubmitting(false);
     },5000)
      bag.props.handlePostData({...values})
      bag.resetForm();
    },
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.firstName) {
        errors.firstName = 'First Name is Required';
      }
      else if(values.firstName.length < 6) {
          errors.firstName = 'Name should be minimum 6 characters'
      }
  
      return errors;
    },
    enableReinitialize:true,
    validateOnChange:false,
    displayName: 'CustomerForm',
  })(Customer);
