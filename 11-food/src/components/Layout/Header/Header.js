import classes from './Header.module.css'
import meals from '../../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    
    return(<>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="table full of delicious food"/>
        </div>
    </>)
};

export default Header