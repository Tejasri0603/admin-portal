import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";

const Profile = () => {
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@amrutam.com");

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="container mt-4">
      <h2>My Profile</h2>
      <Card className="p-4">
        <Form onSubmit={handleUpdate}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="profileName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="profileEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="profileBio" className="mt-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Tell something about yourself..." />
          </Form.Group>

          <Button type="submit" variant="success" className="mt-3">
            Save Changes
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Profile;
