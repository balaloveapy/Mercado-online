import { Button } from "@/components/ui/button"
import { useCheckoutStore } from "../store/checkout-store"
import Link from "next/link"
import { generaMensage } from "./msgzap"

export const Finish = ()=>{
    const {name}= useCheckoutStore(state=>state)
    const message = generaMensage()
    const LinkZap = `https://wa.me//${process.env.NEXT_PUBLIC_ZAP}?text=${encodeURI(message)}`
    return(
        <div className=" text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido ao nosso whatApp para concluir</p>
            <Button>
                <Link target="_blank" href={LinkZap}>Enviar para WhatsApp</Link>
            </Button>
        </div>
    )
}