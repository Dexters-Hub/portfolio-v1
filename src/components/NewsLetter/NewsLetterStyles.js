import styled from 'styled-components'

export const WebLink = styled.a`
  font-weight: 600;;
  color: white;
  text-decoration: underline #fff;
`;

export const InputTextField = styled.input`
    //rounded text field to get email
    border-radius: 8px;
    border: 1px solid #fff;
    padding: 15px;
    font-size: 20px;
    width: 300px;
    height: 40px;
    margin-right: 3rem;
    color: #fff;
    background-color: transparent;
    outline: none;
    margin-bottom: 2em;

    @media ${props => props.theme.breakpoints.sm} {
      width: 250px;
      font-size:16px;
  }
`;

export const FormContainer = styled.form`
    display: flex;
    margin-top: 1em;
    
`;