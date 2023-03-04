import logo from '../../assets/logo2.svg'
import { ItemCount } from '../itemCount/ItemCount';
function CartWidget() {
    return (
        <div style={{ position: 'relative', width: '50px', height: '50px' }}>
            <img src= {logo}
            width="100"
            height="40"
            className="logo-parfum" 
            alt="logo" />
            <div style={{ position: 'absolute', bottom: 4, right: 5, backgroundColor: 'green', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px' }}>
                <ItemCount/>
            </div>
            
        </div>
    );
}

export { CartWidget }