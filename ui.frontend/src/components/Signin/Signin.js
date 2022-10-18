import { Link, NavLink } from "react-router-dom"
import React, { Component, useState } from 'react';
import { Visibility, VisibilityOff, Lock } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';

require('./Signin.css');

const SigninConfig = {
    emptyLabel: 'Signin',
    isEmpty: function (props) {
        return !props || !props.Signin;
    }
};

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vis: false
        }
    }

    render() {
        return (
            <div className="signin">
                <h1 className="title">CREAR UNA CUENTA</h1>
                <form className="signinform">
                    <p className="gray-text">¿Ya tiene una cuenta? <NavLink to="" id="navli">¡Inicie sesión!</NavLink></p>
                    <div id="trait">
                        <span className="signin-span thin">TRATAMIENTO</span>
                        <div id="checkbox-trait">
                            <label className="label-radio"><input name="gender" className="input-radio" type="radio" />Sr.</label>
                            <label className="label-radio"><input name="gender" className="input-radio" type="radio" />Sra.</label>
                        </div>
                    </div>
                    <span className="signin-span">NOMBRE *</span>
                    <input
                        className="input-box"
                        type="text"
                        required
                    />
                    <span className="signin-span">APELLIDOS *</span>
                    <input
                        className="input-box"
                        type="text"
                        required
                    />
                    <span className="signin-span">DIRECCIÓN DE CORREO ELECTRÓNICO *</span>
                    <input
                        className="input-box"
                        type="email"
                        required
                    />
                    <span className="signin-span">CONTRASEÑA *</span>
                    <div className="password-box">

                        <input
                            className="pinp"
                            type={this.state.vis ? "text" : "password"}
                            required
                        />
                        <button type="button" className="visbutton" onClick={() => this.setState({ vis: !this.state.vis })}>
                            {this.state.vis
                                ? <VisibilityOff className="vis" />
                                : <Visibility className="vis" />
                            }
                        </button>

                    </div>
                    <span className="signin-span">FECHA DE NACIMIENTO</span>
                    <input
                        className="input-box date"
                        type="date"
                    />
                    <p className="gray-text">(Ejemplo: 31/05/1970)</p>
                    <div id="checkboxes">
                        <label className="pcheck"><input type="checkbox" className="bcheck"/>Recibir ofertas de nuestros socios</label>
                        <label className="pcheck"><input type="checkbox" className="bcheck"/>Suscribirse a nuestro boletín de noticias</label>
                        <label className="pcheck italic">Puede darse de baja en cualquier momento. Para ello, consulte nuestra información de contacto en el aviso legal.</label>
                        <label className="pcheck"><input type="checkbox" className="bcheck" required/>Acepto las condiciones generales y la política de confidencialidad *</label>
                    </div>
                    <button className="sub">GUARDAR</button>
                </form>
            </div>
        );
    }

}

export default MapTo('spa-react-v3/components/signin')(Signin, SigninConfig);
