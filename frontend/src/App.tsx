import { Header } from './components/Header';
import { AreaOfUpload } from './components/AreaOfUpload';
import { FileList } from './components/FileList';

import { Container } from './styles';

function App() {
  return (
    <>
      <Header />
      <Container>
        <AreaOfUpload />
        <FileList />
      </Container>
    </>
  );
}

export default App;
