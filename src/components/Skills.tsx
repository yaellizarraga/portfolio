import React from 'react';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import SubTitle from './shared/Subtitle';

export type ISkill = {
  skill: string;
  // eslint-disable-next-line no-undef
  icon: JSX.Element;
};

export type ISkills = {
  skills: ISkill[];
};

const SkillRow: React.FunctionComponent<ISkill> = ({ icon, skill }) => {
  return (
    <Row justify="center">
      <Col md={1}>
        {icon}
      </Col>
      <Col md={4}>
        {skill}
      </Col>
    </Row>
  );
};

const styles: React.CSSProperties = {
  position: 'relative',
  backgroundColor: '#F6F6F6',
};

const Skills: React.FunctionComponent<ISkills> = ({ skills }) => (
  <Container fluid style={styles}>
    <SubTitle text="Skills" align="flex-start" />
    { skills.map((skill, index) => <SkillRow key={index} skill={skill.skill} icon={skill.icon} />) }
  </Container>
);

export default Skills;
