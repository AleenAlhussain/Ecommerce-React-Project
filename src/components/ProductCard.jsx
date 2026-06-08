import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
export default function ProductCard({ product }) {

 
  return (
     <Col md={4}  className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
        />

        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          {product.description}
        </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item>${product.price}</ListGroup.Item>
        </ListGroup>


<Card.Body className="d-flex justify-content-between">
  <Button
    variant="dark"
    onClick={() => addToCart(product.id)}
    className="custom-btn"
  >
    Add to Cart
  </Button>

  <Button
    as={Link}
    to={`/products/${product.id}`}
    variant="outline-dark"
    className="custom-btn"
  >
    View Details
  </Button>
</Card.Body>
      </Card>
    </Col>
  );
}
