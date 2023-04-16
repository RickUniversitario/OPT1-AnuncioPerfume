import './Card.css'
import { Button } from '../Button/Button'
import perfumeImage from '../../assets/images/image-product-desktop.jpg'

export function Card() {

    return (
    
    <div className='Card'>
            <img src={perfumeImage} className='Card__Image' />
            <div className='Card__Body'>
                <span className='Card__Body__Product'> PERFUME </span>
                <h1 className='Card__Body__Title'> Gabrielle Essence Eau De Parfum </h1>
                <p className='Card__Body__Paragraph'>
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>

                <div className='Card__Body__Price'>
                    <p>$149.99</p>
                    <span>$169.99</span>
                </div>

                <Button></Button>
            </div>
        </div>
    
    )

}