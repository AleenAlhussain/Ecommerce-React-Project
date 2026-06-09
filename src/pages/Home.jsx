import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProductCard from "../components/ProductCard";

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
   <ProductCard product={product} key={product.id}/>
  ))}
</Row>
      </div>
    </div>
  );
}
