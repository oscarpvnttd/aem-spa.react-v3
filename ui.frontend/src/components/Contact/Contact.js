import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { Person, CloudUpload } from "@material-ui/icons";
import "@fontsource/strait"
import "@fontsource/teko"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';
import { TextField } from "@material-ui/core";
require('./Contact.css')

const ContactConfig = {
    emptyLabel: 'Products',
    isEmpty: function (props) {
        return !props || !props.Products;
    }
};


class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <div>
                    <div id="line"></div>
                    <h1 className="typetitle">CONTACTE CON NOSOTROS</h1>
                </div>
                <form className="contact-form">
                    <div>
                        <label>ASUNTO</label>
                        <br />
                        <select className="contact-inp">
                            <option value="1">Camichan</option>
                        </select>
                    </div>
                    <div>
                        <label>DIRECCIÓN DE CORREO ELECTRÓNICO</label>
                        <br />
                        <input
                            type="email"
                            placeholder="su@email.com"
                            className="contact-inp"
                        />
                    </div>
                    <div id="opcional">
                        <label>ARCHIVO ADJUNTO</label>
                        <br />
                        <label className="file">
                            <input type="file" id="file" aria-label="File browser example" />
                            <CloudUpload className="upload-icon"/>
                            <span className="file-custom"></span>
                        </label>
                        <br />
                        <span className="span-optional">opcional</span>
                    </div>
                    <div>
                        <label>MENSAJE</label>
                        <br />
                        <textarea className="contact-text"
                            placeholder="¿Cómo podemos ayudarle?"
                        />
                    </div>

                    <button className="env-button">
                        ENVIAR
                    </button>
                </form>
            </div>
        );
    }

}

export default MapTo('spa-react/components/contact')(Contact, ContactConfig);
