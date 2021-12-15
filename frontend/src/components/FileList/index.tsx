import React from 'react';
import { Container, FileInfo, Preview } from './styles';

import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError} from 'react-icons/md';
import { FiLink } from 'react-icons/fi';

interface FileListProps {
  files: any;
  onDelete: (id: string) => void;
}

export const FileList: React.FC<FileListProps> = ({files, onDelete}) => {
  return (
    <Container>
     {files.map((uploadedFile:any) => (
        <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview}/>

          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}
              {!!uploadedFile.url && (<button onClick={() => onDelete(uploadedFile.id)}>Excluir</button> )}
            </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
             <CircularProgressbar
              styles={{
                root: { width: 24 },
                path: { stroke: 'var(--purple)' }
              }}
              strokeWidth={10}
              value={uploadedFile.progress}
            />
          )}
         
          {uploadedFile.url && (
            <a href={uploadedFile.url} target='_blank' rel='noopener noreferrer'>
              <FiLink color='var(--purple)'/>
            </a>
          )}

          {uploadedFile.uploaded &&  <MdCheckCircle color='var(--green)' />}
          {uploadedFile.error &&  <MdError color='var(--red)' />}
        </div>
      </li>
     ))}
    </Container>
  );
}