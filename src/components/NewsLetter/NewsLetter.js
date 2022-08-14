import React, { useState } from 'react';
import { WebLink, InputTextField, FormContainer } from './NewsLetterStyles';
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionDivider, SectionParagraph, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');


  const subscribeMe = async (event) => {
    event.preventDefault();
  
    const res = await fetch("/api/subscribe", {
       body: JSON.stringify({ email: email }),
       headers: { 'Content-Type': 'application/json' },
       method: "POST",
    });
  
    const { error, message } = await res.json();
    if (error) {
       setError(error);
    } else {
       setSuccess(message);
    }
  };
  
  const changeEmail = (event) => {
   const email = event.target.value;
   setEmail(email);
  }

    return (
        <Section id="newsletter">
        <SectionDivider divider colorAlt />

        <SectionTitle>Newsletter</SectionTitle>
        <SectionParagraph>
        I write about my journey and share my knowledge with the community. Subscribe to my newsletter where I share tech resources, memes, and personal updates.
        </SectionParagraph>
        
        <SectionParagraph>

        By subscribing, you agree with Revue's <WebLink href="https://www.getrevue.co/terms">Terms of Service</WebLink> and <WebLink href="https://www.getrevue.co/privacy">Privacy Policy.</WebLink>

        </SectionParagraph>

        <FormContainer onSubmit={subscribeMe}>
        <InputTextField
          aria-label="Email for newsletter"
          placeholder="john@email.com"
          type="email"
          autoComplete="email"
          required
          onChange={changeEmail}
        />
        <Button
          type="submit"
        >
          Submit
        </Button>
      </FormContainer>
      {success 
       ? 
    <span> 
         {success}
    </span> 
       : 
    <span>
          {error} 
    </span>
}
    </Section>
    );
};

export default NewsLetter