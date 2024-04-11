"use client"
import React, { useState } from 'react';


const ImageUpload = () => {
  const [files, setFiles] = useState([]);
  const [selectedExtension, setSelectedExtension] = useState('jpg');

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };

  const handleExtensionChange = (e) => {
    setSelectedExtension(e.target.value);
  };

  const handleConvert = (e) => {
    e.preventDefault();
    console.log(files, 'Convert to', selectedExtension);
  };

  return (
    <div className="row">
      <form onSubmit={handleConvert}>
        <div className="file-converter-container">
          <div className="file-input-container">
            <input 
              type="file" 
              multiple 
              accept="image/jpeg, image/png, image/webp"
              id="fileInput"
              onChange={handleChange}
            />
            <label htmlFor="fileInput" className="file-input-label">
              <img src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-22685.jpg?w=740&t=st=1712726758~exp=1712727358~hmac=4e0b7d4d7399ca4717fc38f2a350bf0e3f0f219ec8bfb1a594fa2eb4ddc698f5" /> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
              </svg>
            </label>
          </div>

          {files.length > 0 ? (
            <div>
              <div className="file-list">
                <p>Selected Files:</p>
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              </div>
              <div className="select-container">
                <label htmlFor="conversionType">Select Conversion Type:</label>
                <select id="conversionType" onChange={handleExtensionChange}>
                  <option value="jpeg">JPEG</option>
                  <option value="png">PNG</option>
                  <option value="webp">WEBP</option>
                </select>
                <button type="submit" className="convert-button">Convert Now</button>
              </div>
            </div>
          ) : (
            <p className='center' style={{fontSize:"22px"}}>Upload a file</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ImageUpload;
