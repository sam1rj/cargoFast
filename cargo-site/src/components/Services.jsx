import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Services = () => {
  return (
    <Container id="services" className="my-5">
      <h2 className="text-center mb-4">Xidmətlərimiz</h2>
      <Row>
        <Col md="4">
          <Card className="mb-4 shadow-sm">
            <CardBody>
              <CardTitle tag="h5">Sürətli Çatdırılma</CardTitle>
              <CardText>48 saat içində dünya üzrə çatdırılma.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="mb-4 shadow-sm">
            <CardBody>
              <CardTitle tag="h5">Əşyaların İzlənməsi</CardTitle>
              <CardText>Paketin harada olduğunu izləyə bilərsiniz.</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="4">
          <Card className="mb-4 shadow-sm">
            <CardBody>
              <CardTitle tag="h5">Təhlükəsiz Paketləmə</CardTitle>
              <CardText>Əşyalarınız xüsusi qablaşdırma ilə maksimum qorunur.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;