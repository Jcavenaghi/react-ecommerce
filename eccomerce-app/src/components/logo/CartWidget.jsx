import logo from '../../assets/logo2.svg'
import { ItemCount } from '../itemCount/ItemCount';
function CartWidget() {
    return (
        <>
            <img src= {logo}
            width="100"
            height="40"
            className="logo-parfum" 
            alt="logo" />
            <ItemCount/>
        </>
    );
}

export { CartWidget }