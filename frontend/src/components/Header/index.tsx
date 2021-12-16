import React from 'react';

import { TopBar, HeaderItems, Separator, Logo, Title, User, Avatar, Name} from './styles';

export const Header: React.FC = () => {
  return (
    <>
      <TopBar>
        <HeaderItems>
          <Logo src='./logo-upload-file.svg' alt="Upload File" />
          <Separator />
          <Title>Plataforma de compartilhamento e armazenamento de arquivos</Title>
        </HeaderItems>
        
        <User>
          <Avatar src='./avatar-user.svg' alt="Jeferson Fernandes"/>
          <Name>Jeferson Fernandes</Name>
        </User>
      </TopBar>
    </>
  );
}
