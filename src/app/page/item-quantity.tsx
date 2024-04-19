'use client'
import { Button } from "@/components/ui/button";
import { Cart } from "../store/cart";
import { useCartStore } from "../store/cart-store";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    cartItem: Cart;
}
export const CartItemQuantity = ({cartItem}:Props)=>{
    const {upsetCartItem} = useCartStore(state => state)
    function handlePlusButton(){
        upsetCartItem(cartItem.product,+1)
    }
    function handleMinusButton(){
        upsetCartItem(cartItem.product,-1)
    }
    return(
        <div className="flex items-center gap-2">
            <Button onClick={handlePlusButton} variant={'outline'} size={'icon'} className="size-5"><PlusIcon className="size-3"/></Button>
            <div className="text-xs">{cartItem.quantity}</div>
            <Button onClick={handleMinusButton} variant={'outline'} size={'icon'} className="size-5"><MinusIcon className="size-3"/></Button>
        </div>
    )
}