'use client'
import { Button } from "@/components/ui/button";
import { Product } from "./products";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCartStore } from "../store/cart-store";

type todos = {
    array: { id: number, comida: string }[]
    pegar: Product[]
}
export function ComponentsTab({ array, pegar }: todos) {
    const { toast } = useToast()
    const {upsetCartItem } = useCartStore(state => state)
    function clicked(a: Product) {
        upsetCartItem(a,1)
        toast({
            title: "Adicionado ao seu carinho",
            description: `${a.name} adicionado`,
            action: (
                <ToastAction altText="Confirmar">Confirmar</ToastAction>
            )
        })
    }
    return (
        <Tabs defaultValue="tab1">
            <TabsList className="flex">
                <TabsTrigger className="flex-1" value="tab1">sushi</TabsTrigger>
                <TabsTrigger className="flex-1" value="tab2">temaki</TabsTrigger>
                <TabsTrigger className="flex-1" value="tab3">combo</TabsTrigger>
                <TabsTrigger className="flex-1" value="tab4">bebidas</TabsTrigger>
            </TabsList>
            {array.map((a) => (
                <TabsContent key={a.id} value={`tab${a.id}`}>
                    <div className="grid grid-cols-3 gap-3">
                        {pegar.map((b, c) => (
                            <>
                                {
                                    b.category === a.comida &&
                                    <div key={c} className="flex flex-col gap-2">

                                        <div>
                                            <img className="rounded-md" src={b.image} alt="" />
                                        </div>
                                        <div>
                                            <h1 className="font-semibold">{b.name}</h1>
                                            <p className="text-sm">{b.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                        </div>
                                        <div>
                                            <Button onClick={() => clicked(b)} className="w-full">enviar</Button>
                                        </div>
                                    </div>
                                }
                            </>
                        ))}
                    </div>

                </TabsContent>
            ))}

        </Tabs >
    )

}