import { createSlice } from "@reduxjs/toolkit";


export const Cart = createSlice({
    name:"cart",
    initialState:{
        Cart:[],
    },
    reducers:{
        addToCart:(state,action) =>{
            const itemPresent = state.Cart.find((item) =>item.id===action.payload.id );
            if (itemPresent){
                itemPresent.quantity++;
            }else{
                state.Cart.push({...action.payload,quantity:1})
            }
        },
        removeFromCart:(state,action) =>{
            const removeItem = state.Cart.filter((item) =>item.id != action.payload.id);
            state.Cart = removeItem;
        },
        incrementQuantity:(state,action) =>{
            const itemPresent = state.Cart.find((item) =>item.id===action.payload.id );
            itemPresent.quantity++;
        },
        decrementQuantity:(state,action) =>{
            const itemPresent = state.Cart.find((item) =>item.id===action.payload.id );
            if(itemPresent.quantity ==1){
                const removeItem = state.Cart.filter((item) =>item.id != action.payload.id);
                state.Cart = removeItem;
            }else{
                itemPresent.quantity--;
            }
        }
    }
    
})

export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity} = Cart.actions;

export default Cart.reducer;