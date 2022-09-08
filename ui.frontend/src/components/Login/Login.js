import { Link, NavLink } from "react-router-dom"
import React, { Component, useState } from 'react';
import { Visibility, VisibilityOff, Lock } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';

require('./Login.css');

const LoginConfig = {
    emptyLabel: 'Login',
    isEmpty: function (props) {
        return !props || !props.Login;
    }
};

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            vis: false
        }
    }

    render() {
        return (
            <div className="login">
                <h1 className="title">INICIAR SESIÓN CON SU CUENTA</h1>
                <form className="loginform">
                    <span className="login-span">DIRECCIÓN DE CORREO ELECTRÓNICO *</span>
                    <input
                        className="lmail"
                        type="email"
                    />
                    <span className="login-span">CONTRASEÑA *</span>
                    <div className="password-box">

                        <input
                            className="pinp"
                            type={this.state.vis ? "text" : "password"}
                        />
                        <button type="button" className="visbutton" onClick={() => this.setState({ vis: !this.state.vis })}>
                            {this.state.vis
                                ? <VisibilityOff className="vis" />
                                : <Visibility className="vis" />
                            }
                        </button>
                        <div className="olv">
                            <NavLink to="/" className="navolv">¿Olvidó su contraseña?</NavLink>
                            <p className="con"><Lock className="lock" />Conexión segura</p>
                        </div>
                    </div>

                    <button className="logb">INICIAR SESIÓN</button>
                </form>
                <NavLink to="/" className="navsi">¿No tiene una cuenta? Cree una aquí</NavLink>
            </div>
        );
    }

}

export default MapTo('spa-react/components/login')(Login, LoginConfig);
