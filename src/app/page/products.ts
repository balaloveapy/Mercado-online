export type Product = {
    id: number
    category: string,
    name: string,
    image: string,
    price: number,
}

export const products: Product[] = [
    {
        id: 1,
        category: 'sushi',
        name: 'Sushi 1',
        image: '/sushi/sushi1.png',
        price: 49
    },
    {
        id: 2,
        category: 'sushi',
        name: 'Sushi 2',
        image: '/sushi/sushi2.png',
        price: 49
    },
    {
        id: 3,
        category: 'sushi',
        name: 'Sushi 3',
        image: '/sushi/sushi3.png',
        price: 49
    },
    {
        id: 4,
        category: 'sushi',
        name: 'Sushi 4',
        image: '/sushi/sushi4.png',
        price: 49
    },
    {
        id: 5,
        category: 'sushi',
        name: 'Sushi 5',
        image: '/sushi/sushi5.png',
        price: 49
    },
    {
        id: 6,
        category: 'sushi',
        name: 'Sushi 6',
        image: '/sushi/sushi6.png',
        price: 49
    },
    {
        id: 7,
        category: 'sushi',
        name: 'Sushi 7',
        image: '/sushi/sushi7.png',
        price: 49
    },
    {
        id: 8,
        category: 'sushi',
        name: 'Sushi 8',
        image: '/sushi/sushi8.png',
        price: 49
    },
    {
        id: 9,
        category: 'sushi',
        name: 'Sushi 9',
        image: '/sushi/sushi9.png',
        price: 49
    },
    {
        id: 10,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki1.png',
        price: 49
    },
    {
        id: 11,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki2.png',
        price: 49
    },
    {
        id: 12,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki3.png',
        price: 49
    },
    {
        id: 13,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki4.png',
        price: 49
    },
    {
        id: 14,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki5.png',
        price: 49
    },
    {
        id: 15,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki6.png',
        price: 49
    },
    {
        id: 16,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki7.png',
        price: 49
    },
    {
        id: 17,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki8.png',
        price: 49
    },
    {
        id: 18,
        category: 'temaki',
        name: 'Sushi 9',
        image: '/temaki/temaki9.png',
        price: 49
    },
    {
        id: 21,
        category: 'pack',
        name: 'Combo 1',
        image: '/combo/combo1.png',
        price: 81
    },
    {
        id: 22,
        category: 'pack',
        name: 'Combo 2',
        image: '/combo/combo2.png',
        price: 81
    },
    {
        id: 23,
        category: 'pack',
        name: 'Combo 3',
        image: '/combo/combo3.png',
        price: 81
    },
    {
        id: 24,
        category: 'pack',
        name: 'Combo 4',
        image: '/combo/combo4.png',
        price: 81
    },
    {
        id: 25,
        category: 'pack',
        name: 'Combo 5',
        image: '/combo/combo5.png',
        price: 81
    },
    {
        id: 26,
        category: 'pack',
        name: 'Combo 6',
        image: '/combo/combo6.png',
        price: 81
    },
    {
        id: 27,
        category: 'pack',
        name: 'Combo 7',
        image: '/combo/combo7.png',
        price: 81
    },
    {
        id: 28,
        category: 'pack',
        name: 'Combo 8',
        image: '/combo/combo8.png',
        price: 81
    },
    {
        id: 29,
        category: 'pack',
        name: 'Combo 9',
        image: '/combo/combo9.png',
        price: 81
    },
    {
        id: 30,
        category: 'Bebida',
        name: 'Bebida 1',
        image: '/bebidas/Bebida1.png',
        price: 81
    },
    {
        id: 31,
        category: 'Bebida',
        name: 'Bebida 2',
        image: '/bebidas/Bebida2.png',
        price: 81
    },
    {
        id: 32,
        category: 'Bebida',
        name: 'Bebida 3',
        image: '/bebidas/Bebida3.png',
        price: 81
    },
    {
        id: 33,
        category: 'Bebida',
        name: 'Bebida 4',
        image: '/bebidas/Bebida4.png',
        price: 81
    },
    {
        id: 34,
        category: 'Bebida',
        name: 'Bebida 5',
        image: '/bebidas/Bebida5.png',
        price: 81
    },
    {
        id: 35,
        category: 'Bebida',
        name: 'Bebida 6',
        image: '/bebidas/Bebida6.png',
        price: 81
    },
    {
        id: 36,
        category: 'Bebida',
        name: 'Bebida 7',
        image: '/bebidas/Bebida7.png',
        price: 81
    },
    {
        id: 37,
        category: 'Bebida',
        name: 'Bebida 8',
        image: '/bebidas/Bebida8.png',
        price: 81
    },
    {
        id: 38,
        category: 'Bebida',
        name: 'Bebida 9',
        image: '/bebidas/Bebida9.png',
        price: 81
    },

];
export const filter = (a: string) => {
    const have = products.filter((b) => b.category == a)
    return(have)
}