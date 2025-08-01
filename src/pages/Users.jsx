import React from "react";
import { Table, Button } from "react-bootstrap";

const Users = () => {
  const users = [
    { id: 1, name: "Anjali Sharma", email: "anjali@example.com", role: "Doctor" },
    { id: 2, name: "Rahul Verma", email: "rahul@example.com", role: "Admin" },
    { id: 3, name: "Sneha Rao", email: "sneha@example.com", role: "Support" },
  ];

  const handleDelete = (id) => {
    alert(`Delete user with ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2>Manage Users</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
