// import React from 'react';
import LogoFavo from '../../img/fa.avif'
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Favorite = () => {

    const {favorite}=useSelector((s)=>s)


    return (
        <div className="container">
            {favorite.length? favorite.map((el)=><ProductCard el={el}/>):
            <div className='flex items-center mt-[70px] justify-center'><img width={300} src={LogoFavo}/></div>}
            
        </div>
    );
};

export default Favorite;