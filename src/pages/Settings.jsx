import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Settings = () => {
  const [email, setEmail] = useState("admin@amrutam.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="container mt-4">
      <h2>Settings</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Admin Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mt-3">
          <Form.Label>Change Password</Form.Label>
          <Form.Control type="password" placeholder="Enter new password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Save Settings
        </Button>
      </Form>
    </div>
  );
};

export default Settings;
