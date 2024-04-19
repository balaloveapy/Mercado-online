
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getAllProducts } from "./getAllProducts";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "./products";
import { ToastAction } from "@/components/ui/toast";
import { ComponentsTab } from "./componentsTab";

export default async function ProductsTab() {
    const pegar = await getAllProducts()
    const array = [{ id: 1, comida: 'sushi' }, { id: 2, comida: 'temaki' }, { id: 3, comida: 'pack' }, { id: 4, comida: 'Bebida' }]
   
   return(
     <ComponentsTab array={array} pegar={pegar}/>
   )

}