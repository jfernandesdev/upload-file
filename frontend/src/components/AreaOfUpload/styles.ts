import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-left: auto !important;
  padding: 10px 30px;

  @media(max-width: 768px) {
    padding: 10px 0px;
  }
`;

const dragActive = css`
  border-color: var(--green);

  > img {
    filter: invert(0%) sepia(59%) saturate(321%) hue-rotate(104deg) brightness(94%) contrast(91%);
  }
`;

const dragReject = css`
  border-color: var(--red);

  > img {
    filter: invert(57%) sepia(37%) saturate(4260%) hue-rotate(315deg) brightness(95%) contrast(76%);
    opacity: 0.7;
  }
`;

interface DropContainerProps{
  isDragActive?: boolean;
  isDragReject?: boolean;
}

export const DropContainer = styled.div.attrs({ className: 'dropzone'})<DropContainerProps>`
  width: 100%;
  height: 425px;
  border: 1px dashed var(--lightGray); 
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 10% 5%;
  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};

  @media(min-width: 768px) {
    min-width: 375px;
    padding: 10% 20%;
  }

  @media(max-width: 600px) {
    height: 300px;
    margin-top: 50px;
    margin-bottom: 20px;

    > img { 
      width: 80px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: var(--purple);
  color: var(--white);
  border: 0;
  border-radius: 77px;
  padding: 8px 50px;
  font-family: 'Nunito', Helvetica, sans-serif;
  font-weight: 100;
  font-size: 1em;
  transition: 0.2s linear;
  margin: 5px;
  
  &:hover {
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Text = styled.span`
  color: var(--gray);
  font-size: 0.9em;
`;

const messageColors:any = {
  default: '#000',
  error: '#E57878',
  success: '#78E5D5',
};

interface UploadMessageProps {
  type?: string;
};

export const UploadMessage = styled.h2<UploadMessageProps>`
  font-size: 1.1em;
  min-height: 3em;
  display: flex;
  align-items: center;
  color: ${props => messageColors[props.type || 'default']};
`;