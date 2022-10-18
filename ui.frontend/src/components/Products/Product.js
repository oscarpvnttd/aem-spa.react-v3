import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { AddShoppingCart } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { getProductById } from "../../utils/getProductById";

require('./Product.css');

let selected = 'M';

const ProductConfig = {
    emptyLabel: 'Product',
    isEmpty: function (props) {
        return !props || !props.Product;
    }
};

const addProduct = (product) => {
    let list = JSON.parse(localStorage.getItem('productList')) || [];
    let exists = false;
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === product.id && list[i].tallas === selected) {
            list[i].count += 1;
            exists = true;
            break;
        }
    }
    if (!exists) list.push({ ...product, tallas: selected, images: product.images[0], count: 1 });
    localStorage.setItem('productList', JSON.stringify(list));
}

const changeSelected = (talla) => {
    selected = talla;
}



class Product extends Component {

    constructor(props) {
        super(props);
        this.product = getProductById(this.props.id);
        this.isActive = false;
    }

    handler = () => {
        this.forceUpdate();
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
                                    <img className="imgs" key={image} src={require(`../../data/images/${image}.jpg`).default} />
                                ))
                            }
                        </div>
                        <div id="details">
                            {this.product.detalles.map((detalle) => (
                                <span key={detalle} className="detail">{detalle}</span>
                            ))}
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
                                    <button key={talla} onClick={() => changeSelected(talla)} className="talla">{talla}</button>
                                ))}
                            </div>
                            <br />
                            <button id="add-button" onClick={() => addProduct(this.product)}><AddShoppingCart id="cart-icon" /> AÑADIR</button>
                            <br />
                            <button id="guide-button"  onClick={() => {this.isActive = !this.isActive; this.handler()}}>GUIA DE TALLAS</button>
                        </div>
                        <div id="tallaje" style={{display: this.isActive? 'block':'none'}}>
                            <img id="tallaje-img" src={require("../../data/images/tallaje.png").default}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default MapTo('spa-react-v3/components/product')(Product, ProductConfig);
