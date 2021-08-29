import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Frontend Web Developer & <br />Flutter Developer
        </SectionTitle>
        <SectionText>I love to solve problems with technology to make a better living for the people. Keenly, seeking an opportunity to develop my programming skills.

        </SectionText>
        <Link href = '../../public/static/Alwin-John-Software-Engineer.pdf' download><a><Button onClick={props.handleClick}>Resume</Button></a></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;