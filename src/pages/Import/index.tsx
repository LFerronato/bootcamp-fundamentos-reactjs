import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import filesize from 'filesize'

import Header from '../../components/Header'
import FileItem from '../../components/FileItem'
import Upload from '../../components/Upload'

import {
  Container,
  Title,
  ImportFileContainer,
  FileItemContainer,
  Footer,
} from './styles'

import alert from '../../assets/alert.svg'
import xIcon from '../../assets/x.svg'

import api from '../../services/api'

interface FileProps {
  file: File
  name: string
  readableSize: string
}

const Import: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([])
  const history = useHistory()

  async function handleUpload(): Promise<void> {
    const data = new FormData()

    const file = uploadedFiles[0]
    if (!file) return
    console.log('Foi...')
    data.append('file', file.file, file.name)

    try {
      await api.post('/transactions/import', data)
      setUploadedFiles([])
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  function submitFile(files: File[]): void {
    if (files.length !== 1) {
      return
    }

    if (uploadedFiles.length !== 0) {
      return
    }

    const newFiles = files.map(f => ({
      file: f,
      name: f.name,
      readableSize: filesize(f.size),
    }))
    setUploadedFiles([...uploadedFiles, ...newFiles])
  }

  function removeFile(fileName: string): void {
    const newList = uploadedFiles.filter(f => f.name !== fileName)
    setUploadedFiles(newList)
  }
  return (
    <>
      <Header size="small" activated={['i', 'a']} />
      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
          {!!uploadedFiles.length && (
            <FileItemContainer>
              {uploadedFiles.map(uploadedFile => (
                <li key={uploadedFile.name}>
                  <FileItem
                    name={uploadedFile.name}
                    readableSize={uploadedFile.readableSize}
                  />
                  <img
                    src={xIcon}
                    alt="icon to remove"
                    onClick={() => {
                      removeFile(uploadedFile.name)
                    }}
                    aria-hidden="true"
                  />
                </li>
              ))}
            </FileItemContainer>
          )}
          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
  )
}

export default Import
