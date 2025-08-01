import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Support = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted!");
  };

  return (
    <div className="container mt-4">
      <h2>Support</h2>
      <Card className="p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="supportName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="supportEmail" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group controlId="supportMessage" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Describe your issue..." required />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Support;
