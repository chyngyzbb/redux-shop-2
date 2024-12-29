const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  // basket:[]
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const result = [...state.product, action.payload];
      localStorage.setItem("product", JSON.stringify(result));
      return { ...state, product: result };
    case "ADD_TO_BASKET":
      let find_basket = state.basket.find((el) => el.id === action.payload.id);
      
      if (find_basket) {
        let res = state.basket.map((el) =>
        el.id === action.payload.id ? { ...el, quantity: el.quantity + 1 } : el
      );
        localStorage.setItem("basket", JSON.stringify(res));
        return { ...state, basket: res };
      } else {
        return { ...state, basket: [...state.basket, action.payload] };
      }
    // let res = [...state.basket, action.payload];
    // localStorage.setItem("basket", JSON.stringify(res));
    // return { ...state, basket:res};
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id && el.quantity > 1
            ? { ...el, quantity: el.quantity - 1 }
            : el
        ),
      };
    case "ADD_TO_FAVORITE":
      let favo = state.favorite.find((el) => el.id === action.payload.id);

      if (favo) {
      let deleteFavo = state.favorite.filter((el) => el.id !== action.payload.id);
        localStorage.setItem("favorite", JSON.stringify(deleteFavo));
        return { ...state, favorite: deleteFavo };
      } else {
      let resul = [...state.favorite, action.payload];

        localStorage.setItem("favorite", JSON.stringify(resul));
        return { ...state, favorite: resul };
      }

    case "DELETE_BASKET":
      let resu = state.basket.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("basket", JSON.stringify(resu));
      return { ...state, basket: resu };
    // {
    //   ...state,
    //   basket: state.basket.filter((el) =>
    //     el.id !== action.payload.id
    //   ),
    // };

    default:
      return state;
  }
};
