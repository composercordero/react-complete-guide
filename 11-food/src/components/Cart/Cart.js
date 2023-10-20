import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css'

const Cart = props => {
    
    const cartItems = (<ul className={classes['cart-items']}>
        {[{id: 'c1', name: 'sushi', amount: 2, price: 12.99}].map((item)=> (
            <li>{item.name}</li>))}
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
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button} onClick={handleOrder}>Order</button>
            </div>
        </div>
    </Modal>
    </>);
};

export default Cart;