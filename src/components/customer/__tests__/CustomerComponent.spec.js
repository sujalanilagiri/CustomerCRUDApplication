import {configure} from 'enzyme';
import configureStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import {shallow} from 'enzyme';
import {getCustomerList,saveCustomer,deleteCustomer,updateCustomer} from "../modules/customerActions";
import customerReducer from "../modules/customerReducer";


configure({adapter:new Adapter()});

const users = [
    {
        "firstName": "Nicholas",
        "lastName" : "Thomas",
        "age": 42,
        "email": "nicholas.thomas@gmail.com"
    },
    {
        "firstName": "Elvin",
        "lastName" :"Martin",
        "age": 32,
        "email": "martin.elvin@gmail.com"
    },
    {
        "firstName": "Jass",
        "lastName" :"Base",
        "age": 22,
        "email": "jass.base@gmail.com"
    }
];
describe("ACTIONS: customerActions",()=>{
    const mockStore = configureStore();
    const store = mockStore();
    beforeEach(()=>{
        store.clearActions();
    });

    test("ACTION: GET_CUSTOMERS",()=>{
        store.dispatch(getCustomerList());
        expect(store.getActions()).toMatchSnapshot();
    })
    test("ACTION: SAVE_CUSTOMER",()=>{
        store.dispatch(saveCustomer());
        expect(store.getActions()).toMatchSnapshot();
    })
    test("ACTION: DELETE_CUSTOMER",()=>{
        store.dispatch(deleteCustomer());
        expect(store.getActions()).toMatchSnapshot();
    })
    test("ACTION: UPDATE_CUSTOMERS",()=>{
        store.dispatch(updateCustomer());
        expect(store.getActions()).toMatchSnapshot();
    })
});

describe("REDUCER: customerReducer",()=>{
    test("GET_CUSTOMERS",()=>{
        expect(customerReducer(undefined,getCustomerList(users))).toMatchSnapshot();
    })
})



