import React from "react";
import { Card, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <div className="row">
        <Card className="col-md-3 m-2">
          <Card.Body>
            <Card.Title>Users</Card.Title>
            <Card.Text>1,234 Active Users</Card.Text>
            <Button variant="primary">Manage</Button>
          </Card.Body>
        </Card>
        <Card className="col-md-3 m-2">
          <Card.Body>
            <Card.Title>Orders</Card.Title>
            <Card.Text>456 Orders Today</Card.Text>
            <Button variant="success">View Orders</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
