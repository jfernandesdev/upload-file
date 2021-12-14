import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100% - 200px);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;
  
  div {
    height: 100%;
  }

  @media(max-width: 768px) {
    display: block;
    height: auto;
  }
`;
