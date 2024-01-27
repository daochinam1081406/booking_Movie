import React from "react";
import "./LatestNew.scss";

export default function LatestNew() {
  return (
    <div id="news">
      <div>
        <div
          style={{ minHeight: "250px", borderRadius: 5 }}
          className="text-center"
        >
          <div className="container">
            <h1 className="font-semibold py-20 inline-block text-3xl text-orange-500">
              Tin tức mới nhất
            </h1>
          </div>
        </div>
      </div>
      <div className="relative top-[-80px]">
        <div className=" container">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-8">
            <div>
              <img
                className="img_news"
                src="./image/news/new_1.jpg"
                loading="lazy"
                alt="..."
              />
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-center text-xl mb-4">
                  JackJustin Timberlake tái xuất
                </h3>
                <button className="px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300">
                  Xem thêm
                </button>
              </div>
            </div>
            <div className="lg:row-span-2 lg:col-span-2">
              <img
                className="img_news"
                loading="lazy"
                src="./image/news/new_5.png"
                width={750}
                height={500}
                alt="..."
              />
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-center text-xl ">
                  Tin hot nhất về Taylor
                </h3>
                <p className="text-sm my-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque
                </p>
                <button className="px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300">
                  Xem thêm
                </button>
              </div>
            </div>
            <div>
              <img
                className="img_news"
                loading="lazy"
                src="./image/news/new_3.png"
                alt="..."
              />
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-center text-xl mb-4">
                  Cặp đôi hot công khai hẹn hò
                </h3>
                <button className="px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300">
                  Xem thêm
                </button>
              </div>
            </div>
            <div>
              <img
                className="img_news"
                loading="lazy"
                src="./image/news/new_2.jpg"
                alt="..."
              />
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-center text-xl mb-4">
                  Sao 'Oppenheimer' không nghĩ có ngày được đề cử Oscar
                </h3>
                <button className="px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300">
                  Xem thêm
                </button>
              </div>
            </div>
            <div>
              <img
                className="img_news"
                loading="lazy"
                src="./image/news/new_4.jpg"
                alt="..."
              />
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-center text-xl mb-4">
                  Vẻ đẹp thiên thần diễn viên châu á
                </h3>
                <button className="px-3 py-1 rounded-2xl bg-orange-400 hover:bg-orange-600 text-white text-sm duration-300">
                  Xem thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
