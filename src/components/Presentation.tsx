import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';

export type IPresentation = {
  name: string;
};

const Title = styled.span`
  font-size: 4em;
  font-weight: 'bold';
`;

const Slash = styled.span`
  font-weight: bold;
  font-size: 1em;
  color: #8B8B8B;
`;

const NameTitle = styled.span`
  font-weight: 'bold';
  font-size: 2em;
`;

const Paragraph = styled.p`
  color: #8B8B8B;
  font-size: 1.7em;
`;

const RoundedImage = styled.img`
  max-width: 70%;
  border-radius: 50%;
  border: 5px solid #8B8B8B;
`;

const Presentation: React.FunctionComponent<IPresentation> = ({ name }) => (
  <Container>
    <Row justify="flex-start" style={{ padding: '4em 0 4em 2em' }}>
      <Col sm={12} md={12} lg={12}>
        <Title>
          SOFTWARE DEVELOPMENT
          <Slash>/</Slash>
        </Title>
        <Title>DIGITAL MARKETING</Title>
      </Col>
    </Row>
    <Row justify="flex-start" style={{ paddingLeft: '2em' }}>
      <Col align="center" sm={12} md={2} lg={2}>
        <RoundedImage src="/img/yael.jpg" />
      </Col>
      <Col sm={12} md={5} lg={5}>
        <NameTitle>
          Hi, my name is { name }
        </NameTitle>
        <Paragraph>
          Software Developer currently focused on the web.
          <br />
          3 years of experience in tech companues.
          <br />
          <br />
          Passion for building things with other people and personal projects.
        </Paragraph>
      </Col>
    </Row>
  </Container>
);

export default Presentation;
