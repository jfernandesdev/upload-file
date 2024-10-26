// @ts-nocheck
import { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import api from './services/api';

import { Header } from './components/Header';
import { AreaOfUpload } from './components/AreaOfUpload';
import { FileList } from './components/FileList';

import { Container, Alert, Footer } from './styles';

class App extends Component {
  state = {
    uploadedFiles: []
  };

  //list all files
  async componentDidMount() {
    const response = await api.get('posts');

    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        uploaded: true,
        url: file.url,
      }))
    })
  }

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
        });
      }
    }).then(response => {
      this.updateFile(uploadedFile.id, {
        uploaded: true,
        id: response.data._id,
        url: response.data.url,
      });
    }).catch( response => {
      this.updateFile(uploadedFile.id, {
        error: true
      });
    });
  };

  handleDelete = async id => {
    await api.delete(`posts/${id}`);

    this.setState({
      uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id),
    })
  };

  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }

  render()  {
    const { uploadedFiles } = this.state;
    return (
      <>
        <Header />
        <Container>
          <AreaOfUpload onUpload={this.handleUpload} />

          { !!uploadedFiles.length ? (
            <FileList files={uploadedFiles} onDelete={this.handleDelete} />
          ) : <Alert>Nenhum arquivo enviado!</Alert>}

        </Container>
        
        <Footer><span><b>Atenção:</b> Este projeto trata-se de uma aplicação fictícia para fins didáticos. <br />Por favor, não compartilhe documentos pessoais ou de conteúdo impróprio.</span></Footer>
      </>
    );
  }
}

export default App;
