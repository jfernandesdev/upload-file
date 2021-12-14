import React from 'react';

import { Container, Logo, Text } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo src='./logo-upload-file.svg' alt="Upload File" />
      <Text>Plataforma de compartilhamento e armazenamento de arquivos</Text>
    </Container>
  );
}
