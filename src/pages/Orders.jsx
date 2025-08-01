import React from "react";
import { Table } from "react-bootstrap";

const Orders = () => {
  const orderData = [
    { id: 1, customer: "John Doe", status: "Shipped", amount: "₹2500" },
    { id: 2, customer: "Anita Singh", status: "Pending", amount: "₹1800" },
  ];

  return (
    <div className="container mt-4">
      <h2>Order List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#Order ID</th>
            <th>Customer</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((order) => (
            <tr key={order.id}>
              <td>ORD{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>{order.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Orders;
