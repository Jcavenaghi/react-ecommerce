import logo from '../../assets/logo-parfum.svg'
function CartWidget() {
    return (
        <img src= {logo}
        width="100"
        height="40"
        className="logo-parfum" 
        alt="logo" />
    );
}

export { CartWidget }