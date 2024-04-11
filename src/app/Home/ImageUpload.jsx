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
    <div className="row m-20">
      <div className='flex align-center p-20'>
        <div className='col-50'>
          <h1>Convert your images on the fly.</h1>
          <p className='h3' style={{padding:"10px 0"}} >Convert images to different file formats, resize, and comh2ress with ease using our image converter.</p>
          <p style={{lineHeight:"30px"}}>The Image Converter is a powerful tool designed to help you effortlessly convert your photos and images from one format to another. Whether you need to resize, rotate, or change the file type, our converter has got you covered. With its user-friendly interface and advanced features, you can achieve professional-quality results in no time</p>
        </div>
      <form onSubmit={handleConvert} className='col-50'>
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
    </div>
  );
};

export default ImageUpload;
