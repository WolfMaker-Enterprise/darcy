import React from "react";

export default function LineDivider() {
  const images = [
    "/image/Rectangle12.png",
    "/image/Rectangle13.png",
    "/image/Rectangle14.png",
    "/image/Rectangle15.png",
    "/image/Rectangle16.png",
  ];

  return (
    <div className="w-full bg-[#E5E5E5] py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 md:px-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-[3/2] overflow-hidden rounded-md"
          >
            <img
              src={src}
              alt={`imagem-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
