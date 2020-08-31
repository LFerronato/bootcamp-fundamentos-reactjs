import React from 'react'

import { FileInfo } from './styles'

interface FileProps {
  name: string
  readableSize: string
}

const FileItem: React.FC<FileProps> = ({ name, readableSize }: FileProps) => {
  return (
    <FileInfo>
      <div>
        <strong>{name}</strong>
        <span>{readableSize}</span>
      </div>
    </FileInfo>
  )
}

export default FileItem
