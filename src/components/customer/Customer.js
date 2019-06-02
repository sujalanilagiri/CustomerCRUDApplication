import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withFormik } from 'formik';
import { Title, Input, Button, Form, Label, Field,Error } from './Styled.Customer';



const Customer = props => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    console.log('values',handleSubmit)
    return (
        <Fragment>
            <Title>Customer Details</Title>
            <Form onSubmit={handleSubmit } onChange={handleChange}>
                <Field>
                    <Label>First Name </Label>
                    <Input type="text" name="firstname" placeholder="First Name" />
                    
                </Field>
                {errors.firstname && touched.firstname && <Error> {errors.firstname} </Error>}
                <Field>
                    <Label>Last Name </Label>
                    <Input type="text" name="lastname" placeholder="Last Name" />
                </Field>
                <Field>
                    <Label>Age </Label>
                    <Input type="text" name="age" placeholder="Age" />
                </Field>
                <Field>
                    <Label>Email </Label>
                    <Input type="text" name="email" placeholder="Email" />
                </Field>
                <Button type="submit">Save</Button>
            </Form>
        </Fragment>
    );

}

export const CustomerForm = withFormik({
    mapPropsToValues: () => ({ firstname: '',
                               lastName:'',
                                age:'',
                                email:'' }),
  
    // Custom sync validation
    validate: values => {
      const errors = {};
  
      if (!values.firstname) {
        errors.firstname = 'First Name is Required';
      }
      else if(values.firstname.length < 6) {
          errors.firstname = 'Name should be minimum 6 characters'
      }
  
      return errors;
    },
  
    
    enableReinitialize:true,
    validateOnChange:false,
    displayName: 'CustomerForm',
  })(Customer);
