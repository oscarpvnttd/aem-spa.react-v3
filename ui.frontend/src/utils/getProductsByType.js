import { products } from "../data/products/products";

export const getProductsByType = (tipo) => {
    const validTypes = ['camiseta', 'sudadera'];
    if(!validTypes.includes(tipo)){
        throw new Error(`${tipo} no es un tipo de ropa valido`);
    }

    return products.filter(product => product.tipo === tipo);
}