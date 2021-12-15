import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import { Container, DropContainer, UploadMessage, Text, Button } from './styles';

interface AreaOfUploadProps {
  onUpload: (files: any) => void;
}

export class AreaOfUpload extends Component<AreaOfUploadProps> {
  renderDragMessage = (isDragActive:boolean, isDragReject:boolean) => {
    if(!isDragActive) {
      return <UploadMessage>Arraste seus arquivos aqui para upload...</UploadMessage>
    }

    if(isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado!</UploadMessage>
    }
 
    return <UploadMessage type="success">Solte seus arquivos aqui!</UploadMessage>
  };

  render() {

    const { onUpload } = this.props;

    return(
      <Container>
        <Dropzone accept='image/*' onDropAccepted={onUpload}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <DropContainer 
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject} 
            >
              <input {...getInputProps()} />
              <img src="./cloud-icon.svg" alt="Upload" />
              {this.renderDragMessage(isDragActive, isDragReject)}
    
              <Text>ou</Text>
              <Button type='button'>Buscar</Button>
              <Text>JPG, PNG ou GIF de até 2 MB cada</Text>
            </DropContainer>
          )}
        </Dropzone>    
      </Container>
    );
  }
}