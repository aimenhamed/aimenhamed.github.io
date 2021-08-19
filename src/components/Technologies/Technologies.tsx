import React from 'react';
import { DiTerminal, DiReact, DiZend, DiDatabase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents/index.style';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './Technologies.style';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I am continuing to learn a wide range of technologies across web development.
      Anything from the backend to the UI/UX design with frontends.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              Experience with <br />
              React JS (HTML, CSS, JS, TS)
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size="3rem" />
          <ListContainer>
            <ListTitle>Backend</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node JS and Databases (PostgreSQL)
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size="3rem" />
          <ListContainer>
            <ListTitle>DevOps</ListTitle>
            <ListParagraph>
              Experience with <br />
              Linux, CLI, Kubernetes, Docker and Redis
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              Figma
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
