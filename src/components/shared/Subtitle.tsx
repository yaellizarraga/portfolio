import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-awesome-styled-grid';

export type ISubtitle = { align: string, text: string };

const Slash = styled.span`
  font-weight: bold;
  font-size: 1em;
  color: #8B8B8B;
`;

const styles: React.CSSProperties = {
  paddingLeft: '24%',
};

const SubTitle: React.FunctionComponent<ISubtitle> = ({ align, text }) => (
  <Row justify={align} style={styles}>
    <Slash>/</Slash> { text }
  </Row>
);

export default SubTitle;
