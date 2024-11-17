import React from 'react';
import "../FileUploadButton/FileUploadButton.css"

const FileUploadButton = () => {
  return (
    <div>
      <label htmlFor="file-upload" className="file-upload-label">
      </label>
      <input type="file" id="file-upload" className="file-upload-input" />
    </div>
  );
};

export default FileUploadButton;
