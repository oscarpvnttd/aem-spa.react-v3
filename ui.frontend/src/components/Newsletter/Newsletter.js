import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { Person, ShoppingBasket } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';

require('./Newsletter.css');

const NewsletterConfig = {
    emptyLabel: 'Newsletter',
    isEmpty: function (props) {
        return !props || !props.Newsletter;
    }
};

class Newsletter extends Component {

    render() {
        return (
            <div className="newsletter">
                <h1 className="title">NEWSLETTER</h1>
                <form className="mailform">
                    <input
                        className="mail"
                        type="email"
                        placeholder="Su dirección de correo electrónico"
                    />
                    <button className="sub">SUSCRÍBETE</button>
                </form>
                <p className="info">Puede darse de baja en cualquier momento. Para ello, consulte nuestra información de contacto en el aviso legal.</p>
            </div>
        );
    }

}

export default MapTo('spa-react-v3/components/newsletter')(Newsletter, NewsletterConfig);
