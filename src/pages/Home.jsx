import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Home() {
  const products = getProducts();
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">
          Discover amazing products at great prices
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>
       <Row>
  {products.map((product) => (
    <Col md={4} key={product.id} className="mb-4">
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
  ))}
</Row>
      </div>
    </div>
  );
}
