import React, { useState } from 'react'
import Item from './item';
import './shopStyle.css';
import './itemStyle.css';
import Form from './AddItemForm'
export default function Shop() {
    const [filter, setFilter] = useState(false)
    const [items, setItems] = useState(
        [
            { id: 1, nameItem: "itemm1", price: 100, unitsInStock: 9, emoji: "🍟" },
            { id: 2, nameItem: "item2", price: 200, unitsInStock: 21, emoji: "🎁" },
            { id: 3, nameItem: "item3", price: 300, unitsInStock: 0, emoji: "🍄" }
        ]
    );
    const [cart, setCart] = useState([]);
    //let totalPrice=0;//every time it does it! why? it must be a useState !
    let [totalPrice, setTotalPrice] = useState(0)
    const shop_addNewItemToShop = newItemToAdd => {//sent it to form comp and there it happens in submit
        newItemToAdd.id = items[items.length - 1].id + 1;
        setItems([...items, newItemToAdd])
    }
    const addToCart = item => {
        if (item.unitsInStock == 0) {
            alert("the item " + item.nameItem + " is out of stock");
            return;
        }
        let index = items.findIndex(itemInCart => (itemInCart.id == item.id));
        let copyItem = { ...item };
        copyItem.unitsInStock--;
        totalPrice += item.price;
        setTotalPrice(totalPrice)
        items.splice(index, 1, copyItem);
        setItems([...items])
        setCart([...cart, item]);
    }

    const toggleFilter = () => { setFilter(!filter) }
    const deleteFromCart = theSelectedItem => {
        let index = cart.findIndex(itemInCart => (itemInCart.id == theSelectedItem.id));
        let cartCopy = [...cart];
        totalPrice -= theSelectedItem.price;
        setTotalPrice(totalPrice)
        cartCopy.splice(index, 1);
        setCart(cartCopy);
    }
    const countInStock = arr => { return arr.filter(item => item.unitsInStock != 0) }//no {} as regular arrow function
    return (<>
        <div className='shopDiv'>
            <h2 className='title'>{filter ? "filtered: " + countInStock(items).length + " items in the shop, exist in stock" : "unfiltered: " + items.length + " items in the shop, some doesnt exist in stock"}</h2>
            <input className='button' type='button' onClick={toggleFilter} value={filter ? "show all items" : "show only availabe in stock items"}></input>
            <div className='itemsInShop'>
                {items && items.filter(item_i => (filter && item_i.unitsInStock != 0) || (!filter && item_i)).map(itemI => <Item className={'itemDiv'} status={"inShop"} item={itemI} funcName={"add to cart"} func={addToCart}></Item>)}
            </div>
            <h2 className='title'>{cart.length} items in the cart 🛒total price: {totalPrice}$</h2>
            {cart.length > 3 && <p>you bought so many items! you are our favoraite customer!!!</p>}
            <div className='itemsInCart'>
                {cart && cart.map(itemInCart => <Item func={deleteFromCart} funcName={"delete from cart"} className={cart.length>3?'cartItem':'itemDiv'} status={"inCart"} item={itemInCart}></Item>)}
            </div >
            <Form shop_addNewItemToShop={shop_addNewItemToShop}></Form>
        </div>
    </>)
}