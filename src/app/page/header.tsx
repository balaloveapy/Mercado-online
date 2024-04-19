'use client'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ui/theme-toggle"
import { RocketIcon } from "lucide-react"
import { useCartStore } from "../store/cart-store"
import { ProductsBuy } from "./headerProducts"
import { CheckDialog } from "./dialog"
import { useState } from "react"


export function Header() {
    const [checkoutOpen, SetcheckoutOpen] = useState(false)
    const { cart } = useCartStore((item) => item)
    let valor = 0
    for (let lop of cart) {
        valor += (lop.product.price * lop.quantity)
        console.log(valor)
    }
    return (
        <header className="flex justify-between items-center py-6">
            <div className="flex gap-7">
                <div >
                    Loja <span className="font-bold">Zap</span>
                </div>
                <ModeToggle />
            </div>
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="relative">
                        {cart.length > 0 && <div className="absolute top-[-2px] right-[-4px] bg-red-600 w-3 h-3 rounded-full">aaa</div>
                                 
                        }
                        <RocketIcon />
                        <p>carrinho</p>
                    </Button>
                </SheetTrigger>
                <SheetContent >
                    <SheetHeader>
                        <SheetTitle className="text-2xl">carrinho</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col">
                        <div className="border-b py-2">
                            {cart.length > 0 &&
                                cart.map((a) => (
                                    <ProductsBuy key={a.product.id} item={a} />
                                ))
                            }
                            {
                                cart.length === 0 && <div>ainda não a produtos</div>
                            }

                        </div>
                        <div className="border-b py-2 flex justify-between">
                            Subtotal: <span>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <Button onClick={()=>SetcheckoutOpen(true)} disabled={cart.length ===0}>Confirmar</Button>
                        <CheckDialog valor={checkoutOpen} setValor={SetcheckoutOpen}/>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}