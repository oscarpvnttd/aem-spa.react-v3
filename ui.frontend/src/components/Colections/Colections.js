import { Link, NavLink } from "react-router-dom"
import React, { Component } from 'react';
import { Person, ShoppingBasket } from "@material-ui/icons";
import "@fontsource/strait"
import { MapTo } from '@adobe/aem-react-editable-components';
import { withRoute } from '../RouteHelper/RouteHelper';
import { getColections } from "../../utils/getColections";
import { ColectionCard } from "./ColectionCard";

require('./Colections.css')

const ColectionsConfig = {
    emptyLabel: 'Colections',
    isEmpty: function (props) {
        return !props || !props.Colections;
    }
};

const colections = getColections();

class Colections extends Component {

    render() {
        return (
            <div className="colections">
                <div>
                    <div id="line"></div>
                    <h1 className="typetitle">COLECCIONES</h1>
                </div>
                <div className="col-container">
                    {colections.map((colection => (
                        <div className="col-card" key={colection}>
                            <ColectionCard src={require("../../data/images/" + colection + ".jpg").default} alt={colection} />
                        </div>
                    )))}
                </div>
            </div>
        );
    }

}

export default MapTo('spa-react/components/colections')(Colections, ColectionsConfig);
