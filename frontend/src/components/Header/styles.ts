import styled from 'styled-components';

export const TopBar = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 8%;
`;

export const HeaderItems = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media(max-width: 600px) {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 120px;

    ::before {
      content: '';
      position: absolute;
      background: #FFF;
      top: 0;
      left: 0;
      width: 100%;
      height: 70px;
      border-bottom: 0.5px solid rgba(0,0,0,0.1);
    }
  }
`;

export const Logo = styled.img`
  width: 150px;

  @media(max-width: 600px) {
   position: absolute;
    left: 20px;
    top: 0px;
    transform: translateY(100%);
  }
`;

export const Separator = styled.div`
  height: 65%;
  border-left: 1px solid var(--lightGray);

  @media(max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 1.1em;
  font-weight: 300;
  color: var(--gray);
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media(max-width: 600px) {
    position: absolute;
    top: 0px;
    transform: translateY(80%);
    right: 20px;
  }
`;

export const Avatar = styled.img`
  width: 27px;
  height: 27px;
`;

export const Name = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 27px;
  text-align: center;
  color: var(--gray);
  margin-left: 8px;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media(max-width: 600px) {
    display: none;
  }
`;
