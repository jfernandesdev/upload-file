import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;
  list-style: none;
  max-width: 450px;
  max-height: calc(100vh - 220px);
  overflow-Y: scroll;
  padding: 20px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--lightPurple);
    border-radius: 25px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + li {
      margin-top: 15px;
    }
  }

  div {
    display: flex;
  }

  div + div{
    svg {
      font-size: 24px;
      display: flex;
      margin-left: 10px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  
  div {
    display: flex;
    flex-direction: column;

    > strong {
      max-width: 250px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  
    span {
      font-size: 12px;
      color: var(--gray);
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: var(--red);
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

interface PreviewProps {
  src: string;
}

export const Preview = styled.div<PreviewProps>`
  width: 50px !important;
  height: 50px !important;
  border-radius: 10px;
  margin-right: 10px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
