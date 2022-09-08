import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { AddShoppingCart } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { getProductById } from "../../utils/getProductById";

require('./Cart.css')

const CartConfig = {
    emptyLabel: 'Cart',
    isEmpty: function (props) {
        return !props || !props.Cart;
    }
};


class Cart extends Component {


    render() {
        return (
            <div id="cart">
                <div id="carrito">
                    <div className="title-container">
                        <h1 className="subtitle">TU CARRITO</h1>
                    </div>
                </div>
                <div id="resume">
                    <div className="title-container" id="resume-container">
                        <span id="resume-title">Resumen</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default MapTo('spa-react-v3/components/cart')(Cart, CartConfig);
