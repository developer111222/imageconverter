import { PiUploadSimpleLight,PiDownloadSimpleLight  } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
export default function Steps() {
    return (
   
    
      
          <section  className="background">
            <div className='container p-40'>
              <div className="p-20">
                <h2 className="center">
                  Convert your images in just a few steps!
                </h2>
                <p className="center">
                  Follow these simple steps to convert your images to the desired format.
                </p>
              </div>
              <div className="flex m-20">
                <div className="flex-col p-20">
                  <div className="icons m-10">
                    <PiUploadSimpleLight />
                  </div>
                  <div className="flex-heading">Step 1: Upload Image</div>
                  <div className="flex-paragraph center">Choose the image you want to convert.</div>
                </div>
                <div className="flex-col p-20">
                  <div className="icons m-10">
                   <IoIosArrowDown />
                  </div>
                  <div className="flex-heading">Step 2: Select Format</div>
                  <div className="flex-paragraph center">Choose the desired image format.</div>
                </div>
                <div className="flex-col p-20">
                  <div className="icons m-10">
             <PiDownloadSimpleLight  />
                  </div>
                  <div className="flex-heading">Step 3: Convert and Download</div>
                  <div className="flex-paragraph center">
                    Click the button to convert and download the image.
                  </div>
                </div>
              </div>
            </div>
          </section>
      
      
      
    )
  }
  
  
  
  
  