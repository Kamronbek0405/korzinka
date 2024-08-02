import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../../utils/storage";



const initialState = loadState("products")  || {
  productList: [],
  totolPrice: 0,
  totoCount: 0,
}

const ProductReducer = createSlice({
  name: "Products",
  initialState,
  reducers: {
    productAdd: (state, action) => {
      const item = state.productList.find((product) => product.id == action.payload.id)
      if(!item){
        return { ...state, totoCount: state.totoCount + 1, productList: [...state.productList, {...action.payload, userPrice:action.payload.price, userCount: 1}], }
      }
      return state
    },
    toggleItem: (state, action) =>{
      if(action.payload.type === "inc"){
        return {...state, productList: state.productList.map((item) => {
          if(item.id == action.payload.id && item.userCount < item.count){
            return{...item, userCount: item.userCount + 1, userPrice: (item.userCount +1) * item.price, }
          }
          return item
        })}
      }
      return {...state, productList: state.productList.map((item) => {
        if(item.id == action.payload.id && item.userCount > 0){
          return{...item, userCount: item.userCount - 1, userPrice: (item.userCount -1) * item.price, }
        }
        return item
      })}

    },
    productDelete:(state, action) =>{
      return{...state, totoCount: state.totoCount -1  ,productList: state.productList.filter((item) => item.id !=  action.payload)}
    }
  }
})

export default ProductReducer.reducer;

export const {productAdd, toggleItem ,productDelete} = ProductReducer.actions;
