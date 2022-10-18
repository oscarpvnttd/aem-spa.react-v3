import { Counter } from './Counter';
import { Close } from "@material-ui/icons";

require('./Cart.css');



export const CartProduct = ({ handler, product: { id, name, jname, precio, images, tallas, count } }) => {
  const image = require(`../../data/images/${images}.jpg`);

  const deleteProduct = () => {
    let list = JSON.parse(localStorage.getItem('productList')) || [];
    let exists = false;
    let index = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id && list[i].tallas === tallas) {
            index = i;
            exists = true;
            break;
        }
    }
    if (exists) list.splice(index,1);
    localStorage.setItem('productList', JSON.stringify(list));
    handler();
  }

  return (
    <div className="cart-product">
      <div className='cart-product-info'>
        <img className="cart-image" src={image.default} alt={name} />
        <div id='info'>
          <span id='name-info'>{name} {jname}</span>
          <span>Tamaño: {tallas}</span>
        </div>
      </div>
      <Counter handler = {handler} value={count} id={id} talla={tallas} />
      <div id="price-close">
        <button id="delete-button" onClick={()=> deleteProduct()}><Close id="delete-icon" style={{ color: 'white' }}/></button>
        <span id="price-info">
          {(parseFloat(precio.replace(',','.')) * count).toFixed(2).replace('.',',')} €
        </span>
        <span>{precio} €/ud</span>
      </div>
    </div>
  )
}
