import React from 'react';
import { AiFillGithub, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
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
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Dexters-Hub">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/alwinjohn/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.youtube.com/c/AlwinJohn?sub_confirmation=1">
            <AiFillYoutube size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
      
          <CopySlogan>© 2021 COPYRIGHT.
ALL RIGHTS RESERVED.</CopySlogan>
        
    </FooterWrapper>
  );
};

export default Footer;
