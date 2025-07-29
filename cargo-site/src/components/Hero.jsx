import React from 'react';
import { Container, Button } from 'reactstrap';

const HeroSection = () => {
  return (
    <Container className="text-center my-5">
      <h1 className="display-4">Sürətli və Təhlükəsiz Kargo Xidməti</h1>
      <p className="lead">
        İstədiyiniz ölkəyə və ünvana çatdırırıq – təhlükəsiz, etibarlı və münasib qiymətlərlə.
      </p>
      <Button color="primary" size="lg">İndi Başla</Button>
    </Container>
  );
};

export default HeroSection;