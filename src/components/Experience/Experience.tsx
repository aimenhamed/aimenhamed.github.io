import React from 'react';

import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents/index.style';
import { Box, Boxes, BoxNum, BoxText } from './Experience.style';

const data = [
  { company: "Optus", text: 'Product Engineer Intern', info: 'Full stack development using React and Node building UI for Optus Pause.' },
  { company: "CommBank", text: 'Software Engineer Work Experience', info: 'Designing and maintaining systems for CommBank branches & development tools' },
  { company: "Harvey Norman", text: 'CSR LiveChat', info: 'Customer service role with Harvey Norman online orders working in Agile environment' },
];

const Experience = () => (
  <Section id="experience">
    <SectionDivider />
    <SectionTitle main>Experience</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <>
        <Box key={index}>
          <BoxNum>{card.company}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
        <SectionSubText>{card.info}</SectionSubText>
        </>
      ))}
    </Boxes>
  </Section>
);

export default Experience;
