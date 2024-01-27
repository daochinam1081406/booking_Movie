import React, { useState, useEffect } from "react";
import "./MovieApp.scss";
import Slider from "./ImageSlider";

export default function MovieApp() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "../image/slider1.jpg",
    "../image/slider2.jpg",
    "../image/slider3.jpg",
    // Thêm các đường dẫn của các hình ảnh khác vào đây
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(intervalId); // Xóa interval khi component unmount
  }, [currentImageIndex, images.length]);

  return (
    <div id="movieapp">
      <div className="background_content">
        <div className="container">
          <div className="column">
            {/* Cột thứ nhất */}
            <div className="element">
              <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
              <h5>
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </h5>
            </div>
            <button className="button">APP MIỄN PHÍ TẢI VỀ NGAY</button>
            <div className="element">
              <h6>TIX có hai phiên bản IOS & Android</h6>
            </div>
          </div>
          {/* Cột thứ hai */}
          <div className="column">
            <div className="iphone-icon">
              {" "}
              <img alt="phone" src={images[currentImageIndex]}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
