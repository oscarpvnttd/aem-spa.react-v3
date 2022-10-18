import { Link, NavLink } from "react-router-dom"
import { Component } from 'react';
import { Person, ShoppingBasket } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';

require('./Navbar.css')

const NavbarConfig = {
    emptyLabel: 'Navbar',
    isEmpty: function (props) {
        return !props || !props.Navbar;
    }
};

class Navbar extends Component {

    render() {

        return (
            <nav id="navb" className="navbar navbar-expand-sm navbar-black bg-black">
                <NavLink className="nav-link" to="/">
                    <img id="logo" className="logo" src={require("../../camichan-logo.jpg").default} alt='camichanlogo' />
                </NavLink>
                <div className="navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">CAMISETAS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">SUDADERAS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">COLECCIONES</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">CONTACTO</NavLink>
                        </li>

                    </ul>

                </div>
                <NavLink className="nav-link" to="">
                    <Person style={{ color: 'white' }} />
                </NavLink>
                <NavLink className="nav-link" to="">
                    <ShoppingBasket style={{ color: 'white' }} />
                    <label id="cart-num">{(JSON.parse(localStorage.getItem('productList')) || []).length}</label>
                </NavLink>
            </nav>
        );
    }

}

export default MapTo('spa-react-v3/components/navbar')(Navbar, NavbarConfig);
