import React from 'react';
import { Code, Cloud, Computer, Storage, Language } from '@styled-icons/material';
import { Container } from 'react-awesome-styled-grid';
import Navigation, { IItem } from './components/Navigation';
import Presentation from './components/Presentation';
import Skills, { ISkill } from './components/Skills';

const menuItems: IItem[] = [
  { text: 'SKILLS', route: '#' },
  { text: 'WORK', route: '#' },
  { text: 'CONTACT', route: '#' },
];

const iconStyle: React.CSSProperties = {
  maxHeight: '50px',
};

const skillsItems: ISkill[] = [
  {
    icon: <Code style={iconStyle} />,
    skill: `TypeScript, React, JavaScript, CSS, Bootstrap, Styled Components,
    PHP, Codeigniter, NodeJS, Express, Koa, Apollo Server,
    GraphQL, Hasura, Delphi, SQL`,
  },
  {
    icon: <Storage style={iconStyle} />,
    skill: 'MySQL, MongoDB, Hasura, PostgreSQL',
  },
  {
    icon: <Cloud style={iconStyle} />,
    skill: 'Google Cloud Platform',
  },
  {
    icon: <Computer style={iconStyle} />,
    skill: 'Linux & Windows. As you know, Mac is expensive bruh',
  },
  {
    icon: <Language style={iconStyle} />,
    skill: 'English, Spanish',
  },
];

const styles: React.CSSProperties = {
  padding: '0',
  position: 'relative',
  backgroundColor: '#8B8B8B',
};

function App() {
  return (
    <>
      <Container>
        <Navigation items={menuItems} />
        <Presentation name="Brandon Yael Lira Lizarraga" />
      </Container>
      <Container style={styles}>
        <Skills skills={skillsItems} />
      </Container>
    </>
  );
}

export default App;
