import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      message: "New appointment booked with Dr. Sneha",
      timestamp: "2025-08-01 09:30 AM",
    },
    {
      id: 2,
      message: "Inventory restocked for Ayush Tablets",
      timestamp: "2025-07-30 04:15 PM",
    },
    {
      id: 3,
      message: "Monthly report available for download",
      timestamp: "2025-07-28 12:00 PM",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Notifications</h2>
      <Card className="mt-3">
        <ListGroup variant="flush">
          {notifications.map((note) => (
            <ListGroup.Item key={note.id}>
              <div className="d-flex justify-content-between">
                <span>{note.message}</span>
                <small className="text-muted">{note.timestamp}</small>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Notifications;
