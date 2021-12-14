import { Header } from './components/Header';
import { AreaOfUpload } from './components/AreaOfUpload';

import { Container } from './styles';

function App() {
  return (
    <>
      <Header />

      <Container>
        <AreaOfUpload />

        <div>
          area dos arquivos enviados  
        </div> 
      </Container>
    </>
  );
}

export default App;
