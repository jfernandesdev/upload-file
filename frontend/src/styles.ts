import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 200px);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 10%;
  
  div {
    height: 100%;
  }

  @media(max-width: 768px) {
    display: block;
    height: auto;
    padding: 0 5%;
  }
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  text-align: center;
  font-size: 0.8em;
  color: var(--gray);

  @media(max-width: 768px) {
    padding: 30px 10px;
  }
`;