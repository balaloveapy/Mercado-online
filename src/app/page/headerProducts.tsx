import { Cart } from "../store/cart";
import { CartItemQuantity } from "./item-quantity";
import { Product } from "./products";
type Props = {
    item: Cart;
}
export function ProductsBuy({ item }: Props) {
    return (
        <div className="flex items-center gap-5 mb-3">
            <div className="w-16 overflow-hidden">
                <img src={item.product.image} className="w-full h-auto object-cover rounded-md" />
            </div>
            <div className="flex-1">
                <p className="text-md">{item.product.name}</p>
                <p className="text-xs opacity-50">{item.product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <div>
                <CartItemQuantity cartItem={item}/>
            </div>
        </div>
    )
}