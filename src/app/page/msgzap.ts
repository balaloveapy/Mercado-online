import { useCartStore } from "../store/cart-store"
import { useCheckoutStore } from "../store/checkout-store"

export const generaMensage = () => {
    const { name, address } = useCheckoutStore(state => state)
    const { cart } = useCartStore(state => state)
    let produtos = []
    for(let i in cart){
        produtos.push(`${cart[i].product.name},quantidade:${cart[i].quantity}`)
    }
    console.log(produtos)
    return (`dados do cliente:
    Nome:${name}
    Cidade:${address.city} ${address.complement}
    Distrito:${address.district}
    Numero:${address.number}
    Estado:${address.state}
    Produtos do cliente:
    ${produtos.join()}
    `)
}