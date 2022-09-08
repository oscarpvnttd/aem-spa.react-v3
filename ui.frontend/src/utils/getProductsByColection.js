import { products } from "../data/products/products";

export const getProductsByColection = (coleccion) => {
    const validColections = ['genesis', 'alchemist'];
    if(!validColections.includes(coleccion)){
        throw new Error(`${coleccion} no es una colección válida`);
    }

    return products.filter(product => product.coleccion === coleccion);
}