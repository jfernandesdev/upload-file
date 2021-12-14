import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media(max-width: 768px) {
    padding: 50px 5px 20px;
  }
`;

export const Logo = styled.img`
  width: 200px;
`;

export const Text = styled.p`
  font-size: 1.1em;
  color: var(--gray);
  padding: 10px;
`;
