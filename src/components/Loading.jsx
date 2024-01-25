import React from "react";
import { Dna } from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function Loading() {
  const { isLoading } = useSelector((state) => state.spinnerSlice);

  return isLoading ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `rgba(0,0,0,0.8)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <Dna
        type="DNA" // Sử dụng kiểu DNA
        color="#FE5A1D" // Màu sắc của thanh progress bar
        height={200} // Chiều cao của thanh progress bar
        width={200} // Chiều rộng của thanh progress bar
      />
    </div>
  ) : (
    <></>
  );
}
