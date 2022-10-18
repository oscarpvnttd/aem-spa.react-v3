import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { AddShoppingCart } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { getProductById } from "../../utils/getProductById";
import { CartProduct } from "./CartProduct";

require('./Cart.css')

const CartConfig = {
    emptyLabel: 'Cart',
    isEmpty: function (props) {
        return !props || !props.Cart;
    }
};




class Cart extends Component {

    constructor(props) {
        super(props);
    }

    handler = () => {
        this.forceUpdate();
    }

    render() {
        const json = JSON.parse(localStorage.getItem('productList')) || [];
        const totalPrices = json?.map((product) =>
            (parseFloat(product.precio.replace(',', '.')) * product.count))
            .reduce((prev, curr, index) => prev + curr, 0);
        const transporte = 3.60;
        return (
            <div id="cart-container">
                <div id="cart">
                    <div id="carrito">
                        <div className="title-container">
                            <h1 className="subtitle">TU CARRITO</h1>
                        </div>
                        {json?.length > 0
                            ? json?.map((product) => (
                                <CartProduct handler={this.handler} key={product.id + product.tallas} product={product} />
                            ))
                            : 'No hay más artículos en tu carrito'}
                    </div>
                    <div id="resume">
                        <div className="title-container" id="resume-container">
                            <span id="resume-title">Resumen</span>
                        </div>
                        <div id='cart-info'>
                            <div id="labels">
                                <span className="sum-price">
                                    {json?.map((product) =>
                                        product.count)
                                        .reduce((prev, curr, index) => prev + curr, 0)} artículo{json?.length > 1 ? 's' : ''}
                                </span>
                                <span className="sum-price">Transporte</span>
                                <span className="total-price">Total <p id="impuestos">(impuestos inc.)</p></span>
                            </div>
                            <div id="prices">
                                <span className="sum-price">
                                    {totalPrices.toFixed(2).replace('.', ',')} €
                                </span>
                                <span className="sum-price">{json?.length > 0 ? transporte.toFixed(2).replace('.', ',') + ' €' : 'Gratis'}</span>
                                <span className="total-price">{json?.length > 0 ? (totalPrices + transporte).toFixed(2).replace('.', ',') : '0,00'} €</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MapTo('spa-react-v3/components/cart')(Cart, CartConfig);
