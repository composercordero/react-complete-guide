import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css'
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = props => {
    
    const ctx = useContext(CartContext)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    const hasItems = ctx.items.length > 0

    const handleCartItemRemove = (id) => {

    }

    const handleCartItemAdd = (item) => {

    }

    const cartItems = (<ul className={classes['cart-items']}>
        {ctx.items.map((item)=> (
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onRemove={handleCartItemRemove.bind(null, item.id)}
                onAdd={handleCartItemAdd.bind(null, item)}
                />
            ))}
        </ul>)

    const handleOrder = () => {
        console.log('Ordering...')
    };
    
    return(<>
    <Modal onClose={props.onClose}>
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={handleOrder}>Order</button>}
            </div>
        </div>
    </Modal>
    </>);
};

export default Cart;