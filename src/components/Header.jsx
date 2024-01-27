import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { localService } from "../apis/localService";
import "./Header.scss";

export default function Header() {
  const { info } = useSelector((state) => state.userReducer);

  let navigate = useNavigate();
  const isAdmin = info && info.maLoaiNguoiDung === "QuanTri";
  let handleLogOut = () => {
    localService.remove();
  };
  let handleSwitchToProfile = () => {
    navigate("/profile");
    window.location.reload();
  };
  let renderNav = () => {
    if (info) {
      return (
        <>
          <NavLink onClick={handleSwitchToProfile}>
            <span className="hover:text-orange-500 duration-300 flex items-center">
              <img
                src={`https://i.pravatar.cc/150?u=${info.hoTen}`}
                className="w-8 rounded-full"
                alt="..."
              />
              {info.hoTen}
            </span>
          </NavLink>

          <button
            onClick={handleLogOut}
            className="ml-3 hover:text-orange-500 duration-300"
          >
            <i className="fa-solid fa-right-from-bracket mr-2"></i>
            <span>Đăng xuất</span>
          </button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="mr-4 hover:text-orange-500 duration-300"
            onClick={() => {
              navigate("/login");
            }}
          >
            <i className="fa-solid fa-user mr-2"></i>
            <span>Đăng nhập</span>
          </button>
          <button
            className="hover:text-orange-500 duration-300"
            onClick={() => {
              navigate("/register");
            }}
          >
            <i className="fa-solid fa-unlock mr-2"></i>
            <span>Đăng ký</span>
          </button>
        </>
      );
    }
  };
  return (
    <div id="header">
      <div className=" bg-black">
        <div className="container flex justify-between">
          <div className="flex items-center">
            <div className="hidden lg:block  text-white  text-sm"></div>
            <div
              className="ml-4 hidden lg:block"
              style={{ padding: "8px 15px", fontSize: "14px" }}
            >
              <strong className="text-orange-500 mr-2"></strong>
              <span style={{ color: "#8B8B79" }}></span>
            </div>
          </div>
          <div className="flex items-center" style={{ color: "#8B8B79" }}>
            {renderNav()}
          </div>
        </div>
      </div>
      <div className=" container">
        <nav>
          <div className="logo">
            <NavLink to={"/"}>
              <img src="../Dicon.png" className="w-18 sm:w-24" alt="..." />
            </NavLink>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            ☰
          </label>
          <ul className="menu navbar lg:space-x-5 uppercase">
            <li>
              <a href="#featuresMovie">Lịch chiếu</a>
            </li>

            <li>
              <a href="#cinema__complex">Cụm rạp</a>
            </li>
            <li>
              <a href="#news">Tin tức</a>
            </li>
            <li>
              <a href="#footer">Liên hệ</a>
            </li>
            {isAdmin && (
              <li>
                <a href="#">Admin</a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
