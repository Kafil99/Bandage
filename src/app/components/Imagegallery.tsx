import { Loader2 } from "lucide-react";
import React, { useState } from "react";

const ImageGallery: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<number>>(new Set());

  const images = [
    {
      id: 1,
      src: "/Images/pic1.jpg",
      alt: "Fashion model in floral dress",
      gridArea: "span 2 / span 2",
    },
    {
      id: 2,
      src: "/Images/pic2.png",
      alt: "Minimalist fashion outfit",
      gridArea: "span 1 / span 1",
    },
    {
      id: 3,
      src: "/Images/pic3.png",
      alt: "Denim style fashion",
      gridArea: "span 1 / span 1",
    },
    {
      id: 4,
      src: "/Images/pic4.png",
      alt: "Black and white fashion",
      gridArea: "span 1 / span 1",
    },
    {
      id: 5,
      src: "/Images/pic5.png",
      alt: "Casual denim fashion",
      gridArea: "span 1 / span 1",
    },
  ];

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  const handleImageError = (id: number) => {
    setErrorImages((prev) => new Set([...prev, id]));
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg"
            style={{
              gridArea: image.gridArea,
            }}
          >
            {!loadedImages.has(image.id) && !errorImages.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
              </div>
            )}

            {errorImages.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-red-500">Failed to load image</span>
              </div>
            )}

            <img
              src={image.src}
              alt={image.alt}
              onLoad={() => handleImageLoad(image.id)}
              onError={() => handleImageError(image.id)}
              className={`w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 ${
                loadedImages.has(image.id) ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ImageGallery;
