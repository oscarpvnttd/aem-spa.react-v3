import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { Person, ShoppingBasket } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';
import { getProductsByType } from "../../utils/getProductsByType";
import { ProductCard } from "./ProductCard";

require('./Product.css')

const ProductsConfig = {
    emptyLabel: 'Products',
    isEmpty: function (props) {
        return !props || !props.Products;
    }
};


class Products extends Component {

    constructor(props) {
        super(props);
        this.products = getProductsByType(this.props.type);
    }

    render() {
        return (
            <div className="products">
                <div>
                    <div id="line"></div>
                    <h1 className="typetitle">{this.props.type.toUpperCase()+'S'}</h1>
                </div>
                <div className="prod-container" id="list">
                    {
                        this.products.map(product => (
                            <ProductCard key={product.id} {...product} />
                        ))
                    }
                </div>
            </div>
        );
    }

}

export default MapTo('spa-react/components/products')(Products, ProductsConfig);
