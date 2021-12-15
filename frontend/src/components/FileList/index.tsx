import React from 'react';
import { Container, FileInfo, Preview } from './styles';

import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError} from 'react-icons/md';
import { FiLink } from 'react-icons/fi';

export const FileList: React.FC = () => {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src="http://localhost:3000/files/b8659af664086caa6ea6ac558b2ef491-success-test-image-4.jpg"/>

          <div>
            <strong>profile.png</strong>
            <span>
              64 KB
              <button onClick={() => {}}>Excluir</button>
            </span>
          </div>
        </FileInfo>

        <div>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: 'var(--purple)' }
            }}
            strokeWidth={10}
            value={60}
          />
        
          <a 
            href='http://localhost:3000/files/b8659af664086caa6ea6ac558b2ef491-success-test-image-4.jpg'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FiLink color='var(--purple)'/>
          </a>

          <MdCheckCircle color='var(--green)' />
          <MdError color='var(--red)' />
        </div>
      </li>

    </Container>
  );
}