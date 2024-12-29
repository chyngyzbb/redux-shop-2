// import React from 'react';
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import Bg from "../../img/bg-product.avif";

const Product = () => {
  const { product } = useSelector((s) => s);

  return (
    <div className="container ">
      {product.length ? (
        <div className="flex flex-wrap justify-between">
          {product.map((el) => (
            <ProductCard el={el} />
          ))}{" "}
        </div>
      ) : (
        <div className="flex items-center justify-center w-[100%] my-12">
          <img
            className=" flex items-center my-12 justify-center"
            width={"25%"}
            src={Bg}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
