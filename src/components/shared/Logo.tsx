import React from 'react';
import styled from 'styled-components';

export type ILogo = {
  text: string;
};

const LogoText = styled.span`
  font-size: 3em;
`;

const Logo: React.FunctionComponent<ILogo> = ({ text }) => <LogoText>{text}</LogoText>;

export default Logo;
