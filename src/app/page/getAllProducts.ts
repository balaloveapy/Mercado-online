
import { Product, products } from "./products";

export const getAllProducts = async (): Promise<Product[]> => {
    return new Promise((resolve)=>{
       return setTimeout(() => {
           resolve(products)
        }, 1000);
    })
    
}