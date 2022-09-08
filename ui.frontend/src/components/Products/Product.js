import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { AddShoppingCart } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { getProductById } from "../../utils/getProductById";

require('./Product.css')

const ProductConfig = {
    emptyLabel: 'Product',
    isEmpty: function (props) {
        return !props || !props.Product;
    }
};


class Product extends Component {

    constructor(props) {
        super(props);
        this.product = getProductById(this.props.id);
    }

    render() {
        return (
            <div className="products">
                <h1 className="title">{this.product.name} {this.product.jname}</h1>
                <div className="row">
                    <div className="col limited">
                        <div id="product-images">
                            {
                                this.product.images.map(image => (
                                    <img className="imgs" key={image} src={require(`../../data/images/${image}.jpg`).default}/>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col right">
                        <div className="buy-panel">
                            <b><span className="price large">{this.product.precio} €</span></b>
                            <br />
                            <p id="size-text">Tamaño</p>
                            <br />
                            <div id="tallas">
                                {this.product.tallas.map(talla => (
                                    <button key={talla} className="talla">{talla}</button>
                                ))}
                            </div>
                            <br />
                            <button id="add-button"><AddShoppingCart id="cart-icon"/> AÑADIR</button>
                            <br />
                            <button id="guide-button">GUIA DE TALLAS</button>
                        </div>
                        <div id="details">
                            detalles
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MapTo('spa-react-v3/components/product')(Product, ProductConfig);
