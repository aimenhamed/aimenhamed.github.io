import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents/index.style';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './Hero.style';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        Welcome to Aimen's Portfolio
      </SectionTitle>
      <SectionText>
        Software engineering student at UNSW interested in full stack web development.
      </SectionText>
      <Button onClick={() => window.location.href = 'https://github.com/aimenhamed'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;