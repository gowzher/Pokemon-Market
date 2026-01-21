import { TbPokeball } from "react-icons/tb";
import "../css/header.css"
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectTotalCount, selectTotalPrice } from "../redux/cartSlice";
import { pokemons } from "../data/Pokemons";
import type { RootState } from "../redux/store";

function Header() {
    const cartState = useSelector((state: RootState) => state.cart);
    const totalCount = selectTotalCount({ cart: cartState });
    const totalPrice = selectTotalPrice({ cart: cartState }, pokemons);

    return (
        <header className="header">
            <h1 className="title">
                <span className="logo-letter">P</span>okemon Shop
            </h1>
            <div className="cart-summary">
                <div className="cart-item">
                    <FaShoppingBasket size={25} />
                    <span>{totalCount}</span>
                </div>

                <div className="cart-item">
                    <TbPokeball size={25} />
                    <span>{totalPrice}</span>
                </div>
            </div>
        </header>
    )
}

export default Header