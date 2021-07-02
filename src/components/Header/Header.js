import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin, AiFillCodepenCircle } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white", marginBottom: '18px' }}>
          <AiFillCodepenCircle size="3rem" /> <Span>Alwin John</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/Dexters-Hub">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alwinjohn/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.youtube.com/c/AlwinJohn?sub_confirmation=1">
        <AiFillYoutube size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
