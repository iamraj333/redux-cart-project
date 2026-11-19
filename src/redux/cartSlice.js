import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload

            const isProductExistsInCart=state.carts.find((item)=>item.id===product.id)
            if(isProductExistsInCart){
                isProductExistsInCart.quantity+=1
            }
            else{
                state.carts.push({
                    ...product,
                    quantity:1
                })
            }
        },

        IncreaseProductQuantity:(state,action)=>{
            const isProductExists=state.carts.find(item=>item.id===action.payload)
            if(isProductExists){
                isProductExists.quantity+=1
            }
        },

        DecreaseProductQuantity:(state,action)=>{
            const isProductExists=state.carts.find(item=>item.id===action.payload)
            if(isProductExists && isProductExists.quantity>1){
                isProductExists.quantity-=1
            }
        },

        RemoveFromCart:(state,action)=>{
            state.carts=state.carts.filter(item=>item.id!==action.payload)
        },

        clearCart:(state)=>{
            state.carts=[]
        }
    }
})

export const {addToCart,IncreaseProductQuantity,DecreaseProductQuantity,RemoveFromCart,clearCart}=cartSlice.actions
export default cartSlice.reducer