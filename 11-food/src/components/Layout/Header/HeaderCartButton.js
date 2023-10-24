import classes from './HeaderCartButton.module.css'
import CartIcon from '../../Cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import { useEffect, useState } from 'react';


const HeaderCartButton = (props) => {
    
    const ctx = useContext(CartContext);
    const [btnAnimation, setBtnAnimation] = useState(false);
    const { items } = ctx

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${btnAnimation? classes.bump : ''}`;

    useEffect(() => {
        if(ctx.items.length === 0) {
            return;
        }
        setBtnAnimation(true);

        const timer = setTimeout(()=> {
            setBtnAnimation(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    },[items])
    
    return(<>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span> Your Cart</span>
                <span className={classes.badge}>
                    {numberOfCartItems}
                </span>
            </button>
    </>);
}

export default HeaderCartButton