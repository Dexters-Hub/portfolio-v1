import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Footer/FooterStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, CopySlogan,Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id ="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>PHONE:</LinkTitle>
          <LinkItem href="tel:+91 999-570-3457">999-570-3457</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>EMAIL:</LinkTitle>
          <LinkItem href="mailto:alwinjohn231@gmail.com">
            alwinjohn231@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Dexters-Hub">
            <AiFillGithub size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/alwinjohn/">
            <AiFillLinkedin size="4rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/c/AlwinJohn?sub_confirmation=1">
            <AiFillYoutube size="4rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      
          <CopySlogan>© 2021 Alwin John.
ALL RIGHTS RESERVED.</CopySlogan>
        
    </FooterWrapper>
  );
};

export default Footer;
