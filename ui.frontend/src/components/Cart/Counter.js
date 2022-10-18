import { useState } from "react"

require('./Cart.css')

export const Counter = ({handler, value = 1, id, talla}) => {

    const [counter, setCounter] = useState(value)

    function handleAdd() {
        setCounter(counter + 1)
        let list = JSON.parse(localStorage.getItem('productList')) || [];
        for (var i = 0; i < list.length; i++) {
            if (list[i].id === id && list[i].tallas === talla) {
                list[i].count += 1;
                break;
            }
        }
        localStorage.setItem('productList', JSON.stringify(list));
        handler();
    }

    function handleSub() {
        if(counter > 1) setCounter(counter - 1)
        let list = JSON.parse(localStorage.getItem('productList')) || [];
        for (let i = 0; i < list.length; i++) {
            let pd = list[i];
            if (pd.id === id && pd.tallas === talla) {
                if(pd.count > 1)pd.count -= 1;
                break;
            }
        }
        localStorage.setItem('productList', JSON.stringify(list));
        handler();
    }

    return (
        <div id="counter">
            <button className="counter-button" id="left" onClick={handleSub}>
                -
            </button>
            <span id="counter-span">{counter}</span>
            <button className="counter-button" id="right" onClick={handleAdd}>
                +
            </button>

        </div>
    )
}