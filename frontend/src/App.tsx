// @ts-nocheck
import { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import api from './services/api';

import { Header } from './components/Header';
import { AreaOfUpload } from './components/AreaOfUpload';
import { FileList } from './components/FileList';

import { Container } from './styles';

class App extends Component {
  state = {
    uploadedFiles: []
  };

  handleUpload = files => {
   const uploadedFiles = files.map(file => ({
     file,
     id: uniqueId(),
     name: file.name,
     readableSize: filesize(file.size),
     preview: URL.createObjectURL(file),
     progress: 0,
     uploaded: false,
     error: false,
     url: null,
   }));

   this.setState({
     uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
   });

   uploadedFiles.forEach(this.processUpload);
  };

  updateFile = (id, data) => {
    this.setState({ uploadedFiles: this.state.uploadedFiles.map (uploadedFile => {
      return id === uploadedFile.id 
        ? {...uploadedFile, ...data} 
        : uploadedFile;
    })})
  };

  processUpload = uploadedFile => {
    const data = new FormData();

    data.append('file', uploadedFile.file, uploadedFile.name);

    api.post('posts', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total));

        this.updateFile(uploadedFile.id, {
          progress,
        } )
      }
    })
  }

  render()  {
    const { uploadedFiles } = this.state;
    return (
      <>
        <Header />
        <Container>
          <AreaOfUpload onUpload={this.handleUpload} />

          { !!uploadedFiles.length ? (
            <FileList files={uploadedFiles} />
          ) : <div>Nenhum arquivo enviado!</div>}
        </Container>
      </>
    );
  }
}

export default App;
