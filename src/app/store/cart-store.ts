import { create } from "zustand";
import { Cart } from "./cart";
import { Product } from "../page/products";
type States = {
    cart: Cart[]
}
type Action = {
    upsetCartItem: (product: Product, quantity: number) => void
}
const initialStates: States = {
    cart: []
}
export const useCartStore = create<States & Action>()(set => ({
    ...initialStates,
    upsetCartItem:(product,quantity)=>set(state=>{
        let newCArt = state.cart
        let productIndex =newCArt.findIndex(item =>item.product.id === product.id)
        if(productIndex <0){
            newCArt.push({product, quantity:0})
            productIndex =newCArt.findIndex(item =>item.product.id === product.id)
        }
        newCArt[productIndex].quantity +=quantity
        if(newCArt[productIndex].quantity <=0){
            newCArt = newCArt.filter((a)=>a.product.id !== product.id)
        }
        return {...state,cart:newCArt}
    })
}))