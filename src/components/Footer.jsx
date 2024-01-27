import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return (
    <div id="footer" className=" footer">
      <div
        className="footer__top py-20"
        style={{
          background: `url(../image/footer/footer_background.jpg) center / cover no-repeat`,
          height: "100%",
        }}
      >
        <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-7 ">
          <div>
            <h4>Liên hệ</h4>
            <div className="flex items-center ">
              <i className="fa-solid fa-location-arrow mr-4"></i>
              <p className="md:text-sm xl:text-base">Lorem ipsum dolor sit.</p>
            </div>
            <div className="flex items-center ">
              <i className="fa-regular fa-envelope mr-4"></i>
              <p>daochinam1081406@gmail.com</p>
            </div>
            <div className="flex items-center ">
              <i className="fa-solid fa-phone mr-4"></i>
              <p className="text-orange-500 font-semibold">0911111111</p>
            </div>
          </div>
          <div id="recentPosts">
            <h4>Bài viết gần đây</h4>
            <div className="mb-4 border-b border-white ">
              <div className="flex mb-5 recentPost__top">
                <img
                  loading="lazy"
                  src="../image/footer/lastnew1.jpg"
                  width={100}
                  alt="..."
                />
                <div className="recentPost__info">
                  <h5>Justin Timberlake tái xuất</h5>
                  <span>Jan 27, 2024</span>
                  <span>/ 0 Comments</span>
                </div>
              </div>
            </div>
            <div className="border-b border-white recentPost__bot">
              <div className="flex mb-5 recentPost__top">
                <img
                  loading="lazy"
                  src="../image/footer/lastnew2.jpg"
                  width={100}
                  alt="..."
                />
                <div className="recentPost__info">
                  <h5>Sao 'Oppenheimer' không nghĩ có ngày được đề cử Oscar</h5>
                  <span>Jan 27, 2024</span>
                  <span>/ 0 Comments</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4>Giới thiệu</h4>

            <p>Lorem, ipsum dolor sit amet consectetur.</p>
            <img
              loading="lazy"
              src="../Dicon.png"
              className="mb-4 md:mt-8"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="footer__bottom bg-black py-5">
        <div
          className=" container  flex justify-between"
          style={{ color: "#666666" }}
        >
          <div>©copyright 2023 D.</div>
          <div className="space-x-4 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
}
