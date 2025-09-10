import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import productMain from "@/assets/product-main.jpg";
import productDetail1 from "@/assets/product-detail-1.jpg";
import productDetail2 from "@/assets/product-detail-2.jpg";
import productLifestyle from "@/assets/product-lifestyle.jpg";

const images = [
  { src: productMain, alt: "Premium Wireless Headphones - Main View" },
  { src: productDetail1, alt: "Premium Wireless Headphones - Detail View" },
  { src: productDetail2, alt: "Premium Wireless Headphones - Side Profile" },
  { src: productLifestyle, alt: "Premium Wireless Headphones - Lifestyle" },
];

export const ProductGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-subtle product-shadow">
        <img
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
        
        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 glass-card hover:bg-white/90"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 glass-card hover:bg-white/90"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Image Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                index === currentImage 
                  ? "bg-primary w-6" 
                  : "bg-white/50 hover:bg-white/80"
              )}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="flex space-x-3">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-square w-20 overflow-hidden rounded-lg transition-all duration-300",
              index === currentImage 
                ? "ring-2 ring-primary ring-offset-2" 
                : "hover:opacity-80"
            )}
            onClick={() => setCurrentImage(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};