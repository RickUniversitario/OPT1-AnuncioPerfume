import cartIcon from '../../assets/images/icon-cart.svg'
import './Button.css'



export function Button () {

    return (

        <button className="Button">
            <img src={cartIcon} alt="Ícone do carrinho"/>
            <span>Add to Cart</span>
        </button>

    )

}