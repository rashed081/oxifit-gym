import React from "react";

const InsideOxifit = () => {
  return (
    <div className="bg-indigo-700">
      <h1 className="text-white text-7xl text-center pt-6 pb-0.5">
        WHAT TO EXPECT INSIDE OXIFIT!
      </h1>
      <div className=" h-screen flex items-center justify-center">
        <div className=" flex-1 rounded-lg shadow-xl max-w-xs bg-indigo-600 p-8">
          <div className="aspect-w-9 aspect-h-16 ">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Foxyfitgymbd%2Fvideos%2F373445801260861%2F&show_text=false&width=269&t=0"
              title="Inside Oxifit"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay"
              allowFullScreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideOxifit;
