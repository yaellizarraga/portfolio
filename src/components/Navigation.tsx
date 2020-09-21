import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import Logo from './shared/Logo';

export type IItem = {
  text: string,
  route: string
};

export type IHeader = {
  items: IItem[],
  backgroundColor?: string;
};

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: inline-block;
  margin: 0 2em 0 0;
`;

const Link = styled.a`
  font-size: 2em;
  text-decoration: none;
  color: #8B8B8B;
`;

const Header: React.FunctionComponent<IHeader> = ({ backgroundColor, items }) => (

  <Container fluid style={{ backgroundColor, height: '100px' }}>
    <Row justify="space-between" align="flex-end" style={{ padding: '2em', height: '100%' }}>
      <Col justify="center" md={1} lg={1}>
        <Logo text="BYLL" />
      </Col>
      <Col align="flex-end" md={6} lg={4}>
        <List>
          { items.map((item, index) => (
            <Link href={item.route ? item.route : '#'} key={index}>
              <ListItem>{ item.text }</ListItem>
            </Link>
          ))}
        </List>
      </Col>
    </Row>
  </Container>

);

export default Header;
