import React, { Fragment } from "react";
import {CustomerList} from './CustomerList';
import { withFormik } from 'formik';
import * as Yup from "yup";
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
    console.log('values',errors)
    return (
        <Fragment>
            <Title>Customer Details</Title>
            <Form onSubmit={handleSubmit } onChange={handleChange}>
                <Field>
                    <Label>First Name </Label>
                    <Input type="text" name="firstName" placeholder="First Name"  value={values.firstName}/>
                    
                </Field>
                {errors.firstName && touched.firstName && <Error> {errors.firstName} </Error>}
                <Field>
                    <Label>Last Name </Label>
                    <Input type="text" name="lastName" placeholder="Last Name" value={values.lastName}/>
                </Field>
                <Field>
                    <Label>Age </Label>
                    <Input type="text" name="age" placeholder="Age" value={values.age}/>                    
                </Field>
                {errors.age && touched.age && <Error> {errors.age} </Error>}
                    
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
    validationSchema: Yup.object().shape({
        firstName:Yup.string().required("First Name is Required")
                  .test("minLength",'FirstName is minimum 6 characters',val=>val.length<6),
        age:Yup.number().required("Age is required").test("minAge","Age must be greater than 18",val=>val>18)

    }),
    enableReinitialize:true,
    validateOnChange:true,
    displayName: 'CustomerForm',
  })(Customer);
