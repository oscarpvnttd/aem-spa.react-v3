import { Link, NavLink } from "react-router-dom"
import React, { Component, useState } from 'react';
import { Visibility, VisibilityOff, Lock } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';

require('./CustomFooter.css');

const CustomFooterConfig = {
    emptyLabel: 'CustomFooter',
    isEmpty: function (props) {
        return !props || !props.CustomFooter;
    }
};

class CustomFooter extends Component {

    render() {
        return (
            <footer className="cfooter">
                <p className="arr">@ 2022 . Camichan</p>
                <div className="links">
                    
                    <NavLink to="/" className="link">
                        Contacte con nosotros
                    </NavLink>
                    <NavLink to="/" className="link">
                        Envío
                    </NavLink>
                    <NavLink to="/" className="link">
                        Política de devolución
                    </NavLink>
                    <NavLink to="/" className="link">
                        Politica de Cookies
                    </NavLink>
                    <NavLink to="/" className="link">
                        Politica de privacidad
                    </NavLink>
                    <NavLink to="/" className="link">
                        Aviso legal
                    </NavLink>
                </div>
            </footer>
        );
    }

}

export default MapTo('spa-react/components/cfooter')(CustomFooter, CustomFooterConfig);
