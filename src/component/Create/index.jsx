// import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import { useDispatch,} from "react-redux";
import unigId from "uniqid"
// import { store } from "../../redux";

const errorMesseg=()=>{
  toast.error(' Заполните ячейки!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
   
    });
}
const successMesseg=()=>{
  toast.success('Успешно добавлено', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
   
    });
}


const Create = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const dispatch=useDispatch()


  function addProduct()  {
    if(productName==="" || productPrice==="" || productUrl===""){
      errorMesseg()
    }else{
      const newProduct = {
        id: unigId(),
        name: productName,
        price: productPrice,
        img: productUrl,
        quantity:1
      }
      dispatch({type:'ADD_PRODUCT',payload:newProduct});
      successMesseg()
      setProductName("")
      setProductPrice("")
      setProductUrl("")
    }
  };

  // console.log(product);
  

  return (
    <div className="container">
      <div className="w-[50%] mx-auto my-[50px] flex flex-col">
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setProductUrl(e.target.value)}
            value={productUrl}
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-[20px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Product Url...
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group my-[20px]">
          <input
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-[20px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Product Name...
          </label>
        </div>
        <div className="relative z-0  mb-5 group my-[20px] ">
          <input
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            type="text"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-[20px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Product Price...
          </label>
        </div>
        <button 
        onClick={()=>addProduct()}
        className="bg-blue-500 text-white px-[40px] py-[10px] text-[16px] rounded-lg w-[150px] mt-[30px] mx-auto">
          Save
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Create;
