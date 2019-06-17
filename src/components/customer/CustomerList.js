import React from "react";
import styled from "styled-components";
import { Edit } from "styled-icons/boxicons-regular/Edit";
import { Delete } from "styled-icons/material/Delete";
import { Table, Tr } from "styled-table-component";

const EditIcon = styled(Edit)`
  color: black;
  height: 20px;
`;

const DeleteIcon = styled(Delete)`
  color: black;
  height: 20px;
`;

export const CustomerList = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.customerList.map((customer, key) => {
          return (
            <Tr primary>
              <td>
                <input
                  type="text"
                  disabled="true"
                  value={customer.firstName}
                  height="auto"
                  width="auto"
                />
              </td>
              <td>{customer.lastName}</td>
              <td>{customer.age}</td>
              <td>{customer.email}</td>
              <td key={key}>
                <a
                  href="#"
                  onClick={e => {
                    props.editCustomer(customer);
                  }}
                >
                  <EditIcon />
                </a>
                <a
                  href="#"
                  onClick={e => {
                    if (
                      window.confirm(
                        "Are you sure you wish to delete this item?"
                      )
                    )
                      props.deleteCustomer(customer.firstName);
                  }}
                >
                  <DeleteIcon />
                </a>
              </td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};
