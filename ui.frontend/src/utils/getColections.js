import { products } from "../data/products/products";

export const getColections = () => {
    return new Set(products.map(product => product.coleccion));
}