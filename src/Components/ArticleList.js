import React from "react";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import "./ArticleList.css";

const ArticleList = ({ articles }) => (
  <Container className="mt-4">
    <Row>
      {articles &&
        articles.map((article, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4 d-flex">
            <Card className="flex-fill card-hover">
              <div className="card-img-container">
                <Card.Img src={article.image} />
              </div>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" href={article.url} target="_blank">
                  Read more
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
    </Row>
  </Container>
);

export default ArticleList;
