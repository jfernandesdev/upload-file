import React from 'react';
import Dropzone from 'react-dropzone';

import { Container, DropContainer, UploadMessage, Text, Button } from './styles';

export const AreaOfUpload: React.FC = () => {

  function renderDragMessage(isDragActive:boolean, isDragReject:boolean) {
    if(!isDragActive) {
      return <UploadMessage>Arraste seus arquivos aqui para upload...</UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>
    }
 
    return <UploadMessage type="success">Solte seus arquivos aqui!</UploadMessage>
  };

  return(
    <Container>
      <Dropzone 
        accept='image/*' 
        onDropAccepted={() => {}}
      >
        { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer 
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject} 
          >
            <input {...getInputProps()} />
            <img src="./cloud-icon.svg" alt="Upload" />
            {renderDragMessage(isDragActive, isDragReject)}
  
            <Text>ou</Text>
            <Button type='button'>Buscar</Button>
            <Text>JPG, PNG ou GIF de até 2 MB cada</Text>
          </DropContainer>
        )}
      </Dropzone>    
    </Container>
  );
}