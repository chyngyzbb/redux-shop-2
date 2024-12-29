// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-medium-image-zoom/dist/styles.css";
import  Zoom  from "react-medium-image-zoom";
import LogoBas from '../../img/cart.jfif'

const Basket = () => {

  const { basket } = useSelector((s) => s);
  const dispatch=useDispatch()


// function deleteBasket(item){
//     return dispatch((type))
// }
const totalPrice=basket.reduce((acc,el)=>{
  return acc+ +el.price*el.quantity
},0)
console.log(basket);


  return (
    <div className="container pt-[50px]">
      { basket.length? <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-[16px] text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-16 py-3">
                Images
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tr></tr>
          <tbody>
            {basket.map((el) => (
             <>
              <tr className="bg-gray-200 border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                <td className="p-4">
                  <Zoom>
                  <img
                    src={el.img}
                    className="w-16 md:w-32 max-w-full max-h-full"
                  />
                  </Zoom>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                 {el.name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <button
                        onClick={()=>dispatch({type:"DECREMENT_QUANTITY",payload:el})}
                      className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          // stroke-linecap="round"
                          // stroke-linejoin="round"
                          // stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <h1>{el.quantity}</h1>
                    </div>
                    <button
                        onClick={()=>dispatch({type:"INCREMENT_QUANTITY",payload:el})}
                      className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          // stroke-linecap="round"
                          // stroke-linejoin="round"
                          // stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${el.price*el.quantity}
                </td>
                <td className="px-6 py-4">
                  <button
                  onClick={()=>dispatch({type:'DELETE_BASKET',payload:el})}
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </td>
              </tr>
             </>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="mt-[20px] text-xl">Total price: {totalPrice}</h1>
      </div> :
      <div className="flex mt-[70px] items-center justify-center" >
      <img src={LogoBas} alt="" />
      </div>}
    </div>
  );
}

export default Basket
