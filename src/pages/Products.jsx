import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const products = [
  { id: 1, name: "Chyawanprash", price: "₹299", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Herbal Hair Oil", price: "₹199", img: "https://via.placeholder.com/100" },
];

const Products = () => {
  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="mb-3">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">Edit</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
