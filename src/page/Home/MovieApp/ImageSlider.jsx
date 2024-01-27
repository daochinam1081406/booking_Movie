import React, { useState, useEffect } from "react";

const images = [
  "../image/slider1.jpg",
  "../image/slider2.jpg",
  "../image/slider3.jpg",
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Tăng chỉ số ảnh hiện tại, quay vòng nếu đến ảnh cuối cùng
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Thời gian giữa các lần thay đổi ảnh (đơn vị: milliseconds)

    // Clear interval khi component bị unmounted hoặc khi dependencies thay đổi
    return () => clearInterval(intervalId);
  }, []); // Chỉ chạy một lần khi component được mount

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-item ${
            index === currentImageIndex ? "active" : ""
          }`}
        >
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
