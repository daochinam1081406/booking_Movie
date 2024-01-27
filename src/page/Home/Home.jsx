import React from "react";
import Carousel from "./Carousel/Carousel";
import DetailMovie from "./DetailMovie/DetailMovie";
import TabsMovie from "./TabsMovie/TabsMovie";
import Footer from "../../components/Footer";
import FeaturesMovie from "./FeaturesMovie/FeaturesMovie";
import MovieApp from "./MovieApp/MovieApp";
import LatestNew from "./LatestNew/LatestNew";
import { FloatButton } from "antd";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <FeaturesMovie />
      <DetailMovie />
      <TabsMovie />
      <LatestNew />
      <MovieApp />
      <Footer />
      <FloatButton.BackTop
        shape="square"
        icon={
          <i className="fa-solid fa-arrow-up hover:text-white duration-300"></i>
        }
        className=" hover:bg-orange-500 duration-300"
      />
    </div>
  );
}
